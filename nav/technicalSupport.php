<div class="menuItem">
	
	<h2>Тех-підтримка</h2>

	<p>
		Тут будуть розміщені оголошення щодо проведення технічних робіт на сайті. Під час їх проведення, сайт буде тимчасово не доступний, після завершення робіт, сайт знову буде доступний для використання.
	</p><br>

	<p>
		При виявлені багів, Ви, можете заповнити форму, для їх ліквідації, тим самим покращивши роботу сайта. Якщо у вас появляться будь які запитання з експлуатації сайта, ви також можете заповнити і надіслати форму, після чого у найближчий час з Вами зв'яжуться і нададуть необхідну допомогу.
	</p>

	<form method="POST" action="../php/technicalSupport.php">

		<div>
			<p><label for="userName">Ім'я користувача</label></p>
			<input id="userName" type="text" name="userName" placeholder="user name" required>
		</div>
		<div>
			<p><label for="mail">Пошта</label></p>
			<input id="mail" type="text" name="mail" placeholder="user@mail.box" required>
		</div>
		<div>
			<p><label for="message">Повідомлення</label></p>
			<textarea id="message" name="message"  placeholder="message" rows="5" cols="40" required></textarea>
		</div>

		<input class="btnSend" type="submit" name="btnSend">
	
	</form>

</div>
