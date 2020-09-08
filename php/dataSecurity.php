<?php

	function ClearingData ($data) {
		$data = trim($data);
		$data = htmlspecialchars($data);
		return $data;	
	}

?>
