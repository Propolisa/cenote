import * as BABYLON from 'babylonjs'

import shader from "../modules/raymarch_noise.wgsl?raw";
import SHADER_MODULES from "../modules/wgsl_modules/index.js"
import { addGridPoints, addGroundGrid, setupDebugView, setupStorageBuffer } from './experiments';
import { boids3d } from '../libs/BoidsWebGPU/main3d';

import { startTrackingPlayer, updatePathLine } from './player_path_gen.js';
let wgsl_constant_decl_regex =
	/const\s+(?<constantName>\w+)(:\s*(?<constantType>\w+))?\s*=\s*(?<initialValue>[^;]+);(?:\s*\/\/\s*\{(?<humanReadableName>[^:]+):(?<rangeOrValues>[^\}]+)\})?/;

BABYLON.WebGPUTintWASM.DisableUniformityAnalysis = true
const BLAST_STRUCT_FLOAT_COUNT = 5
const MAX_BLAST_COUNT = 256

export class CenoteGame {


	constructor(canvas) {
		this.blast_zones = [
			10, 10, 10, 7, 1.0, // position vec3f, radius f32, smoothness f32
			10, 20, 30, 7, 1.0 // pos
		]
		this.raycast_detonate_volume = [
			10, 10, 10, 7, 0.8 // position vec3f, radius f32
		]
		this.scale = 512
		this.populated_blast_zone_count = 0;
		this.blast_zones.push(...new Array((MAX_BLAST_COUNT * BLAST_STRUCT_FLOAT_COUNT) - this.blast_zones.length).fill(-10))
		this.canvas = canvas
		this.state = { zoomLevel: 1 }
		this.mouse_pos =
			this.START_TIME = new Date().getTime();
		this.canvas_rect = this.canvas.getBoundingClientRect();



		this.VARYING_VALUES = {

			"resolution": {
				getter: (e) => [this.engine?.getRenderWidth(), this.engine?.getRenderHeight()],
				primitive_type: "vec2f",
			},

			"time": {
				getter: (e) => (new Date().getTime() - this.START_TIME) / 1000,
				primitive_type: "f32",
			},

			"mouse": {
				getter: (e) => {
					const mouseX = this.scene.pointerX
					const mouseY = this.scene.pointerY

					let rect = this.canvas_rect
					// Calculate the scale factors
					const scaleX = rect.width / canvas.width;
					const scaleY = rect.height / canvas.height;

					// Map the mouse coordinates to the canvas intrinsic coordinates
					const canvasX = (mouseX) / scaleX;
					const canvasY = (mouseY) / scaleY;

					return [Math.floor(canvasX), Math.floor(canvasY)]
				},
				primitive_type: "vec2f",
			},

			"NEAR_CLIP": {
				getter: (e) => this.main_camera.minZ,
				primitive_type: "f32",
			},
			"FAR_CLIP": {
				getter: (e) => this.main_camera.maxZ,
				primitive_type: "f32",
			},
			"zoom": { getter: (e) => this.main_camera?.fov, primitive_type: "f32" },
			"upos": {
				getter: (e) => [
					this.main_camera?.position?.x || 0,
					this.main_camera?.position?.y || 0,
					this.main_camera?.position?.z || 0,
				],
				primitive_type: "vec3f",
			},
			"urot":
			{
				getter: (e) => [
					this.main_camera?.rotation?.x || 0,
					this.main_camera?.rotation?.y || 0,
				],
				primitive_type: "vec2f",
			},
			"blast_zones_count":
			{
				getter: (e) =>
					this.blast_zones?.length / BLAST_STRUCT_FLOAT_COUNT || 0
				,
				primitive_type: "u32",
			}
		}
	}



	async init() {
		var engine = new BABYLON.WebGPUEngine(this.canvas, {
			setMaximumLimits: true,
			enableAllFeatures: true
		});
		await engine.initAsync();
		engine.compatibilityMode = false
		engine.dbgShowShaderCode = true
		engine.forceSetSize = true
		this.engine = engine;
		this.scene = await this.createScene()

		// this.boids_sim = boids3d(engine,this.scene,this.main_camera)
	}

	debug(debugOn = true) {
		if (debugOn) {
			this.scene.debugLayer?.show({ overlay: true });
		} else {
			this.scene.debugLayer?.hide();
		}
	}

	run() {

		// this.debug(true);
		this.engine.runRenderLoop(async () => {
			if (this.MUST_RESIZE) {
				this.engine.resize(true)
				this.MUST_RESIZE = false
			}

			this.scene.render();
			// await this.boids_sim.update()

		});
	}

	pause() {
		// this.debug(true);
		this.engine.stopRenderLoop()
	}

	kill() {
		this.engine.dispose()
	}

	async createScene() {


		let engine = this.engine
		let canvas = this.canvas

		// This creates a basic Babylon Scene object (non-mesh)
		var scene = new BABYLON.Scene(engine);
		this.scene = scene
		// addGridPoints(scene, 12);
		// setupDebugView(scene)
		// This creates and positions a free camera (non-mesh)
		var camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(-0.8890348684530087, 9.354150570792733, -30.72722360092826), scene);
		camera.minZ = 0
		camera.maxZ = 1800
		this.main_camera = camera
		// This targets the camera to scene origin
		// camera.setTarget(new BABYLON.Vector3(-0.8378040615956612, 6.792141176623879, -21.061124052588415));

		// This attaches the camera to the canvas
		camera.attachControl(canvas, true);


		camera.keysUpward.push(69); //increase elevation
		camera.keysDownward.push(81); //decrease elevations
		camera.keysUp.push(87); //forwards 
		camera.keysDown.push(83); //backwards
		camera.keysLeft.push(65);
		camera.keysRight.push(68);
		camera.inputs.add(new BABYLON.FreeCameraGamepadInput());
		camera.inputs.attached.gamepad.gamepadAngularSensibility = 200;
		camera.angularSensibility = 5000
		camera.inertia = 0.9
		// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
		var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);


		// Default intensity is 1. Let's dim the light a small amount
		light.intensity = 0.7;

		// Our built-in 'sphere' shape.
		// var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

		// Move the sphere upward 1/2 its height
		// sphere.position.y = 1;


		// Our built-in 'ground' shape.
		// var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
		// this.setupPlayerLine()
		this.setupRaymarchingPlane()



		return scene;
	}


	setupPlayerLine() {

		const size = 30
		const points = [
			new BABYLON.Vector3(0, 0, -2),
			new BABYLON.Vector3(size, 0, -2),
			new BABYLON.Vector3(size, size, -2),
			new BABYLON.Vector3(0, size, -2),
			new BABYLON.Vector3(0, 0, -2),
		]

		const line1 = BABYLON.CreateGreasedLine(
			'basic-line-1',
			{
				points: points,
			},
			{
				width: 10,
				materialType: BABYLON.GreasedLineMeshMaterialType.MATERIAL_TYPE_PBR,
				colorMode: BABYLON.GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY

			},


			this.scene
		)

		const pbr = line1.material
		pbr.metallic = 0.8;
		pbr.roughness = 0;
		// line1.material = new BABYLON.GreasedLineSimpleMaterial("glmat", this.scene, {}),
		// 	line1.material.forceDepthWrite = true


		// Define a playerPath object
		var playerPath = {
			positions: [],
			directions: [],
			intervalId: null
		};

		// Create an initial greased line
		const initialPoints = [this.main_camera.position.x, this.main_camera.position.y, this.main_camera.position.z];
		const greasedLine = BABYLON.CreateGreasedLine('pathLine', { points: initialPoints, updatable: true }, {
			width: 2, scene: this.scene,
			color: BABYLON.Color3.Red()
		});


		// Start tracking player movements every 500ms
		startTrackingPlayer({ player: this.main_camera, interval: 500, playerPath });

		const updateInterval = 2000;
		setInterval(() => {

			updatePathLine({ scene: this.scene, line: greasedLine, path: playerPath.positions, color: BABYLON.Color3.Red() });
		}, updateInterval);

	}

	setupRaymarchingPlane() {
		const MAIN_RENDER_TEXTURE = "SceneColor";
		const MAIN_DEPTH_TEXTURE = "SceneDepth";

		let scene = this.scene
		let { output: processed_wgsl, extracted_constant_defs } =
			processWgsl(shader);

		this.extracted_constant_defs = extracted_constant_defs


		BABYLON.ShaderStore.ShadersStoreWGSL["customQuadVertexShader"] = `   
		#include<sceneUboDeclaration>
        #include<meshUboDeclaration>

        attribute position : vec3<f32>;
        attribute normal : vec3<f32>;
        attribute uv: vec2<f32>;
 
        varying vNormal : vec3<f32>;
        varying vUV : vec2<f32>;



        @vertex
        fn main(input : VertexInputs) -> FragmentInputs {
			var vertexPosition = vertexInputs.position;
            vertexOutputs.vUV = vertexInputs.uv;
            vertexOutputs.position = vec4<f32>(vertexPosition, 1.0);
			// vertexOutputs.position = scene.viewProjection * mesh.world * vec4<f32>(vertexInputs.position * vec3<f32>(1.0), 1.0);
            // vertexOutputs.vNormal = vertexInputs.normal;
            // vertexOutputs.vUV = vertexInputs.uv;
        }    
    `;

		let fragShader = `
		struct BlastZone {
			position: vec3<f32>,
			radius: f32,
			softness: f32,
		};

		uniform blast_zones: array<f32, ${this.blast_zones.length}>;
		uniform raycast_detonate_volume: array<f32, ${BLAST_STRUCT_FLOAT_COUNT}>;
		
		${Object.entries(this.VARYING_VALUES).map(([k, v]) => {
			return `uniform ${k} : ${v.primitive_type};`
		}).join("\n")} 
		${extracted_constant_defs.map(({ name, primitive_type }) => {
			return `uniform ${name} : ${primitive_type};`
		}).join("\n")} 
		

		


		${processed_wgsl}d

        // @fragment
        // fn main(input : FragmentInputs) -> FragmentOutputs {
        //     fragmentOutputs.color = vec4<f32>((fragmentInputs.vUV.x + fragmentInputs.vUV.y)/2, (fragmentInputs.vUV.x + fragmentInputs.vUV.y)/2, (fragmentInputs.vUV.x + fragmentInputs.vUV.y)/2, 1.0);
        // }
    `;
		BABYLON.ShaderStore.ShadersStoreWGSL["customQuadFragmentShader"] = fragShader

		BABYLON.ShaderStore.ShadersStoreWGSL["customQuadPixelShader"] = fragShader

		// const myUBO = new BABYLON.UniformBuffer(this.engine);

		// myUBO.addUniform("scale", 1);
		// myUBO.updateFloat("scale", 1.5);
		// myUBO.update();


		var shaderMaterial = new BABYLON.ShaderMaterial("shader", scene, {
			vertex: "customQuad",
			fragment: "customQuad",
		},
			{
				attributes: ["position", "normal", "uv"],
				uniformBuffers: ["Scene", "Mesh"],
				shaderLanguage: BABYLON.ShaderLanguage.WGSL,
			}
		);
		// shaderMaterial.setUniformBuffer("myUBO", myUBO);


		// Our built-in 'sphere' shape.
		var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 50, segments: 32 }, scene);

		// Move the sphere upward 1/2 its height
		sphere.position.x = 80;
		// sphere.scaling = new BABYLON.Vector3(10, 10, 10);// (debugNode as BABYLON.Mesh)
		// Our built-in 'ground' shape.
		// var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 5000, height: 5000 }, scene);




		var vertexData = new BABYLON.VertexData();
		const HALF_WIDTH = 1.0;
		const vertices = new Float32Array([
			//   X,    Y,
			-HALF_WIDTH, -HALF_WIDTH, 0, // Triangle 1
			HALF_WIDTH, -HALF_WIDTH, 0,
			HALF_WIDTH, HALF_WIDTH, 0,

			-HALF_WIDTH, -HALF_WIDTH, 0, // Triangle 2
			HALF_WIDTH, HALF_WIDTH, 0,
			-HALF_WIDTH, HALF_WIDTH, 0,
		]);

		const uvs = new Float32Array([
			0, 0, // Triangle 1
			1, 0,
			1, 1,

			0, 0, // Triangle 2
			1, 1,
			0, 1,
		]);


		vertexData.positions = vertices;
		vertexData.indices = [0, 1, 2, 3, 4, 5];
		vertexData.uvs = uvs;

		// var customMesh = new BABYLON.Mesh("Raymarch", scene);
		// vertexData.applyToMesh(customMesh);

		function updateUniform(mat, { name, value, primitive_type }) {
			switch (primitive_type) {
				case "vec2f": return mat.setVector2(name, new BABYLON.Vector2(...value))
				case "vec3f": return mat.setVector3(name, new BABYLON.Vector3(...value))
				case "f32": return mat.setFloat(name, value)
				case "i32": return mat.setInt(name, value)
				case "u32": return mat.setUInt(name, value)
				default:
					break;
			}
		}
		// customMesh.material = shaderMaterial;
		// customMesh.setParent(this.main_camera);


		// scene.onBeforeRenderObservable.add(() => {
		// 	Object.entries(this.VARYING_VALUES).forEach(([k, v]) => {
		// 		let { getter, primitive_type } = v
		// 		let name = k
		// 		let value = getter.call(this)

		// 		updateUniform(shaderMaterial, { name, value, primitive_type })
		// 	})
		// });



		console.log(Object.fromEntries(Object.entries(this.VARYING_VALUES).map(([k, v]) => {
			let { getter, primitive_type } = v
			let name = k
			let value = getter.call(this)
			return [name, value]
		})))

		extracted_constant_defs.forEach(({ name, primitive_type, initial_value, updated_value = initial_value }) => {
			updateUniform(shaderMaterial, { name, value: updated_value, primitive_type })
		})



		// var SCENE_PASS = new BABYLON.PassPostProcess("Scene copy", 0.5, this.main_camera, BABYLON.TEXTURE_NEAREST_SAMPLINGMODE);
		// var SCALE_PASS = new BABYLON.PostProcess("passthrough", "passthrough", { size: 0.5, camera: this.main_camera, engine: this.engine, shaderLanguage: BABYLON.ShaderLanguage.WGSL} );
		// var SCALE_PASS2 = new BABYLON.PostProcess("passthrough2", "passthrough", { size:0.5,  camera: this.main_camera, engine: this.engine, shaderLanguage: BABYLON.ShaderLanguage.WGSL} );
		// let { blast_zones_buffer } = setupStorageBuffer(scene)

		// const raymarche3r_pp = new BABYLON.PostProcess('raymarcher', 'customQuad', null, ["SceneColor", "SceneDepth"], 1.0, this.main_camera, BABYLON.Texture.NEAREST_SAMPLINGMODE, this.engine, true,
		// 	undefined, undefined, undefined, undefined, undefined, undefined, BABYLON.ShaderLanguage.WGSL)
		//{ size: 0.5, samplers: ["SceneColor", "SceneDepth"], camera: this.main_camera, samplingMode: BABYLON.Texture.NEAREST_SAMPLINGMODE, engine: this.engine, shaderLanguage: BABYLON.ShaderLanguage.WGSL }

		/**
		const raymarcher_pp = new BABYLON.PostProcess('raymarcher', 'customQuad', null, ["SceneDepth"], 0.5, this.main_camera, BABYLON.Texture.NEAREST_SAMPLINGMODE, this.engine, true, undefined, undefined, undefined, undefined, undefined, undefined, BABYLON.ShaderLanguage.WGSL)
		// raymarcher_pp.externalTextureSamplerBinding = true
		
		let first = true;
		var lensEffect
		let depthTexture;
		function setDepthTexture(t) {
			depthTexture = t
			if (lensEffect && t.isReady) {
			
				Object.values(lensEffect._renderEffects).slice(0, 4).forEach(effect => {
					effect.getPostProcesses().forEach(pp => {
						pp.onApplyObservable.add((effect) => {
							effect._bindTexture("depthSampler", depthTexture);
						})
					})
				})
			}

		}

	
		raymarcher_pp.onApply = (effect) => {
			
			effect.setArray4("blast_zones", this.blast_zones )
			extracted_constant_defs.forEach(({ name, primitive_type, initial_value,updated_value=initial_value  }) => {
				updateUniform(effect, { name, value: updated_value,  primitive_type })
			})
			Object.entries(this.VARYING_VALUES).forEach(([k, v]) => {
				let { getter, primitive_type } = v
				let name = k
				let value = getter.call(this)

				updateUniform(effect, { name, value, primitive_type })
				

			})

		};

		let depthRenderer = scene.enableDepthRenderer(this.main_camera,null,null,null,false)
		raymarcher_pp.onApplyObservable.add((effect) => {
			
			if (first) {
				first = false;

				let depthTexture = depthRenderer.getDepthMap()._texture;

				// effect._bindTexture("SceneColor", SCENE_PASS.inputTexture.texture);
				effect._bindTexture("SceneDepth", depthTexture);			


			}
			this.engine.setDepthBuffer(true);

			this.engine.clear(null, false, true, false);
		});*/

		let SIZE = 128
		const mainTarget = new BABYLON.MultiRenderTarget(
			'target',
			SIZE,
			1,
			scene,
			{
				generateStencilBuffer: false,
				generateDepthTexture: false,
				generateDepthBuffer: false,
				doNotChangeAspectRatio: true,
				generateMipMaps: false,
			}
		);


		let depthRenderer = scene.enableDepthRenderer(this.main_camera, null, null, null, false)
		mainTarget.renderList.push(...scene.meshes);
		scene.customRenderTargets.push(mainTarget);
		const pipeline = new BABYLON.PostProcessRenderPipeline(this.engine, 'PIPELINE');
		const manager = scene.postProcessRenderPipelineManager;

		const gpu_state_values = new Float32Array([1, 0, 1,    // Purple
			1, 1, 0]);  // Yellow

		const gpu_state_values_buffer = new BABYLON.StorageBuffer(this.engine, gpu_state_values.byteLength);
		gpu_state_values_buffer.update(gpu_state_values);
		const last_read =
			scene.onAfterRenderObservable.addOnce(e => {

				let zoneMaterialPass = new BABYLON.PostProcess(
					"zoneRenderProcess",
					'customQuad',
					{
						size: { height: SIZE, width: SIZE },
						samplers: [
							MAIN_RENDER_TEXTURE,
							MAIN_DEPTH_TEXTURE
						],

						camera: this.main_camera,
						// samplingMode: BABYLON.Texture.NEAREST_SAMPLINGMODE,
						engine: this.engine,
						shaderLanguage: BABYLON.ShaderLanguage.WGSL,
						reusable: true
					});
				zoneMaterialPass.onApplyObservable.addOnce((effect) => {
					this.engine.setStorageBuffer("GpuState", gpu_state_values_buffer)
					effect.setTexture(MAIN_RENDER_TEXTURE, mainTarget);
					effect.setTexture(MAIN_DEPTH_TEXTURE, depthRenderer.getDepthMap());
				})


				zoneMaterialPass.onBeforeRender = (effect) => {

					// just need to convert this into floats again and we'll have bomb target position
					gpu_state_values_buffer.read(0, 4 * 3).then(e => {
						this.raycast_detonate_volume.splice(0, 3, ...new Float32Array(e.buffer))

						// this.blast_zones[start] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
						// this.blast_zones[start + 1] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
						// this.blast_zones[start + 2] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
						// this.blast_zones[start + 3] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
						// console.log(detonate_target)
					})
					if (this.blast_zones_dirty) {
						effect.setFloatArray("blast_zones", this.blast_zones)
						this.blast_zones_dirty = false
					}

					effect.setFloatArray("raycast_detonate_volume", this.raycast_detonate_volume)

					extracted_constant_defs.forEach(({ name, primitive_type, initial_value, updated_value = initial_value }) => {
						updateUniform(effect, { name, value: updated_value, primitive_type })
					})
					Object.entries(this.VARYING_VALUES).forEach(([k, v]) => {
						let { getter, primitive_type } = v
						let name = k
						let value = getter.call(this)

						updateUniform(effect, { name, value, primitive_type })


					})

				};


				const renderPass = new BABYLON.PostProcessRenderEffect(
					this.engine,
					"renderPassEffect",
					() => [zoneMaterialPass]
				);
				pipeline.addEffect(renderPass);


				console.log("test")
			})
		manager.addPipeline(pipeline);
		manager.attachCamerasToRenderPipeline("PIPELINE", this.main_camera);

		scene.onPointerObservable.add((pointerInfo) => {
			switch (pointerInfo.type) {

				case BABYLON.PointerEventTypes.POINTERTAP:
					console.log("POINTER TAP");
					let start = this.populated_blast_zone_count * BLAST_STRUCT_FLOAT_COUNT
					this.raycast_detonate_volume.splice(3, 2, 25 + (Math.random() * 15), 10)

					this.blast_zones.splice(start, BLAST_STRUCT_FLOAT_COUNT, ...this.raycast_detonate_volume);
					this.populated_blast_zone_count += 1
					this.blast_zones_dirty = true
					break;

			}
		});



		//window.pp = mainPostProcess
		//mainPostProcess.inputTexture = mainTarget.getInternalTexture();
		//mainTarget.addPostProcess(mainPostProcess);



		// this.engine.onResizeObservable.add((pp) => {
		// 	let effect = raymarcher_pp.getEffect()
		// 		depthRenderer.dispose()
		// 		depthRenderer = scene.enableDepthRenderer(this.main_camera,null,null,null,false)
		// 		const rtWrapper = SCENE_PASS.inputTexture;
		// 		let writableDepthTexture = rtWrapper.createDepthStencilTexture(undefined, undefined, this.engine.isStencilEnable,0, BABYLON.Constants.TEXTUREFORMAT_DEPTH24_STENCIL8)
		// 		let depthTexture = depthRenderer.getDepthMap();

		// 		effect._bindTexture("SceneColor", SCENE_PASS.inputTexture.texture);
		// 		effect._bindTexture("SceneDepth", depthTexture);
		// 		effect._bindTexture("SceneDepthOut", writableDepthTexture);
		// 		setDepthTexture(writableDepthTexture);


		// 	// this.engine.setDepthBuffer(true);
		// 	// this.engine.setDepthWrite(true);
		// 	// this.engine.clear(null, false, true, false);
		// });





		// lensEffect = new BABYLON.LensRenderingPipeline('lens', {
		// 	edge_blur: 1.0,
		// 	chromatic_aberration: 2.0,
		// 	distortion: 1.0,
		// 	dof_focus_distance: 1.3,
		// 	dof_aperture: 1.0,			// set this very high for tilt-shift effect
		// 	grain_amount: 1.0,
		// 	dof_pentagon: true,
		// 	dof_gain: 1.0,
		// 	dof_threshold: 1.0,
		// 	dof_darken: 0.25
		// }, scene, 1.0, this.main_camera);

		//post_process.activate(camera, depth_renderer.getDepthMap());
		let only_polyworld = true
		// scene.postProcessesEnabled = false
		// TODO override the depth map used by the lens pipeline process shaders with the custom one we created here.
		// switch normal render & depth render with space press
		document.addEventListener("keydown", function (evt) {
			if (evt.keyCode == 120) {
				only_polyworld = !only_polyworld;
				if (only_polyworld) {
					scene.postProcessesEnabled = false
				} else {
					scene.postProcessesEnabled = true
				}
			}
		}
		)

		document.addEventListener("keydown", (evt) => {
			if (evt.keyCode == 13) {
				let start = this.blast_zones.findIndex(e => e < 0)
				this.blast_zones[start] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
				this.blast_zones[start + 1] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
				this.blast_zones[start + 2] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
				this.blast_zones[start + 3] = 5 * (start / BLAST_STRUCT_FLOAT_COUNT)
				this.blast_zones[start + 4] = 1.0

			}
		}
		)
	}

}




function extract_const_decl(line) {
	let matches = line.match(wgsl_constant_decl_regex);
	if (matches) {
		let extracted_data = {
			name: matches.groups.constantName,
			primitive_type: matches.groups.constantType || null, // If type is not provided, default to 'Implicit'
			initial_value: matches.groups.initialValue.trim(),
			updated_value: matches.groups.initialValue.trim(),
			human_name: matches.groups.humanReadableName
				? matches.groups.humanReadableName.trim()
				: null,
			__range_or_values: matches.groups.rangeOrValues
				? matches.groups.rangeOrValues.trim()
				: null,
		};

		let { __range_or_values: rov } = extracted_data;
		if (rov) {
			if (rov.startsWith("[")) {
				extracted_data.value_options = rov
					.slice(1, -1)
					.split(",")
					.map((e) => e.trim())
					.map(Number);
			} else if (rov.includes("-")) {
				let [start, end] = rov
					.split("-")
					.map((e) => e.trim())
					.slice(0, 2)
					.map(Number);
				extracted_data.range = { start, end };
			}
		}
		if (!extracted_data.primitive_type) return null;
		// extracted_data.primitive_type = extracted_data.initial_value.includes(
		//   "."
		// )
		//   ? "f32"
		//   : "i32";
		extracted_data.initial_value = Number(
			extracted_data.initial_value.trim()
		);
		extracted_data.validator = !extracted_data.primitive_type.startsWith(
			"f"
		)
			? (val) => Math.floor(val)
			: (val) => val;
		return extracted_data;
	} else {
		return null; // Return null if the line does not match the pattern
	}
}

function processWgsl(wgslText) {
	let buffer = [];
	let extracted_constant_defs = [];
	wgslText.split("\n").forEach((line) => {
		if (line.startsWith("const ")) {
			// it's a module top level constant
			let constant_def = extract_const_decl(line);
			if (constant_def?.primitive_type) {
				extracted_constant_defs.push(constant_def);
			} else {
				console.warn(
					`Trouble parsing constant declaration '${line}' -- disregarding`
				);
				buffer.push(line);
			}
		} else if (line.startsWith("@group(0) @binding(")) {
			// drop, we are gonna dynamically push the bindings back in later
		} else if (line.startsWith("import ")) {
			let name = line.match(/import (?<name>\w+)/)?.groups?.name
			if (SHADER_MODULES[name]) buffer.push(SHADER_MODULES[name])
		}
		else {
			buffer.push(line);
		}
	});

	return { output: buffer.join("\n"), extracted_constant_defs };
}
