<meta charset="utf-8">

<?php
	
	require_once "dataSecurity.php";

	$userName = ClearingData($_POST['userName']);
	$mail = ClearingData($_POST['mail']);
	$direction = ClearingData($_POST['direction']);

	$drawingLocation = '../img/userDrawings/'.$_FILES['drawing']['name'];
	copy($_FILES['drawing']['tmp_name'], $drawingLocation);

	require_once "connectDB.php";

	$IMySql->query("INSERT INTO userDrawings (userName, mail, photo, direction) VALUES ('$userName', '$mail', '$drawingLocation', '$direction')");
	
	$IMySql->close();

	echo "<script>alert('Повідомлення успішно відправлено!');</script>";
	echo "<meta http-equiv='refresh' content='0; url=../index.php'>";

?>
