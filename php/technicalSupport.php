<meta charset="utf-8">

<?php

	require_once "dataSecurity.php";

	$userName = ClearingData($_POST['userName']);
	$mail = ClearingData($_POST['mail']);
	$message = ClearingData($_POST['message']);

	require_once "connectDB.php";

	$IMySql->query("INSERT INTO technicalSupport (userName, mail, message, date) VALUES ('$userName', '$mail', '$message', CURRENT_DATE())");
	
	$IMySql->close();

	echo "<script>alert('Повідомлення успішно відправлено!');</script>";
	echo "<meta http-equiv='refresh' content='0; url=../index.php'>";

?>
