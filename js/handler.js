$(document).ready(function () {

	class Drawing {

		constructor () {
			this.name = "";
			this.start = false;
			this.lineStep = 20;
			this.size = {
				width : 0,
				height : 0
			};
			this.startPos = {
				x : 0,
				y : 0
			};
			this.arrCheckpoints = [];
			this.counterArrCheckpoints = 0;
			this.currentArrCheckpoints = [];
		}

		SetPathStart () {
			let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path.setAttribute("fill", "none");
			path.setAttribute("stroke", "#000");
			path.setAttribute("stroke-width", "1px");
			path.setAttribute("d", ("M" + this.startPos.x + "," + this.startPos.y));
			$(path).appendTo($("#drawingArea"));

			this.start = true;
		}

		DrawPathPart (direction) {
			let checkpoint = direction + this.lineStep;
			let currentPath = $.trim($("#drawingArea > path").attr("d"));

			currentPath += " ";
			currentPath += checkpoint;

			$("#drawingArea > path").attr("d", currentPath);

			this.currentArrCheckpoints.push(checkpoint);
			this.counterArrCheckpoints++;
		}

		CheckCheckpoints () {
			for (let i = 0; i < this.arrCheckpoints.length; i++) {
				if (this.currentArrCheckpoints[i] != this.arrCheckpoints[i]) {
					return false;
				}
			}
			return true;
		}

		Reset () {
			this.size.width = 0;
			this.size.height = 0;
			
			this.startPos.x = 0;
			this.startPos.y = 0;

			this.arrCheckpoints.length = 0;
			this.counterArrCheckpoints = 0;
			this.currentArrCheckpoints.length = 0;

			$("#drawingArea").empty();
		}

		Restart () {
			let currentPath = $("#drawingArea > path").attr("d");
			let lastSpace = currentPath.lastIndexOf(" ");

			if (lastSpace != -1) {
				currentPath = currentPath.slice(0, currentPath.indexOf(" "));
				$("#drawingArea > path").attr("d", currentPath);

				this.counterArrCheckpoints = 0;
				this.currentArrCheckpoints.length = 0;
			}
		}

		CancelLastStep () {
			let currentPath = $("#drawingArea > path").attr("d");
			let lastSpace = currentPath.lastIndexOf(" ");

			if (lastSpace != -1) {
				currentPath = currentPath.slice(-0, lastSpace);
				$("#drawingArea > path").attr("d", currentPath);

				this.counterArrCheckpoints--;
				this.currentArrCheckpoints.length--;
			}
		}

	};
	let objDrawing = new Drawing;

	class ModalWindow {

		constructor () {
			this.open = false;
		}

		Create () {
			$("<div id = 'modalWindow'></div>").appendTo("body").css({
				"display" : "none",
				"position" : "absolute",
				"z-index" : "2",
				"width" : "60%",
				"height" : "500px",
				"padding" : "1%",
				"background-color" : "#fff",
				"border" : "2px solid silver",
				"border-radius" : "5px",
				"overflow" : "scroll",
				"color" : "#000",
				"text-align" : "justify",
				"font-size" : "16px"
			});

			$("#modalWindow").css({
				"top" : (($("body").height() / 2.2) - (parseInt($("#modalWindow").css("height")) / 2)) + "px",
				"left" : (($("body").width() / 2) - (parseInt($("#modalWindow").css("width")) / 2)) + "px"
			});

			$("<div id = 'wrapMW'></div>").appendTo($("#modalWindow"));

			$("<img id = 'iconClose' src = 'img/icons/close.png' alt = 'error connecting' title = 'закрити'>").appendTo("#modalWindow").css({
				"position" : "absolute",
				"top" : "1%",
				"right" : "0.5%",
				"cursor" : "pointer"
			});

		}

		Open () {
			$("#modalWindow").show();
			this.open = true;
			objDrawing.start = false;
		}

		Close () {
			$("#modalWindow").hide();
			this.open = false;
			objDrawing.start = true;
		}

	};
	let objMW = new ModalWindow;
	objMW.Create();

	$("body").on("keydown", function (e) {
		
		if (objDrawing.start) {

			switch (e.which) {
				case 37:
					// left
					objDrawing.DrawPathPart("h-");
					break;
				case 38:
					// up
					objDrawing.DrawPathPart("v-");
					break;
				case 39:
					// right
					objDrawing.DrawPathPart("h");
					break;
				case 40:
					// down
					objDrawing.DrawPathPart("v");
					break;
				case 67:
					// c
					objDrawing.CancelLastStep();
					break;
				case 82:
					// r
					objDrawing.Restart();
					break;
			}

			if (e.which >= 37 && e.which <= 40) {
				// button arrows
				if (objDrawing.counterArrCheckpoints == objDrawing.arrCheckpoints.length) {
					if (objDrawing.CheckCheckpoints()) {
						setTimeout(function () { alert("Малюнок намальовано!"); }, 50);

						if (!$("#drawingInfo").length) {

							$("<img id='drawingInfo' src = '../img/icons/info.png' alt = 'error connecting' />").appendTo(".centerPart").css({
								"position" : "absolute",
								"top" : "2.5%",
								"right" : "2.5%",
								"box-sizing" : "border-box",
								"padding" : "1%",
								"border-radius" : "2px",
								"cursor" : "pointer"
							});
						
							$("#drawingInfo").on("click", function () {
								$("#wrapMW").empty();
								objMW.Open();

								$("<div id='drawingDescription'></div>").appendTo("#wrapMW");

								$.ajax({
									url: "../php/getDrawingDescription.php",
									type: "POST",
									data: {nameDrawing : objDrawing.name},
									success: function (data) {
										data = JSON.parse(data);	

										$("<h3>" + objDrawing.name + "</h3>").appendTo("#drawingDescription").css({
											"margin-bottom" : "2%",
											"text-align" : "center",
											"text-transform" : "uppercase",
											"font-weight" : "normal"
										});
										$("<img src='" + data.photo + "' alt = 'error connecting'>").appendTo("#drawingDescription").css({
											"display" : "block", 
											"width" : "50%", 
											"height" : "auto", 
											"margin" : "0 auto 4%",
											"border-radius" : "2px"
										});
										$("<div>" + data.description + "</div>").appendTo("#drawingDescription").
											css("text-align", "justify");
									}
								});
							});

						}
					} else {
						alert("Малюнок не намальовано, спробуйте ще раз!");
					}
				}
			}

		}

	});

	$("#modalWindow > #iconClose").on("click", function () {
		objMW.Close();
	});

	$("nav").on("click", "div", function (e) {

		$("#wrapMW").empty();
		objMW.Open();
		
		switch ($(this).attr("id")) {
			case "selectDrawing":
				$.ajax({
					url: "../php/sectionsDrawings.php",
					type: "POST",
					success: function (data) {
						data = JSON.parse(data);
						
						$("<div id = 'choiceDrawing'></div>").appendTo($("#wrapMW"));
						$("<h2>Вибір малюнка<h2>").appendTo($("#choiceDrawing"));
						$("<div id = 'sectionsDrawings'></div>").appendTo($("#choiceDrawing"));

						$("<div id = 'nameSectionsDrawings' class = 'choiceBlockDrawings'></div>").appendTo($("#sectionsDrawings"));
						
						for (let i = 0; i < data.length; i++)
							$("<span>" + data[i]['section'] + " (" + data[i]['countSections'] + ")</span>").appendTo($("#nameSectionsDrawings"));

						// show first section drawing
						$("#nameSectionsDrawings > span:first").css("color", "blue");

						$("<hr>").appendTo("#sectionsDrawings");

						let section = $("#nameSectionsDrawings > span:first").html();
						section = section.slice(0, section.indexOf(" "));
						
						$.ajax({
							url: "../php/getSectionsDrawings.php",
							type: "POST",
							data: {section : section},
							success: function (data) {
								data = JSON.parse(data);
								
								$("<div id = 'nameDrawings' class = 'choiceBlockDrawings'></div>").appendTo($("#sectionsDrawings"));

								for (let i = 0; i < data.length; i++) {
									$("<span>" + data[i] + "</span>").appendTo($("#nameDrawings"));
								}

								$("#nameDrawings").on("click", "span", function () {

									// choice section

									objDrawing.name = $(this).html();
									
									$.ajax({
										url: "../php/getDrawingData.php",
										type: "POST",
										data: {nameDrawing : objDrawing.name},
										success: function (data) {
											data = JSON.parse(data);	
											
											$(".nameDrawing").html(objDrawing.name);

											let directionArr = data.direction.split(" ");

											$(".path > .direction").empty();
											for (let i = 0; i < directionArr.length; i++) {
												$("<span>" + parseInt(directionArr[i]) + "&" + directionArr[i].slice(-1) + "arr;</span>").appendTo($(".path > .direction"));
											}

											objDrawing.Reset();
											$("#drawingInfo").remove();

											// set checkpoints
											for (let i = 0, steps, direction; i < directionArr.length; i++) {

												steps = parseInt(directionArr[i]);
												
												if (directionArr[i].indexOf("l") != -1) {
													direction = "h-";
												}
												else if (directionArr[i].indexOf("u") != -1) {
													direction = "v-";
												}
												else if (directionArr[i].indexOf("r") != -1) {
													direction = "h";
												}
												else if (directionArr[i].indexOf("d") != -1) {
													direction = "v";
												}

												for (let k = 0; k < steps; k++) {
													objDrawing.arrCheckpoints.push(direction + "20");
												}

											}

											// size drawing
											objDrawing.size.width = parseInt(data.width) * objDrawing.lineStep;
											objDrawing.size.height = parseInt(data.height) * objDrawing.lineStep;

											// centering
											let leftUpperX = (parseInt($("#drawingArea").css("width")) / 2) - (objDrawing.size.width / 2);
											let leftUpperY = (parseInt($("#drawingArea").css("height")) / 2) - (objDrawing.size.height / 2);
											
											objDrawing.startPos.x = leftUpperX + parseInt(data.stepX) * objDrawing.lineStep;
											objDrawing.startPos.y = leftUpperY + parseInt(data.stepY) * objDrawing.lineStep;

											objDrawing.SetPathStart();
										}
									});

									objMW.Close();

								});
								
							}
						});

						$("#nameSectionsDrawings").on("click", "span", function () {

							// choice section
							$("#nameSectionsDrawings > span").css("color", "#000");
							$(this).css("color", "blue");

							let section = $(this).html();
							section = section.slice(0, section.indexOf(" ")); 
							
							$.ajax({
								url: "../php/getSectionsDrawings.php",
								type: "POST",
								data: {section : section},
								success: function (data) {
									data = JSON.parse(data);
									
									$("#nameDrawings").empty();

									for (let i = 0; i < data.length; i++) {
										$("<span>" + data[i] + "</span>").appendTo($("#nameDrawings"));
									}
									
								}
							}); 
						});

					}
				});
				break;
			case "aboutProject":
				$("#wrapMW").load("../nav/aboutProject.php");
				break;
			case "addDrawing":
				$("#wrapMW").load("../nav/addDrawing.php");
				break;
			case "controlDrawing":
				$("#wrapMW").load("../nav/controlDrawing.php");
				break;
			case "technicalSupport":
				$("#wrapMW").load("../nav/technicalSupport.php");
				break;
		}
		
	});
	
});
