<?php

	require_once "connectDB.php";

	$result_query = $IMySql->query("SELECT section, COUNT(*) countSections FROM drawing GROUP BY section ORDER BY section ASC");

	$arrData = array();

	while ($result = $result_query->fetch_array()) {
		$arr = array();

		$arr['section'] = $result['section'];
		$arr['countSections'] = $result['countSections'];

		array_push($arrData, $arr);
	}

	$IMySql->close();

	echo json_encode($arrData);

?>
