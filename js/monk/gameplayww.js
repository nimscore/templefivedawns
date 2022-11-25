$(document).ready(function() {

	// ПИКИ ТАЛАНТОВ
	$(".rb1").click(function(){ //выброс ци
		if ($(".srp19").css('display') == 'none') {
			$(".srp19").fadeIn(600); //ст
			$(".crp19").fadeIn(600); //клив
			$(".arp19").fadeIn(600); //аое

			$(".rb1").removeClass("fa-xmark");
			$(".rb1").addClass("fa-check");
		} else {
			$(".srp19").fadeOut(200);
			$(".crp19").fadeOut(200);
			$(".arp19").fadeOut(200);

			$(".rb1").removeClass("fa-check");
			$(".rb1").addClass("fa-xmark");
		}
	});

	$(".rb2").click(function(){ //волна ци
		if ($(".rp10").css('display') == 'none') {
			$(".rp10").fadeIn(600); //опенер
			$(".srp17").fadeIn(600); //ст

			$(".rb2").removeClass("fa-xmark");
			$(".rb2").addClass("fa-check");
		} else {
			$(".rp10").fadeOut(200);
			$(".srp17").fadeOut(200);

			$(".rb2").removeClass("fa-check");
			$(".rb2").addClass("fa-xmark");
		}
	});

	$(".rb3").click(function(){ //Волшебная линия
		if ($(".rp11").css('display') == 'none') {
			$(".rp11").fadeIn(600); //опенер
			$(".srp18").fadeIn(600); //ст
			// $(".text-add1").fadeIn(600); //дополнение про ветер при пике бочонка

			$(".rb3").removeClass("fa-xmark");
			$(".rb3").addClass("fa-check");
		} else {
			$(".rp11").fadeOut(200);
			$(".srp18").fadeOut(200);
			// $(".text-add1").fadeOut(200);

			$(".rb3").removeClass("fa-check");
			$(".rb3").addClass("fa-xmark");
		}
	});

	$(".rb4").click(function(){ //Порыв нефритового ветра
		if ($(".srp16").css('display') == 'none') {
			$(".srp16").fadeIn(600); //ст
			$(".crp16").fadeIn(600); //клив
			$(".arp16").fadeIn(600); //аое

			$(".rb4").removeClass("fa-xmark");
			$(".rb4").addClass("fa-check");
		} else {
			$(".srp16").fadeOut(200);
			$(".crp16").fadeOut(200);
			$(".arp16").fadeOut(200);

			$(".rb4").removeClass("fa-check");
			$(".rb4").addClass("fa-xmark");
		}
	});

	$(".rb5").click(function(){ //Удар Владыки Ветра
		if ($(".rp12").css('display') == 'none') {
			$(".rp12").fadeIn(600); //опенер
			$(".srp12").fadeIn(600); //ст
			$(".crp12").fadeIn(600); //клив
			$(".arp12").fadeIn(600); //аое

			$(".rb5").removeClass("fa-xmark");
			$(".rb5").addClass("fa-check");
		} else {
			$(".rp12").fadeOut(200);
			$(".srp12").fadeOut(200);
			$(".crp12").fadeOut(200);
			$(".arp12").fadeOut(200);

			$(".rb5").removeClass("fa-check");
			$(".rb5").addClass("fa-xmark");
		}
	});

	$(".rb6").click(function(){ //Удар крутящегося дракона
		if ($(".srp14").css('display') == 'none') {
			$(".srp14").fadeIn(600); //ст
			$(".crp14").fadeIn(600); //клив
			$(".arp14").fadeIn(600); //аое

			$(".rb6").removeClass("fa-xmark");
			$(".rb6").addClass("fa-check");
		} else {
			$(".srp14").fadeOut(200);
			$(".crp14").fadeOut(200);
			$(".arp14").fadeOut(200);

			$(".rb6").removeClass("fa-check");
			$(".rb6").addClass("fa-xmark");
		}
	});

	$(".rb9").click(function(){ //Танец Чи-Цзи
		if ($(".srp15").css('display') == 'none') {
			$(".srp15").fadeIn(600); //ст
			$(".crp15").fadeIn(600); //клив
			$(".arp15").fadeIn(600); //аое

			$(".rb9").removeClass("fa-xmark");
			$(".rb9").addClass("fa-check");
		} else {
			$(".srp15").fadeOut(0);
			$(".crp15").fadeOut(0);
			$(".arp15").fadeOut(0);

			$(".rb9").removeClass("fa-check");
			$(".rb9").addClass("fa-xmark");
		}
	});

	$(".rb10").click(function(){ //Волшебная гармония
		if ($(".srp13").css('display') == 'none') {
			$(".srp13").fadeIn(600); //ст

			$(".rb10").removeClass("fa-xmark");
			$(".rb10").addClass("fa-check");
		} else {
			$(".srp13").fadeOut(200);

			$(".rb10").removeClass("fa-check");
			$(".rb10").addClass("fa-xmark");
		}
	});

	$(".rb11").click(function(){ //Монастырские знания
		if ($(".srp11").css('display') == 'none') {
			$(".srp11").fadeIn(600); //ст
			$(".crp11").fadeIn(600); //клив
			$(".arp11").fadeIn(600); //аое

			$(".rb11").removeClass("fa-xmark");
			$(".rb11").addClass("fa-check");
		} else {
			$(".srp11").fadeOut(200);
			$(".crp11").fadeOut(200);
			$(".arp11").fadeOut(200);

			$(".rb11").removeClass("fa-check");
			$(".rb11").addClass("fa-xmark");
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