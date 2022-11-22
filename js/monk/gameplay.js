$(document).ready(function() {

	// ПИКИ ТАЛАНТОВ
	$(".rb1").click(function(){ //волна ци
		if ($(".asrp19").css('display') == 'none') {
			$(".asrp19").fadeIn(600); //ast

			$(".rb1").removeClass("fa-xmark");
			$(".rb1").addClass("fa-check");
		} else {
			$(".asrp19").fadeOut(200);

			$(".rb1").removeClass("fa-check");
			$(".rb1").addClass("fa-xmark");
		}
	});

	$(".rb2").click(function(){ //волна ци
		if ($(".rp12").css('display') == 'none') {
			$(".rp12").fadeIn(600); //опенер
			$(".asrp2").fadeIn(600); //ast

			$(".rb2").removeClass("fa-xmark");
			$(".rb2").addClass("fa-check");
		} else {
			$(".rp12").fadeOut(200);
			$(".asrp2").fadeOut(200);

			$(".rb2").removeClass("fa-check");
			$(".rb2").addClass("fa-xmark");
		}
	});

	$(".rb3").click(function(){ //ветер
		if ($(".rp1").css('display') == 'none') {
			$(".rp1").fadeIn(600); //опенер
			$(".ssrp6").fadeIn(600); //симпл ст
			$(".asrp1").fadeIn(600); //ast
			$(".smrp6").fadeIn(600); //smrp
			$(".text-add1").fadeIn(600); //дополнение про ветер при пике бочонка

			$(".rb3").removeClass("fa-xmark");
			$(".rb3").addClass("fa-check");
		} else {
			$(".rp1").fadeOut(200);
			$(".ssrp6").fadeOut(200);
			$(".asrp1").fadeOut(200);
			$(".smrp6").fadeOut(200);
			$(".text-add1").fadeOut(200);

			$(".rb3").removeClass("fa-check");
			$(".rb3").addClass("fa-xmark");
		}
	});

	$(".rb4").click(function(){ //статуя тигра
		if ($(".asrp6").css('display') == 'none') {
			$(".asrp6").fadeIn(600); //аст
			$(".rp8").fadeIn(600); //опенер

			$(".rb4").removeClass("fa-xmark");
			$(".rb4").addClass("fa-check");
		} else {
			$(".asrp6").fadeOut(200);
			$(".rp8").fadeOut(200);

			$(".rb4").removeClass("fa-check");
			$(".rb4").addClass("fa-xmark");
		}
	});

	$(".rb5").click(function(){ //отвар черного быка
		if ($(".asrp3").css('display') == 'none') {
			$(".asrp3").fadeIn(600); //аст

			$(".rb5").removeClass("fa-xmark");
			$(".rb5").addClass("fa-check");
		} else {
			$(".asrp3").fadeOut(200);

			$(".rb5").removeClass("fa-check");
			$(".rb5").addClass("fa-xmark");
		}
	});

	$(".rb6").click(function(){ //бондаст брю
		if ($(".rp3").css('display') == 'none') {
			$(".rp3").fadeIn(600); //опенер
			$(".asrp7").fadeIn(600); //аст

			$(".rb6").removeClass("fa-xmark");
			$(".rb6").addClass("fa-check");
		} else {
			$(".rp3").fadeOut(200);
			$(".asrp7").fadeOut(200);

			$(".rb6").removeClass("fa-check");
			$(".rb6").addClass("fa-xmark");
		}
	});

	$(".rb7").click(function(){ //взрывная кега
		if ($(".rp6").css('display') == 'none') {
			$(".rp6").fadeIn(600); //опенер
			$(".asrp15").fadeIn(600); //аст

			$(".rb7").removeClass("fa-xmark");
			$(".rb7").addClass("fa-check");
		} else {
			$(".rp6").fadeOut(200);
			$(".asrp15").fadeOut(200);

			$(".rb7").removeClass("fa-check");
			$(".rb7").addClass("fa-xmark");
		}
	});

	$(".rb8").click(function(){ //оружие ордена
		if ($(".rp4").css('display') == 'none') {
			$(".rp4").fadeIn(600); //опенер
			$(".asrp11").fadeIn(600); //аст

			$(".rb8").removeClass("fa-xmark");
			$(".rb8").addClass("fa-check");
		} else {
			$(".rp4").fadeOut(200);
			$(".asrp11").fadeOut(200);

			$(".rb8").removeClass("fa-check");
			$(".rb8").addClass("fa-xmark");
		}
	});

	$(".rb9").click(function(){ //прогулка с быком
		if ($(".asrp21").css('display') == 'none') {
			$(".asrp23").fadeOut(0); //аст
			$(".asrp21").fadeIn(600);

			$(".rb9").removeClass("fa-xmark");
			$(".rb9").addClass("fa-check");
		} else {
			$(".asrp21").fadeOut(0);
			$(".asrp23").fadeIn(600);

			$(".rb9").removeClass("fa-check");
			$(".rb9").addClass("fa-xmark");
		}
	});

	$(".rb10").click(function(){ //доставка
		if ($(".asrp14").css('display') == 'none') {
			$(".asrp14").fadeIn(600); //аст

			$(".rb10").removeClass("fa-xmark");
			$(".rb10").addClass("fa-check");
		} else {
			$(".asrp14").fadeOut(200);

			$(".rb10").removeClass("fa-check");
			$(".rb10").addClass("fa-xmark");
		}
	});

	$(".rb11").click(function(){ //обжигающий отвар
		if ($(".asrp10").css('display') == 'none') {
			$(".asrp10").fadeIn(600); //аст

			$(".rb11").removeClass("fa-xmark");
			$(".rb11").addClass("fa-check");
		} else {
			$(".asrp10").fadeOut(200);

			$(".rb11").removeClass("fa-check");
			$(".rb11").addClass("fa-xmark");
		}
	});

	$(".rb12").click(function(){ //чарред
		if ($(".ssrp8").css('display') == 'none') {
			$(".ssrp9").fadeOut(0);	 //симпл ст
			$(".ssrp8").fadeIn(600); //симпл ст
			$(".asrp8").fadeIn(600); //аст

			$(".rb12").removeClass("fa-xmark");
			$(".rb12").addClass("fa-check");
		} else {
			$(".ssrp8").fadeOut(0);
			$(".asrp8").fadeOut(0);
			$(".ssrp9").fadeIn(600);

			$(".rb12").removeClass("fa-check");
			$(".rb12").addClass("fa-xmark");
		}
	});

	$(".rb13").click(function(){ //дабл бочка
		if ($(".asrp17").css('display') == 'none') {
			$(".asrp17").fadeIn(600); //аст

			$(".rb13").removeClass("fa-xmark");
			$(".rb13").addClass("fa-check");
		} else {
			$(".asrp17").fadeOut(200);

			$(".rb13").removeClass("fa-check");
			$(".rb13").addClass("fa-xmark");
		}
	});
// ПИКИ ТАЛАНТОВ

// ТАБЫ СТ
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
// ТАБЫ СТ

	// ТАБЫ АОЕ
	$(".btn-rotation-3").click(function(){
		$(".tab-rotation-3").fadeIn (600);
		$(".tab-rotation-4").fadeOut (0);
		$(".btn-rotation-3").addClass("select-bg-leg");
		$(".btn-rotation-4").removeClass("select-bg-leg");
	});

	$(".btn-rotation-4").click(function(){
		$(".tab-rotation-4").fadeIn (600);
		$(".tab-rotation-3").fadeOut (0);
		$(".btn-rotation-4").addClass("select-bg-leg");
		$(".btn-rotation-3").removeClass("select-bg-leg");
	});
// ТАБЫ АОЕ

});