$(document).ready(function() {

	// ПИКИ ТАЛАНТОВ
	$(".rb1").click(function(){ //выброс ци
		if ($(".srp19").css('display') == 'none') {


			$(".rb1").removeClass("fa-xmark");
			$(".rb1").addClass("fa-check");
		} else {


			$(".rb1").removeClass("fa-check");
			$(".rb1").addClass("fa-xmark");
		}
	});

	$(".rb2").click(function(){ //Освежающий нефритовый ветер
		if ($(".srp8").css('display') == 'none') {
			$(".srp8").fadeIn(600); //рейд


			$(".rb2").removeClass("fa-xmark");
			$(".rb2").addClass("fa-check");
		} else {
			$(".srp8").fadeOut(200);


			$(".rb2").removeClass("fa-check");
			$(".rb2").addClass("fa-xmark");
		}
	});

	$(".rb3").click(function(){ //Волшебная линия
		if ($(".asrp3").css('display') == 'none') {
			$(".asrp3").fadeIn(600); //мифик+
			$(".srp1").fadeIn(600); //рейд
			$(".lsrp2").fadeIn(600); //рейд
			$(".dsrp5").fadeIn(600); //урон
			$(".dsrp6").fadeIn(600); //урон

			$(".rb3").removeClass("fa-xmark");
			$(".rb3").addClass("fa-check");
		} else {
			$(".asrp3").fadeOut(200);
			$(".srp1").fadeOut(200);
			$(".srp13").fadeOut(200);
			$(".lsrp2").fadeOut(200);
			$(".dsrp5").fadeOut(200);
			$(".dsrp6").fadeOut(200);

			$(".rb3").removeClass("fa-check");
			$(".rb3").addClass("fa-xmark");
		}
	});

	$(".rb4").click(function(){ //Дзен-импульс
		if ($(".asrp2").css('display') == 'none') {
			$(".asrp2").fadeIn(600); //мифик+
			$(".dsrp2").fadeIn(600); //урон

			$(".rb4").removeClass("fa-xmark");
			$(".rb4").addClass("fa-check");
		} else {
			$(".asrp2").fadeOut(200);
			$(".dsrp2").fadeOut(200);

			$(".rb4").removeClass("fa-check");
			$(".rb4").addClass("fa-xmark");
		}
	});

	$(".rb5").click(function(){ //Призыв статуи белого тигра
		if ($(".dsrp1").css('display') == 'none') {
			$(".dsrp1").fadeIn(600); //урон

			$(".rb5").removeClass("fa-xmark");
			$(".rb5").addClass("fa-check");
		} else {
			$(".dsrp1").fadeOut(200);

			$(".rb5").removeClass("fa-check");
			$(".rb5").addClass("fa-xmark");
		}
	});

	$(".rb9").click(function(){ //Подъем азерита
		if ($(".srp5").css('display') == 'none') {
			$(".srp6").fadeOut(200);
			$(".srp5").fadeIn(600); //рейд
			$(".srp7").fadeOut(200);
			$(".srp16").fadeIn(600); //рейд

			$(".rb9").removeClass("fa-xmark");
			$(".rb9").addClass("fa-check");
		} else {
			$(".srp5").fadeOut(200);
			$(".srp6").fadeIn(600);
			$(".srp16").fadeOut(200);
			$(".srp7").fadeIn(600);

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
			$(".lsrp6").fadeOut(200); //рейд
			$(".lsrp5").fadeIn(600); //рейд

			$(".rb11").removeClass("fa-xmark");
			$(".rb11").addClass("fa-check");
		} else {
			$(".asrp6").fadeOut(200);
			$(".lsrp5").fadeOut(200); //рейд
			$(".lsrp6").fadeIn(600); //рейд

			$(".rb11").removeClass("fa-check");
			$(".rb11").addClass("fa-xmark");
		}
	});

	$(".rb12").click(function(){ //Затуманенная концентрация
		if ($(".srp2").css('display') == 'none') {
			$(".srp2").fadeIn(600); //рейд
			$(".srp4").fadeIn(600); //рейд
			$(".srp10").fadeIn(600); //рейд
			$(".srp12").fadeIn(600); //рейд


			$(".rb12").removeClass("fa-xmark");
			$(".rb12").addClass("fa-check");
		} else {
			$(".srp2").fadeOut(200);
			$(".srp4").fadeOut(200);
			$(".srp10").fadeOut(200);
			$(".srp12").fadeOut(200);

			$(".rb12").removeClass("fa-check");
			$(".rb12").addClass("fa-xmark");
		}
	});

	$(".rb13").click(function(){ //Древнее согласие
		if ($(".dsrp3").css('display') == 'none') {
			$(".dsrp3").fadeIn(600); //урон
			$(".dsrp4").fadeIn(600); //урон

			$(".rb13").removeClass("fa-xmark");
			$(".rb13").addClass("fa-check");
		} else {
			$(".dsrp3").fadeOut(200);
			$(".dsrp4").fadeOut(200);

			$(".rb13").removeClass("fa-check");
			$(".rb13").addClass("fa-xmark");
		}
	});

	$(".rb14").click(function(){ //Секретный состав
		if ($(".asrp10").css('display') == 'none') {
			$(".asrp7").fadeOut(200);
			$(".asrp10").fadeIn(600); //мифик+
			$(".srp6").fadeOut(200);
			$(".srp5").fadeIn(600); //рейд
			$(".srp7").fadeOut(200);
			$(".srp16").fadeIn(600); //рейд

			$(".rb14").removeClass("fa-xmark");
			$(".rb14").addClass("fa-check");
		} else {
			$(".asrp10").fadeOut(200);
			$(".asrp7").fadeIn(600);
			$(".srp5").fadeOut(200);
			$(".srp6").fadeIn(600);
			$(".srp16").fadeOut(200);
			$(".srp7").fadeIn(600);

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