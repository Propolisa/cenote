// Function to start tracking player movements
export function startTrackingPlayer({ player, interval, playerPath }) {
	// Stop any existing tracking
	if (playerPath.intervalId !== null) {
		clearInterval(playerPath.intervalId);
	}

	// Clear previous data
	playerPath.positions = [];
	playerPath.directions = [];

	// Start new tracking
	playerPath.intervalId = setInterval(() => {
		var position = player.position.clone();
		playerPath.positions.push(position);

		if (playerPath.positions.length > 1) {
			var prevPosition = playerPath.positions[playerPath.positions.length - 2];
			var direction = position.subtract(prevPosition).normalize();
			playerPath.directions.push(direction);
		} else {
			playerPath.directions.push(new BABYLON.Vector3(0, 0, 0));
		}
	}, interval);
}

// Function to stop tracking player movements
export function stopTrackingPlayer({ playerPath }) {
	if (playerPath.intervalId !== null) {
		clearInterval(playerPath.intervalId);
		playerPath.intervalId = null;
	}
}

// Function to update a greased line from tracked positions
export function updatePathLine({ scene, line, path, color }) {
	var points = [];
	path.forEach(position => {
		points.push(position.x, position.y, position.z);
	});

	// Add new points to the greased line
	line.addPoints(points);

	// Update widths
	const pointsCount = BABYLON.GetPointsCount(line.points);
	line.widths = BABYLON.CompleteGreasedLineWidthTable(
		pointsCount * 2,
		line.widths,
		BABYLON.GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START,
		2,
		2
	);

	// If colors are used, extend the color table manually
	if (line.greasedLineMaterial.useColors) {
		const colors = line.greasedLineMaterial.colors;
		for (let i = 0; i < points.length / 3; i++) {
			colors.push(color);
		}
		line.greasedLineMaterial.setColors(colors, false, true);
	}
}