$(document).ready(function () {

	// ТАБЫ
		$(".btn-rotation-1").click(function(){
			$(".tab-rotation-1").fadeIn (600);
			$(".tab-rotation-2").fadeOut (0);
			$(".btn-rotation-1").addClass("select-bg-leg");
			$(".btn-rotation-2").removeClass("select-bg-leg");
		});
	
		$(".btn-rotation-2").click(function(){
			$(".tab-rotation-2").fadeIn (600);
			$(".tab-rotation-1").fadeOut (0);
			$(".btn-rotation-2").addClass("select-bg-leg");
			$(".btn-rotation-1").removeClass("select-bg-leg");
		});
	
		$(".btn-rotation-3").click(function(){
			$(".tab-rotation-3").fadeIn (600);
			$(".tab-rotation-2").fadeOut (0);
			$(".btn-rotation-3").addClass("select-bg-leg");
			$(".btn-rotation-2").removeClass("select-bg-leg");
		});
	// ТАБЫ
	
	// ТАЛАНТЫ
		// СВАП
		$("#talents-swap-spec").click(function () {
			if ($("#tt9").css('display') === 'block') {
				$("#talents-swap-spec").css("color", "#fff468");
				$("#tt9").css("display", "none");
				$("#tt21").css("display", "none");
				$("#tt23").css("display", "none");
				$("#tt28").css("display", "none");
				$("#tt32").css("display", "none");
				$("#tt34").css("display", "none");
				$("#tt36").css("display", "none");
				$("#tt39").css("display", "none");
				$("#tt47").css("display", "none");
				$("#tt50").css("display", "none");
				$("#tt51").css("display", "none");
				$("#tt55").css("display", "none");
			} else {
				$("#talents-swap-spec").css("color", "#00FF99");
				$("#tt9").css("display", "block");
				$("#tt21").css("display", "block");
				$("#tt23").css("display", "block");
				$("#tt28").css("display", "block");
				$("#tt32").css("display", "block");
				$("#tt34").css("display", "block");
				$("#tt36").css("display", "block");
				$("#tt39").css("display", "block");
				$("#tt47").css("display", "block");
				$("#tt50").css("display", "block");
				$("#tt51").css("display", "block");
				$("#tt55").css("display", "block");
			}
		});
	
		$("#talents-swap-monk").click(function () {
			if ($("#ttm21").css('display') === 'block') {
				$("#talents-swap-monk").css("color", "#fff468");
				$("#ttm21").css("display", "none");
				$("#ttm26").css("display", "none");
				$("#ttm28").css("display", "none");
			} else {
				$("#talents-swap-monk").css("color", "#00FF99");
				$("#ttm21").css("display", "block");
				$("#ttm26").css("display", "block");
				$("#ttm28").css("display", "block");
			}
		});
	// СВАП
	
		// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-5
		// $("#tt1").click(function () {
		// 	let name1 = "удар бочонком"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("удар бочонком");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt2").click(function () {
		// 	let name1 = "Пошатывание"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Пошатывание");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt3").click(function () {
		// 	let name1 = "Очищающий отвар"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Очищающий отвар");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt4").click(function () {
		// 	let name1 = "Скрытые резервы"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Скрытые резервы");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt5").click(function () {
		// 	let name1 = "План удара"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("План удара");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt6").click(function () {
		// 	let name1 = "Дар быка"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Дар быка");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt7").click(function () {
		// 	let name1 = "Целебный эликсир"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Целебный эликсир");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt8").click(function () {
		// 	let name1 = "Быстрый глоток"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Быстрый глоток");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt9").click(function () {
		// 	let name1 = "Порыв нефритового ветра"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Порыв нефритового ветра");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt10").click(function () {
		// 	let name1 = "Особая доставка"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Особая доставка");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt11").click(function () {
		// 	let name1 = "Небесное пламя"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Небесное пламя");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt12").click(function () {
		// 	let name1 = "божественный отвар"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("божественный отвар");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt13").click(function () {
		// 	let name1 = "Пошатывающие атаки"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Пошатывающие атаки");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt14").click(function () {
		// 	let name1 = "грациозный отскок"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("грациозный отскок");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt15").click(function () {
		// 	let name1 = "дзен-медиация"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("дзен-медиация");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt16").click(function () {
		// 	let name1 = "столкновение"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("столкновение");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	// 	ТАЛАНТЫ ХМЕЛЕВАРА 1-5
	
	// 	ТАЛАНТЫ ХМЕЛЕВАРА 6-10
		// $("#tt17").click(function () {
		// 	let name1 = "пламенное дыхание"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("пламенное дыхание");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt18").click(function () {
		// 	let name1 = "улучшенный божественный отвар"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("улучшенный божественный отвар");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt19").click(function () {
		// 	let name1 = "улучшенный очищающий отвар"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("улучшенный очищающий отвар");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt20").click(function () {
		// 	let name1 = "мирный дух"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("мирный дух");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt21").click(function () {
		// 	let name1 = "Императорский напиток Гая Плина"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("Императорский напиток Гая Плина");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt22").click(function () {
		// 	let name1 = "фундаментальные наблюдения"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("фундаментальные наблюдения");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt23").click(function () {
		// 	let name1 = "текучие движения"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("текучие движения");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt24").click(function () {
		// 	let name1 = "ботфорты для боя с тенью"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("ботфорты для боя с тенью");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt25").click(function () {
		// 	let name1 = "обжигающий отвар"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("обжигающий отвар");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt26").click(function () {
		// 	let name1 = "сила сальсалабима"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("сила сальсалабима");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#tt27").click(function () {
		// 	let name1 = "укрепляющий отвар"
		// 	let name2 = $("#tn1").text()
		// 	if (name1 === name2) {
		// 		$(".row1-tc").css("display", "none");
		// 		$("#tn1").text("none")
		// 	} else {
		// 		$(".row1-tc").fadeIn (600);
		// 		$("#tn1").text("укрепляющий отвар");
		// 		$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
	// 	$("#tt28").click(function () {
	// 		let name1 = "корпусом работай!"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("корпусом работай!");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt29").click(function () {
	// 		let name1 = "отвар черного быка"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("отвар черного быка");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt30").click(function () {
	// 		let name1 = "призыв нюцзао, черного быка"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("призыв нюцзао, черного быка");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt31").click(function () {
	// 		let name1 = "уроки нюцзао"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("уроки нюцзао");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt32").click(function () {
	// 		let name1 = "упрощенный репепт"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("упрощенный репепт");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt33").click(function () {
	// 		let name1 = "возможная нестабильность"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("возможная нестабильность");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt34").click(function () {
	// 		let name1 = "лапой по лицу"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("лапой по лицу");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt35").click(function () {
	// 		let name1 = "отвар драконьего пламени"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("отвар драконьего пламени");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt36").click(function () {
	// 		let name1 = "обугленные страсти"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("обугленные страсти");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt37").click(function () {
	// 		let name1 = "высокая стойкость"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("высокая стойкость");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt38").click(function () {
	// 		let name1 = "прогулка с быком"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("прогулка с быком");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt39").click(function () {
	// 		let name1 = "нокаутирующая верткость"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("нокаутирующая верткость");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt40").click(function () {
	// 		let name1 = "верткость хмелевара"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("верткость хмелевара");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt41").click(function () {
	// 		let name1 = "контрудар"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("контрудар");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt42").click(function () {
	// 		let name1 = "отвар из костяной пыли"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("отвар из костяной пыли");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt43").click(function () {
	// 		let name1 = "призыв нюцзао, черного быка"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("призыв нюцзао, черного быка");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt44").click(function () {
	// 		let name1 = "взрывной бочонок"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("взрывной бочонок");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt45").click(function () {
	// 		let name1 = "серия нокаутов"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("серия нокаутов");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt46").click(function () {
	// 		let name1 = "оружие ордена"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("оружие ордена");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt47").click(function () {
	// 		let name1 = "затухание"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("затухание");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt48").click(function () {
	// 		let name1 = "благодатный хмель"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("благодатный хмель");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt49").click(function () {
	// 		let name1 = "последний бочонок буйного портера"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("последний бочонок буйного портера");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt50").click(function () {
	// 		let name1 = "призыв к оружию"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("призыв к оружию");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#tt51").click(function () {
	// 		let name1 = "порыв ци"
	// 		let name2 = $("#tn1").text()
	// 		if (name1 === name2) {
	// 			$(".row1-tc").css("display", "none");
	// 			$("#tn1").text("none")
	// 		} else {
	// 			$(".row1-tc").fadeIn (600);
	// 			$("#tn1").text("порыв ци");
	// 			$("#tc1").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
		// ТАЛАНТЫ ХМЕЛЕВАРА 6-10
	
		// 	ТАЛАНТЫ МОНАХА 1-5
	// 	$("#ttm1").click(function () {
	// 		let name1 = "Успокаивающий туман"
	// 		let name2 = $("#tn2").text()
	// 		if (name1 === name2) {
	// 			$(".row2-tc").css("display", "none");
	// 			$("#tn2").text("none")
	// 		} else {
	// 			$(".row2-tc").fadeIn (600);
	// 			$("#tn2").text("Успокаивающий туман");
	// 			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#ttm2").click(function () {
	// 		let name1 = "удар восходящего солнца"
	// 		let name2 = $("#tn2").text()
	// 		if (name1 === name2) {
	// 			$(".row2-tc").css("display", "none");
	// 			$("#tn2").text("none")
	// 		} else {
	// 			$(".row2-tc").fadeIn (600);
	// 			$("#tn2").text("удар восходящего солнца");
	// 			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
	// 	$("#ttm3").click(function () {
	// 		let name1 = "Тигриное рвение"
	// 		let name2 = $("#tn2").text()
	// 		if (name1 === name2) {
	// 			$(".row2-tc").css("display", "none");
	// 			$("#tn2").text("none")
	// 		} else {
	// 			$(".row2-tc").fadeIn (600);
	// 			$("#tn2").text("Тигриное рвение");
	// 			$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
	// 				"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
	// 				"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
	// 		}
	// 	});
	
		// $("#ttm4").click(function () {
		// 	let name1 = "улучшенный кувырок"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("улучшенный кувырок");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm5").click(function () {
		// 	let name1 = "Успокаивающее присутствие"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("Успокаивающее присутствие");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm6").click(function () {
		// 	let name1 = "Вывести из строя"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("Вывести из строя");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm7").click(function () {
		// 	let name1 = "взмах тигриного хвоста"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("взмах тигриного хвоста");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm8").click(function () {
		// 	let name1 = "энергичное исторжение"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("энергичное исторжение");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm9").click(function () {
		// 	let name1 = "Улучшенное 'Оживить'"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("Улучшенное 'Оживить'");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm10").click(function () {
		// 	let name1 = "Детоксикация"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("Детоксикация");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm11").click(function () {
		// 	let name1 = "Паралич"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("Паралич");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm12").click(function () {
		// 	let name1 = "изящество журавля"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("изящество журавля");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm13").click(function () {
		// 	let name1 = "живенькое оживление"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("живенькое оживление");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm14").click(function () {
		// 	let name1 = "свирепость сюэня"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("свирепость сюэня");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm15").click(function () {
		// 	let name1 = "улучшенный паралич"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("улучшенный паралич");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm16").click(function () {
		// 	let name1 = "неуловимый туман"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("неуловимый туман");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm17").click(function () {
		// 	let name1 = "трансцендентность"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("трансцендентность");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm18").click(function () {
		// 	let name1 = "рука-копье"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("рука-копье");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm19").click(function () {
		// 	let name1 = "укрепляющий отвар"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("укрепляющий отвар");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm20").click(function () {
		// 	let name1 = "выброс ци"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("выброс ци");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm21").click(function () {
		// 	let name1 = "волна ци"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("волна ци");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm22").click(function () {
		// 	let name1 = "опрометчивый вызов"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("опрометчивый вызов");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm23").click(function () {
		// 	let name1 = "круг мира"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("круг мира");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm24").click(function () {
		// 	let name1 = "быстроногость"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("быстроногость");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm25").click(function () {
		// 	let name1 = "подвижность"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("подвижность");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm26").click(function () {
		// 	let name1 = "ци-полет"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("ци-полет");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm27").click(function () {
		// 	let name1 = "отвар железного панциря"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("отвар железного панциря");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm28").click(function () {
		// 	let name1 = "ускоренное укрепление"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("ускоренное укрепление");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm29").click(function () {
		// 	let name1 = "абсолютное опровержение"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("абсолютное опровержение");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm30").click(function () {
		// 	let name1 = "распыление магии"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("распыление магии");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm31").click(function () {
		// 	let name1 = "глаз тигра"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("глаз тигра");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm32").click(function () {
		// 	let name1 = "смягчение удара"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("смягчение удара");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm33").click(function () {
		// 	let name1 = "улучшенное смертельное касание"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("улучшенное смертельное касание");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm34").click(function () {
		// 	let name1 = "сила духа"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("сила духа");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm35").click(function () {
		// 	let name1 = "близко к сердцу"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("близко к сердцу");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm36").click(function () {
		// 	let name1 = "бегство от реальность"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("бегство от реальность");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm37").click(function () {
		// 	let name1 = "стремительность"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("стремительность");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm38").click(function () {
		// 	let name1 = "фатальное прикосновение"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("фатальное прикосновение");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm39").click(function () {
		// 	let name1 = "щедрая доля"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("щедрая доля");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm40").click(function () {
		// 	let name1 = "спасти их всех"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("спасти их всех");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm41").click(function () {
		// 	let name1 = "резонирующие кулаки"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("резонирующие кулаки");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm42").click(function () {
		// 	let name1 = "отскок назад"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("отскок назад");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm43").click(function () {
		// 	let name1 = "призыв статуи нефритовой змеи"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("призыв статуи нефритовой змеи");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm44").click(function () {
		// 	let name1 = "призыв статуи белого тигра"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("призыв статуи белого тигра");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	
		// $("#ttm45").click(function () {
		// 	let name1 = "призыв статуи черного быка"
		// 	let name2 = $("#tn2").text()
		// 	if (name1 === name2) {
		// 		$(".row2-tc").css("display", "none");
		// 		$("#tn2").text("none")
		// 	} else {
		// 		$(".row2-tc").fadeIn (600);
		// 		$("#tn2").text("призыв статуи черного быка");
		// 		$("#tc2").text("Lorem ipsum dolor sit amet, onsectetur adipiscing elit. " +
		// 			"Cras consequat volutpat viverra. Etiam fringilla quam nunc, quis dapibus sem accumsan nec. " +
		// 			"Praesent a maximus tortor, congue commodo turpis. Sed pharetra.");
		// 	}
		// });
	// 	ТАЛАНТЫ МОНАХА 1-5
	
	// ТАЛАНТЫ
	
	});