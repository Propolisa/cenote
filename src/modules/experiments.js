import { MeshBuilder, StandardMaterial, Color3, Color4, Vector3, StorageBuffer, Scene } from "babylonjs";
import { GridMaterial } from '@babylonjs/materials/Grid';
export function addGridPoints(scene, gridSize, pointDiameter = 0.1, color = new Color3(1, 1, 0)) {
    const halfGridSize = gridSize / 2;
    const stepSize = 1;

    // Create a base mesh for the points
    const basePoint = MeshBuilder.CreateBox("basePoint", { size: pointDiameter }, scene);
    const material = new StandardMaterial("pointMaterial", scene);
    material.diffuseColor = color;
    basePoint.material = material;
    basePoint.isVisible = false; // Hide the base point

    for (let x = -halfGridSize; x <= halfGridSize; x += stepSize) {
        for (let y = -halfGridSize; y <= halfGridSize; y += stepSize) {
            for (let z = -halfGridSize; z <= halfGridSize; z += stepSize) {
                const pointInstance = basePoint.createInstance(`point_${x}_${y}_${z}`);
                pointInstance.position = new Vector3(x, y, z);
            }
        }
    }
}

export function addGroundGrid(scene, gridSize=100){
	// Ground and Grid Material


	var groundGrid = MeshBuilder.CreateGround("groundGrid", { width: gridSize, height: gridSize }, scene);
	var gridMaterial = new GridMaterial('groundGrid', scene);
	gridMaterial.mainColor = new Color3(.18, .18, .27);
	gridMaterial.lineColor = new Color3(.3, .3, .3);
	groundGrid.material = gridMaterial;
	console.log(gridMaterial);

	// add some center-lines
	var myPoints1 = [
		new Vector3(gridSize / 2, .001, 0),
		new Vector3(-gridSize / 2, .001, 0)
	];
	var line1 = MeshBuilder.CreateLines('verticalCenterMark', { points: myPoints1 }, scene);
	
	line1.color = new Color3(2, 0, 0);
	line1.alpha = 1
	var myPoints2 = [
		new Vector3(0, .001, gridSize / 2),
		new Vector3(0, .001, -gridSize / 2)
	];
	var line2 = MeshBuilder.CreateLines('horizontalCenterMark', { points: myPoints2 }, scene);
	line2.color = new Color3(0, 0, 4);
	line2.alpha = 1

	const lines = [
        line1,
        line2,
        
    ]



    lines.forEach(line => {
        // line.color = black3
		let {r, g, b} = line.color
        line.enableEdgesRendering();
        line.edgesWidth = 100;
        line.edgesColor = new Color4(r, g, b,1);
    })
}

export function setupDebugView(scene){
	const axesViewer = new BABYLON.AxesViewer(scene);
	addGroundGrid(scene, 100)
	return {axesViewer}

}

/**
 * 
 * @param {Scene} scene 
 */
export function setupStorageBuffer(scene){
	let data = [
		10,10,10,50, // position vec3f, radius f32
		10,20,30,50 // position vec3f, radius f32
	]
	const blast_zones_buffer = new StorageBuffer(scene.getEngine(), Float32Array.BYTES_PER_ELEMENT * (data.length), null, "blast_zones");
    blast_zones_buffer.update(data);
	return {blast_zones_buffer}
}

export function logPickedPointAndDepth(game, depthmap){
	game.canvas.addEventListener("click", function (evt) {
		const pickResult = game.scene.pick(game.scene.pointerX, game.scene.pointerY);
		if (pickResult.hit) {
			const renderWidth = engine.getRenderWidth();
			const renderHeight = engine.getRenderHeight();
	
			// Render the scene and read the depth buffer
			engine.onEndFrameObservable.addOnce(() => {
				const depthBuffer = depthmap.readPixels();
				const x = Math.floor(pickResult.pickedPoint.x / renderWidth);
				const y = Math.floor(pickResult.pickedPoint.y / renderHeight);
				const index = (y * renderWidth + x) * 4; // RGBA, so each pixel has 4 values
	
				const depth = depthBuffer[index];
				console.log("Depth value at clicked pixel:", depth);
			});
	
			// // Trigger rendering
			// scene.render();
		}
	});

}