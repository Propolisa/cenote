import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  // base: "/cenote/",
  plugins: [vue()],
  resolve: {
    alias: {
      'babylonjs': mode === 'development' ? 'babylonjs/babylon.max' : 'babylonjs'
    }
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
}))
