<?php

	// get drawing data
	// direction, width, height stepX, stepY

	require_once "dataSecurity.php";

	$arrData = array();

	if (isset($_POST['nameDrawing'])) {

		$nameDrawing = ClearingData($_POST['nameDrawing']);

		require_once "connectDB.php";

		$result_query = $IMySql->query("SELECT direction, width, height, stepX, stepY FROM drawing WHERE name = '$nameDrawing'");
		
		while ($result = $result_query->fetch_array()) {
			$arrData['direction'] = $result['direction'];
			$arrData['width'] = $result['width'];
			$arrData['height'] = $result['height'];
			$arrData['stepX'] = $result['stepX'];
			$arrData['stepY'] = $result['stepY'];
		}
		
		$IMySql->close();

	}

	echo json_encode($arrData);

?>
