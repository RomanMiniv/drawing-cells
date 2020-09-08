<?php

	require_once "dataSecurity.php";

	$arrData = array();

	if (isset($_POST['section'])) {

		$section = ClearingData($_POST['section']);

		require_once "connectDB.php";

		$result_query = $IMySql->query("SELECT name FROM drawing WHERE section = '$section' ORDER BY name ASC");

		while ($result = $result_query->fetch_array()) {
			array_push($arrData, $result['name']);
		}
		
		$IMySql->close();

	}

	echo json_encode($arrData);

?>
