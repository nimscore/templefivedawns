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

	$(".rb2").click(function(){ //Освежающий нефритовый ветер
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
		if ($(".asrp3").css('display') == 'none') {
			$(".asrp3").fadeIn(600); //мифик+

			$(".rb3").removeClass("fa-xmark");
			$(".rb3").addClass("fa-check");
		} else {
			$(".asrp3").fadeOut(200);

			$(".rb3").removeClass("fa-check");
			$(".rb3").addClass("fa-xmark");
		}
	});

	$(".rb4").click(function(){ //Дзен-импульс
		if ($(".asrp2").css('display') == 'none') {
			$(".asrp2").fadeIn(600); //мифик+

			$(".rb4").removeClass("fa-xmark");
			$(".rb4").addClass("fa-check");
		} else {
			$(".asrp2").fadeOut(200);

			$(".rb4").removeClass("fa-check");
			$(".rb4").addClass("fa-xmark");
		}
	});

	$(".rb9").click(function(){ //Подъем азерита
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

	$(".rb10").click(function(){ //Сгущающийся туман
		if ($(".asrp8").css('display') == 'none') {
			$(".asrp8").fadeIn(600); //мифик+

			$(".rb10").removeClass("fa-xmark");
			$(".rb10").addClass("fa-check");
		} else {
			$(".asrp8").fadeOut(200);

			$(".rb10").removeClass("fa-check");
			$(".rb10").addClass("fa-xmark");
		}
	});

	$(".rb11").click(function(){ //Древние учения
		if ($(".asrp6").css('display') == 'none') {
			$(".asrp6").fadeIn(600); //мифик+

			$(".rb11").removeClass("fa-xmark");
			$(".rb11").addClass("fa-check");
		} else {
			$(".asrp6").fadeOut(200);

			$(".rb11").removeClass("fa-check");
			$(".rb11").addClass("fa-xmark");
		}
	});

	$(".rb12").click(function(){ //Затуманенная концентрация
		if ($(".srp11").css('display') == 'none') {
			$(".srp11").fadeIn(600); //ст
			$(".crp11").fadeIn(600); //клив
			$(".arp11").fadeIn(600); //аое

			$(".rb12").removeClass("fa-xmark");
			$(".rb12").addClass("fa-check");
		} else {
			$(".srp11").fadeOut(200);
			$(".crp11").fadeOut(200);
			$(".arp11").fadeOut(200);

			$(".rb12").removeClass("fa-check");
			$(".rb12").addClass("fa-xmark");
		}
	});

	$(".rb13").click(function(){ //Живенькое оживление
		if ($(".srp11").css('display') == 'none') {
			$(".srp11").fadeIn(600); //ст
			$(".crp11").fadeIn(600); //клив
			$(".arp11").fadeIn(600); //аое

			$(".rb13").removeClass("fa-xmark");
			$(".rb13").addClass("fa-check");
		} else {
			$(".srp11").fadeOut(200);
			$(".crp11").fadeOut(200);
			$(".arp11").fadeOut(200);

			$(".rb13").removeClass("fa-check");
			$(".rb13").addClass("fa-xmark");
		}
	});

	$(".rb14").click(function(){ //Секретный состав
		if ($(".asrp10").css('display') == 'none') {
			$(".asrp7").fadeOut(200);
			$(".asrp10").fadeIn(600); //мифик+

			$(".rb14").removeClass("fa-xmark");
			$(".rb14").addClass("fa-check");
		} else {
			$(".asrp10").fadeOut(200);
			$(".asrp7").fadeIn(600);

			$(".rb14").removeClass("fa-check");
			$(".rb14").addClass("fa-xmark");
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