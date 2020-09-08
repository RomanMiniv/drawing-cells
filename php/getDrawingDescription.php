<?php

	require_once "dataSecurity.php";

	$arrData = array();

	if (isset($_POST['nameDrawing'])) {

		$nameDrawing = ClearingData($_POST['nameDrawing']);

		require_once "connectDB.php";

		$result_query = $IMySql->query("SELECT photo, description FROM drawing WHERE name = '$nameDrawing'");

		while ($result = $result_query->fetch_array()) {
			$arrData['photo'] = $result['photo'];
			$arrData['description'] = str_replace("\n", "<br>", $result['description']);
		}
		
		$IMySql->close();

	}

	echo json_encode($arrData);

?>
