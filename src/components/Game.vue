<template>
  <div>
    <canvas width="640" height="480" ref="canvas"></canvas>
    <button
      v-if="is_game_enabled"
      :class="['sticky-button', { disabled: true }]"
      @click="toggleGame"
    >
      Disable Game
    </button>
    <button v-else :class="['sticky-button']" @click="toggleGame">
      Enable Game
    </button>

    <DatGui
      closeText="Close controls"
      openText="Open controls"
      closePosition="bottom"
    >
      <DatString label="FPS" v-model="current_fps"></DatString>
      <!-- <DatBoolean v-model="wgsl_renderer" label="Renderer"></DatBoolean> -->
      <DatNumber
        label="RES_X"
        v-model="resolution.x"
        :min="0"
        :max="1920"
      ></DatNumber>
      <DatNumber
        label="RES_Y"
        v-model="resolution.y"
        :min="0"
        :max="1080"
      ></DatNumber>
      <!-- <DatFolder label="Performance">
        <component
          :is="`DatNumber`"
          v-for="(value, key) in performance_metrics"
          v-bind:key="key"
          v-model="performance_metrics[key].average"
          :label="key"
      /></DatFolder> -->
      <DatFolder label="Shader">
        <component
          :is="`DatNumber`"
          v-for="(value, key) in fragment_shader_uniforms"
          v-bind:key="key"
          v-model="fragment_shader_uniforms[key].updated_value"
          :label="value.name"
          :min="fragment_shader_uniforms[key].range?.start"
          :max="fragment_shader_uniforms[key].range?.end"
      /></DatFolder>
    </DatGui>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, reactive, markRaw, watch } from "vue";

import { CenoteGame } from "../modules/babylon_main";
export default {
  data() {
    return {
      is_game_enabled: true,
      current_fps: "0 fps",
      resolution: { x: 300, y: 200 },
      fragment_shader_varyings: {},
      GAME: null,
    };
  },
  watch: {
    is_game_enabled(n, o) {
      if (!n) {
        this.GAME?.pause();
      } else {
        if (n !== o) this.GAME?.run();
      }
    },
    resolution: {
      handler(n) {
        this.$refs.canvas.width = n.x;
        this.$refs.canvas.height = n.y;
        this.onResize();
        this.GAME.MUST_RESIZE = true;
      },
      deep: true,
    },
    fragment_shader_uniforms: {
      handler() {
        console.log("Updated a shader constant!");
        this.zeroPerfCounters();
        this.MAX_FRAMES++;
      },
      deep: true,
    },
  },
  computed: {},
  async mounted() {
    const storedState = JSON.parse(localStorage.getItem("is_game_enabled"));
    if (storedState !== null) {
      this.is_game_enabled = storedState;
    }
    this.fps_interval_handle = window.setInterval(
      (e) =>
        (this.current_fps = this.GAME?.engine
          ? this.GAME?.engine?.getFps()?.toFixed() + " fps"
          : "0 fps"),
      1000
    );
    this.$refs.canvas.width = this.resolution.x;
    this.$refs.canvas.height = this.resolution.y;
    let GAME = new CenoteGame(this.$refs.canvas);

    await GAME.init();
    this.GAME = markRaw(GAME);
    this.resizeCanvasToFillViewport(this.$refs.canvas, 24);
    this.fragment_shader_uniforms = reactive(
      Object.fromEntries(GAME.extracted_constant_defs.map((e) => [e.name, e]))
    );
    this.fragment_shader_varyings = reactive(GAME.VARYING_VALUES);
    window.addEventListener("resize", this.onResize);

    this.enterMainDrawLoop();
  },
  unmounted() {
    window.clearInterval(this.fps_interval_handle);
    this.GAME.kill();
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    toggleGame() {
      this.is_game_enabled = !this.is_game_enabled;
      // Save the state to localStorage
      localStorage.setItem(
        "is_game_enabled",
        JSON.stringify(this.is_game_enabled)
      );
    },
    resizeCanvasToFillViewport(canvas, padding = 0) {
      const resize = () => {
        // Get the available width and height minus padding
        const availableWidth = window.innerWidth - padding * 2;
        const availableHeight = window.innerHeight - padding * 2;

        // Get the original size of the canvas
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Calculate the scale factors
        const scaleX = availableWidth / canvasWidth;
        const scaleY = availableHeight / canvasHeight;

        // Use the smaller scale factor to maintain aspect ratio
        const scale = Math.min(scaleX, scaleY);

        // Apply the CSS transform
        canvas.style.transform = `scale(${scale})`;
        canvas.style.transformOrigin = "center center";
        this.GAME.canvas_rect = canvas.getBoundingClientRect();
      };

      // Resize immediately
      resize();
    },
    onResize() {
      this.resizeCanvasToFillViewport(this.$refs.canvas, 24);
    },

    enterMainDrawLoop() {
      if (this.is_game_enabled) this.GAME.run();
      // Resizing
      // function resizeCanvas (canvas) {
      //   canvas.width = window.innerWidth;
      //   // canvas.width = window.innerWidth - myDrawerWidth;
      //   canvas.height = window.innerHeight;
      //   // canvas.height = window.innerHeight - (myHeaderHeight + myFooterHeight);
      // }
      // resizeCanvas(this.$refs.canvas);

      // window.addEventListener('resize', () => {
      //   // resizeCanvas(this.$refs.canvas);
      //   this.GAME.engine.resize(true);
      //   this.canvas.width = this.GAME.varying.X_RES;
      //   this.canvas.height = this.Y_RES;
      // });
    },
  },
};

function computeIndexRanges(dataEntries, optionalProps = {}) {
  const indexMap = dataEntries.reduce(
    (acc, [key, array, primitive_type], index) => {
      const start = acc.prevEnd + 1; // Start from the next index after the previous array
      const end = start + array.length - 1; // Calculate the end index
      acc[key] = {
        start,
        end,
        length: array.length,
        ...optionalProps,
        primitive_type,
      }; // Assign the range to the key
      acc.prevEnd = end; // Update the previous end index for the next iteration
      return acc;
    },
    { prevEnd: -1 }
  );

  delete indexMap.prevEnd;
  return indexMap;
}
</script>

<style scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
canvas {
  border-radius: 15px;
  border: 1px solid #333;
}

/* Button styles */
.sticky-button {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1000;
}

.sticky-button.disabled {
  background-color: #dc3545;
}
</style>
