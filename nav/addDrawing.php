<div class="menuItem">

	<h2>Додавання малюнка</h2>

	<p>
		Ви можете добавити малюнок до уже існуючого списку малюнків, для цього, заповніть форму. Після того, як Ви відправите нам заповнену форму, ми з нею ознайомимось і у випадку схвалення добавимо Ваш малюнок до списку.
	</p>

	<form method="POST" action="../php/addDrawing.php" enctype="multipart/form-data">
		
		<div>
			<p><label for="userName">Ім'я користувача</label></p>
			<input id="userName" type="text" name="userName" placeholder="user name" required>
		</div>
		<div>
			<p><label for="mail">Пошта</label></p>
			<input id="mail" type="text" name="mail" placeholder="user@mail.box" required>
		</div>
		<div>
			<p><label for="drawing">Малюнок</label></p>
			<input id="drawing" name="drawing" type="file" accept="image/*" required>
		</div>
		<div>
			<p><label for="direction">Шлях малюнка</label></p>
			<textarea id="direction" name="direction"  placeholder="direction (1u 2r 3d 4l = 1&uarr; 2&rarr; 3&darr; 4&larr;)" rows="5" cols="40" required></textarea>
		</div>

		<input class="btnSend" type="submit" name="btnSend">

	</form>

</div>
