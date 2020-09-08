<!DOCTYPE html>
<html lang="en">
<head>
	<title>Малювання по клітинках</title>
	
	<meta charset="utf-8">
	<meta name="description" content="Захоплюєтесь малюванням? Малювання по клітинках у вигляді графічного диктанту є хорошим вибором для цікавого та корисного проведення часу. Зацікавились? Вперед!">
	<meta name="keywords" content="малювання по клітинках, малювання клітинками, графічний диктант">

	<link rel="shortcut icon" type="image/x-icon" href="img/icons/favicon.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/handler.js"></script>
</head>
<body>

	<div class="wrapper">
		
		<main>
			
			<div class="leftPart">
				
				<svg class="anim" width="250px" height="110px">
					<g>
						<path fill="none" stroke="#444" stroke-width="2px" stroke-dasharray="654" d="
							M15,100 h140 
							m15,-26 l35,-35 
							a1,1 0 1 1 5,-2.5 l15,15 a1,1 0 1 1 -5,2.5 l-15,-15
							m4,-4 a1,1 0 1 1 5,-2.5 l15,15 a1,1 0 1 1 -5,2.5 l-15,-15
							m4,-4 a1,1 0 1 1 5,-2.5 l15,15 a1,1 0 1 1 -5,2.5 l-15,-15
							m4,-3 l10,-10 l15,15 l-10,10
							m-12,11 l-35,35 l5,-12.5 l26,-26
							m-26,26 l-12.5,5 l5,-12.5 l26,-26
							m-26,26 l-12.5,5
							l-10,25 l25,-10 m-20,8 l-3,-3
						" />
						<animate attributeName="stroke-dashoffset" repeatCount="1" begin="0s" from="654" to="0" dur="15" fill="freeze" calcMode="linear" />

						<text x="25" y="40" fill="#444" stroke="none" stroke-width="1px" opacity="1" font-size="25" font-family="cursive">малювання</text>
						<text x="70" y="65" fill="#444" stroke="none" stroke-width="1px" opacity="1" font-size="25" font-family="cursive">по</text>
						<text x="30" y="90" fill="#444" stroke="none" stroke-width="1px" opacity="1" font-size="25" font-family="cursive">клітинках</text>
					</g>
				</svg>

				<nav>
					<div id="aboutProject">Про проект</div>
					<div id="selectDrawing">Вибір малюнка</div>
					<div id="addDrawing">Додати малюнок</div>
					<div id="controlDrawing">Керування</div>
					<div id="technicalSupport">Тех-підтримка</div>
				</nav>

				<svg class="anim" width="250px" height="100px">
					<g>
						<path fill="none" stroke="#444" stroke-width="2px" stroke-dasharray="407" d="
							M120,55 v40 h10 v-40 h50 l20,-20 l-20,-20 h-50 v-5 h-10 v5 h-50 v40 h50
						" />
						<animate attributeName="stroke-dashoffset" repeatCount="1" begin="0s" from="407" to="0" dur="3" fill="freeze" calcMode="linear" />

						<text x="90" y="42" fill="#444" stroke="none" stroke-width="1px" opacity="1" font-size="25" font-family="cursive">удачі !</text>
					</g>
				</svg>

			</div>

			<div class="centerPart">
				
				<svg id="drawingArea" width="750px" height="470px">
					<!-- user drawing -->
				</svg>

				<div class="nameDrawing">
					Виберіть малюнок
				</div>

			</div>

			<div class="path">
				<p>Шлях</p>
				<div class="direction"></div>
			</div>

		</main>

		<footer>
			<h1>Малювання по клітинках</h1> &copy; <?php echo date('Y'); ?>
		</footer>
		
	</div>

</body>
</html>
