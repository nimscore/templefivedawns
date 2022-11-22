$(document).ready(function () {

// моб аккордеон начало брю
	$(".SlideMobBM").click(function () {
		if ($(".panelBM").css('display') == 'none') {
			$(".panelBM").slideDown(200);
			$(".panelMW").slideUp(200);
			$(".panelWW").slideUp(200);
		} else {
			$(".panelBM").slideUp(200);
		}
	});
// моб аккордеон конец брю
 
// моб аккордеон начало ткача
	$(".SlideMobMW").click(function () {
		if ($(".panelMW").css('display') == 'none') {
			$(".panelMW").slideDown(200);
			$(".panelBM").slideUp(200);
			$(".panelWW").slideUp(200);
		} else {
			$(".panelMW").slideUp(200);
		}
	});
// моб аккордеон конец ткача

// моб аккордеон начало вв
	$(".SlideMobWW").click(function () {
		if ($(".panelWW").css('display') == 'none') {
			$(".panelWW").slideDown(200);
			$(".panelBM").slideUp(200);
			$(".panelMW").slideUp(200);
		} else {
			$(".panelWW").slideUp(200);
		}
	});
// моб аккордеон конец вв

// моб твич-аккордеон начало брю
	$(".frame-red-accord-bm").click(function () {
		if ($(".panelBMstream").css('display') == 'none') {
			$(".panelBMstream").slideDown(200);
			$(".panelMWstream").slideUp(200);
			$(".panelWWstream").slideUp(200);
		} else {
			$(".panelBMstream").slideUp(200);
		}
	});
// моб твич-аккордеон конец брю

// моб твич-аккордеон начало ткача
	$(".frame-red-accord-mw").click(function () {
		if ($(".panelMWstream").css('display') == 'none') {
			$(".panelMWstream").slideDown(200);
			$(".panelBMstream").slideUp(200);
			$(".panelWWstream").slideUp(200);
		} else {
			$(".panelMWstream").slideUp(200);
		}
	});
// моб твич-аккордеон конец ткача

// моб твич-аккордеон начало вв
	$(".frame-red-accord-ww").click(function () {
		if ($(".panelWWstream").css('display') == 'none') {
			$(".panelWWstream").slideDown(200);
			$(".panelBMstream").slideUp(200);
			$(".panelMWstream").slideUp(200);
		} else {
			$(".panelWWstream").slideUp(200);
		}
	});
// моб твич-аккордеон конец вв

// ПЛАВАЮЩАЯ АНИМАЦИЯ СЛАЙДА
	for (var i = 0; i < 5000; ++i) {
		$(".Slide1").hover(function () {
			$(this).animate({
				bottom: '+=10'
			}, 800);
			$(this).animate({
				bottom: '-=10'
			}, 800);
		});
	}

	$(".Slide1").mouseleave(function () {
		$(this).stop(true, false);
		$(this).animate({
			bottom: '0'
		}, 800);
	});
// ПЛАВАЮЩАЯ АНИМАЦИЯ СЛАЙДА

// ПЛАВАЮЩАЯ АНИМАЦИЯ ДИСКОРДА, БУСТИ И КНОПКИ ПОДДЕРЖКИ
	$(".discord, .boosty").hover(function () {
		$(this).animate({
			bottom: '+=5'
		}, 400);
		$(this).animate({
			bottom: '-=5'
		}, 400);
	});

	$(".discord, .boosty").mouseleave(function () {
		$(this).stop(true, false);
		$(this).animate({
			bottom: '0'
		}, 400);
	});

	for (var i = 0; i < 5000; ++i) {
		$(".support").hover(function () {
			$(this).animate({
				bottom: '+=5'
			}, 500);
			$(this).animate({
				bottom: '-=5'
			}, 500);
		});
	}

	$(".support").mouseleave(function () {
		$(this).stop(true, false);
		$(this).animate({
			bottom: '0'
		}, 800);
	});
// ПЛАВАЮЩАЯ АНИМАЦИЯ ДИСКОРДА, БУСТИ И КНОПКИ ПОДДЕРЖКИ


	$(".first").hover(function () {
		var widthContainer1 = $(".dropdownMenu1").outerWidth()
		var heightContainer1 = $(".dropdownMenu1").outerHeight()
		var marginLeft1 = $(".dropdownMenu1").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenu1").fadeIn(100);
		$(".dropdownMenuContainer1").css("display", "block");
		$(".dropdownMenuContainer1").css("width", (100 * widthContainer1 / widthWindow) + "vw");
		$(".dropdownMenuContainer1").css("height", (100 * heightContainer1 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainer1").css("marginLeft", marginLeft1);
	});

	// $(".second").hover(function () {
	// 	var widthContainer2 = $(".dropdownMenu2").outerWidth()
	// 	var heightContainer2 = $(".dropdownMenu2").outerHeight()
	// 	var marginLeft2 = $(".dropdownMenu2").css("marginLeft");
	// 	var widthWindow = $(window).width();
	// 	$(".dropdownMenu2").fadeIn(100);
	// 	$(".dropdownMenuContainer2").css("display", "block");
	// 	$(".dropdownMenuContainer2").css("width", (100 * widthContainer2 / widthWindow) + "vw");
	// 	$(".dropdownMenuContainer2").css("height", (100 * heightContainer2 / widthWindow) + 0.45 + "vw");
	// 	$(".dropdownMenuContainer2").css("marginLeft", marginLeft2);
	// });

	$(".third").hover(function () {
		var widthContainer3 = $(".dropdownMenu3").outerWidth()
		var heightContainer3 = $(".dropdownMenu3").outerHeight()
		var marginLeft3 = $(".dropdownMenu3").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenu3").fadeIn(100);
		$(".dropdownMenuContainer3").css("display", "block");
		$(".dropdownMenuContainer3").css("width", (100 * widthContainer3 / widthWindow) + "vw");
		$(".dropdownMenuContainer3").css("height", (100 * heightContainer3 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainer3").css("marginLeft", marginLeft3);
	});

	$(".fourth").hover(function () {
		var widthContainer4 = $(".dropdownMenu4").outerWidth()
		var heightContainer4 = $(".dropdownMenu4").outerHeight()
		var marginLeft4 = $(".dropdownMenu4").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenu4").fadeIn(100);
		$(".dropdownMenuContainer4").css("display", "block");
		$(".dropdownMenuContainer4").css("width", (100 * widthContainer4 / widthWindow) + "vw");
		$(".dropdownMenuContainer4").css("height", (100 * heightContainer4 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainer4").css("marginLeft", marginLeft4);
	});

	$(".fifth").hover(function () {
		var widthContainer5 = $(".dropdownMenu5").outerWidth()
		var heightContainer5 = $(".dropdownMenu5").outerHeight()
		var marginLeft5 = $(".dropdownMenu5").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenu5").fadeIn(100);
		$(".dropdownMenuContainer5").css("display", "block");
		$(".dropdownMenuContainer5").css("width", (100 * widthContainer5 / widthWindow) + "vw");
		$(".dropdownMenuContainer5").css("height", (100 * heightContainer5 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainer5").css("marginLeft", marginLeft5);
	});

	$(".sixth").hover(function () {
		var widthContainer6 = $(".dropdownMenu6").outerWidth()
		var heightContainer6 = $(".dropdownMenu6").outerHeight()
		var marginLeft6 = $(".dropdownMenu6").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenu6").fadeIn(100);
		$(".dropdownMenuContainer6").css("display", "block");
		$(".dropdownMenuContainer6").css("width", (100 * widthContainer6 / widthWindow) + "vw");
		$(".dropdownMenuContainer6").css("height", (100 * heightContainer6 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainer6").css("marginLeft", marginLeft6);
	});

	// $(".seventh").hover(function () {
	// 	var widthContainer7 = $(".dropdownMenu7").outerWidth()
	// 	var heightContainer7 = $(".dropdownMenu7").outerHeight()
	// 	var marginLeft7 = $(".dropdownMenu7").css("marginLeft");
	// 	var widthWindow = $(window).width();
	// 	$(".dropdownMenu7").fadeIn(100);
	// 	$(".dropdownMenuContainer7").css("display", "block");
	// 	$(".dropdownMenuContainer7").css("width", (100 * widthContainer7 / widthWindow) + "vw");
	// 	$(".dropdownMenuContainer7").css("height", (100 * heightContainer7 / widthWindow) + 0.45 + "vw");
	// 	$(".dropdownMenuContainer7").css("marginLeft", marginLeft7);
	// });

	$(".first").mouseleave(function () {
		if (
			$('.dropdownMenuContainer1:hover').length != 0
		) {
			$(".dropdownMenu1").css("display", "block");
		} else {
			$(".dropdownMenu1").fadeOut(100);
			$(".dropdownMenuContainer1").css("display", "none");
		}
	});

	$(".second").mouseleave(function () {
		if (
			$('.dropdownMenuContainer2:hover').length != 0
		) {
			$(".dropdownMenu2").css("display", "block");
		} else {
			$(".dropdownMenu2").fadeOut(100);
			$(".dropdownMenuContainer2").css("display", "none");
		}
	});

	$(".third").mouseleave(function () {
		if (
			$('.dropdownMenuContainer3:hover').length != 0
		) {
			$(".dropdownMenu3").css("display", "block");
		} else {
			$(".dropdownMenu3").fadeOut(100);
			$(".dropdownMenuContainer3").css("display", "none");
		}
	});

	$(".fourth").mouseleave(function () {
		if (
			$('.dropdownMenuContainer4:hover').length != 0
		) {
			$(".dropdownMenu4").css("display", "block");
		} else {
			$(".dropdownMenu4").fadeOut(100);
			$(".dropdownMenuContainer4").css("display", "none");
		}
	});

	$(".fifth").mouseleave(function () {

		if (

			$('.dropdownMenuContainer5:hover').length != 0

		) {
			$(".dropdownMenu5").css("display", "block");

		} else {
			$(".dropdownMenu5").fadeOut(100);
			$(".dropdownMenuContainer5").css("display", "none");

		}

	});

	$(".sixth").mouseleave(function () {

		if (

			$('.dropdownMenuContainer6:hover').length != 0

		) {
			$(".dropdownMenu6").css("display", "block");

		} else {
			$(".dropdownMenu6").fadeOut(100);
			$(".dropdownMenuContainer6").css("display", "none");

		}

	});

	$(".seventh").mouseleave(function () {
	
		if (
	
			$('.dropdownMenuContainer7:hover').length != 0
	
		) {
			$(".dropdownMenu7").css("display", "block");
	
		} else {
			$(".dropdownMenu7").fadeOut(100);
			$(".dropdownMenuContainer7").css("display", "none");
	
		}
	
	});


	$(".dropdownMenuContainer1").mouseleave(function () {
		if (
			$('.first:hover').length != 0

		) {
			$(".dropdownMenu1").css("display", "block");
		} else {
			$(".dropdownMenu1").fadeOut(100);
			$(".dropdownMenuContainer1").css("display", "none");
		}
	});

	$(".dropdownMenuContainer2").mouseleave(function () {
		if (
			$('.second:hover').length != 0

		) {
			$(".dropdownMenu2").css("display", "block");
		} else {
			$(".dropdownMenu2").fadeOut(100);
			$(".dropdownMenuContainer2").css("display", "none");
		}
	});

	$(".dropdownMenuContainer3").mouseleave(function () {
		if (
			$('.third:hover').length != 0

		) {
			$(".dropdownMenu3").css("display", "block");
		} else {
			$(".dropdownMenu3").fadeOut(100);
			$(".dropdownMenuContainer3").css("display", "none");
		}
	});

	$(".dropdownMenuContainer4").mouseleave(function () {
		if (
			$('.fourth:hover').length != 0

		) {
			$(".dropdownMenu4").css("display", "block");
		} else {
			$(".dropdownMenu4").fadeOut(100);
			$(".dropdownMenuContainer4").css("display", "none");
		}
	});

	$(".dropdownMenuContainer5").mouseleave(function () {
		if (
			$('.fifth:hover').length != 0

		) {
			$(".dropdownMenu5").css("display", "block");
		} else {
			$(".dropdownMenu5").fadeOut(100);
			$(".dropdownMenuContainer5").css("display", "none");
		}
	});

	$(".dropdownMenuContainer6").mouseleave(function () {
		if (
			$('.sixth:hover').length != 0

		) {
			$(".dropdownMenu6").css("display", "block");
		} else {
			$(".dropdownMenu6").fadeOut(100);
			$(".dropdownMenuContainer6").css("display", "none");
		}
	});

	$(".dropdownMenuContainer7").mouseleave(function () {
		if (
			$('.seventh:hover').length != 0
	
		) {
			$(".dropdownMenu7").css("display", "block");
		} else {
			$(".dropdownMenu7").fadeOut(100);
			$(".dropdownMenuContainer7").css("display", "none");
		}
	});


//  Меню второго слайда


	$(".firstII").hover(function () {


		var widthContainerII1 = $(".dropdownMenuII1").outerWidth()
		var heightContainerII1 = $(".dropdownMenuII1").outerHeight()
		var marginLeftII1 = $(".dropdownMenuII1").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuII1").fadeIn(100);
		$(".dropdownMenuContainerII1").css("display", "block");
		$(".dropdownMenuContainerII1").css("width", (100 * widthContainerII1 / widthWindow) + "vw");
		$(".dropdownMenuContainerII1").css("height", (100 * heightContainerII1 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerII1").css("marginLeft", marginLeftII1);


	});

	// $(".secondII").hover(function () {
	// 	var widthContainerII2 = $(".dropdownMenuII2").outerWidth()
	// 	var heightContainerII2 = $(".dropdownMenuII2").outerHeight()
	// 	var marginLeftII2 = $(".dropdownMenuII2").css("marginLeft");
	// 	var widthWindow = $(window).width();
	// 	$(".dropdownMenuII2").fadeIn(100);
	// 	$(".dropdownMenuContainerII2").css("display", "block");
	// 	$(".dropdownMenuContainerII2").css("width", (100 * widthContainerII2 / widthWindow) + "vw");
	// 	$(".dropdownMenuContainerII2").css("height", (100 * heightContainerII2 / widthWindow) + 0.45 + "vw");
	// 	$(".dropdownMenuContainerII2").css("marginLeft", marginLeftII2);

	// });

	$(".thirdII").hover(function () {
		var widthContainerII3 = $(".dropdownMenuII3").outerWidth()
		var heightContainerII3 = $(".dropdownMenuII3").outerHeight()
		var marginLeftII3 = $(".dropdownMenuII3").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuII3").fadeIn(100);
		$(".dropdownMenuContainerII3").css("display", "block");
		$(".dropdownMenuContainerII3").css("width", (100 * widthContainerII3 / widthWindow) + "vw");
		$(".dropdownMenuContainerII3").css("height", (100 * heightContainerII3 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerII3").css("marginLeft", marginLeftII3);

	});

	$(".fourthII").hover(function () {
		var widthContainerII4 = $(".dropdownMenuII4").outerWidth()
		var heightContainerII4 = $(".dropdownMenuII4").outerHeight()
		var marginLeftII4 = $(".dropdownMenuII4").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuII4").fadeIn(100);
		$(".dropdownMenuContainerII4").css("display", "block");
		$(".dropdownMenuContainerII4").css("width", (100 * widthContainerII4 / widthWindow) + "vw");
		$(".dropdownMenuContainerII4").css("height", (100 * heightContainerII4 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerII4").css("marginLeft", marginLeftII4);

	});

	$(".fifthII").hover(function () {
		var widthContainerII5 = $(".dropdownMenuII5").outerWidth()
		var heightContainerII5 = $(".dropdownMenuII5").outerHeight()
		var marginLeftII5 = $(".dropdownMenuII5").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuII5").fadeIn(100);
		$(".dropdownMenuContainerII5").css("display", "block");
		$(".dropdownMenuContainerII5").css("width", (100 * widthContainerII5 / widthWindow) + "vw");
		$(".dropdownMenuContainerII5").css("height", (100 * heightContainerII5 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerII5").css("marginLeft", marginLeftII5);

	});

	$(".sixthII").hover(function () {
		var widthContainerII6 = $(".dropdownMenuII6").outerWidth()
		var heightContainerII6 = $(".dropdownMenuII6").outerHeight()
		var marginLeftII6 = $(".dropdownMenuII6").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuII6").fadeIn(100);
		$(".dropdownMenuContainerII6").css("display", "block");
		$(".dropdownMenuContainerII6").css("width", (100 * widthContainerII6 / widthWindow) + "vw");
		$(".dropdownMenuContainerII6").css("height", (100 * heightContainerII6 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerII6").css("marginLeft", marginLeftII6);

	});

	// $(".seventhII").hover(function () {
	// 	var widthContainerII7 = $(".dropdownMenuII7").outerWidth()
	// 	var heightContainerII7 = $(".dropdownMenuII7").outerHeight()
	// 	var marginLeftII7 = $(".dropdownMenuII7").css("marginLeft");
	// 	var widthWindow = $(window).width();
	// 	$(".dropdownMenuII7").fadeIn(100);
	// 	$(".dropdownMenuContainerII7").css("display", "block");
	// 	$(".dropdownMenuContainerII7").css("width", (100 * widthContainerII7 / widthWindow) + "vw");
	// 	$(".dropdownMenuContainerII7").css("height", (100 * heightContainerII7 / widthWindow) + 0.45 + "vw");
	// 	$(".dropdownMenuContainerII7").css("marginLeft", marginLeftII7);
	//
	// });


	$(".firstII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerII1:hover').length != 0

		) {
			$(".dropdownMenuII1").css("display", "block");

		} else {
			$(".dropdownMenuII1").fadeOut(100);
			$(".dropdownMenuContainerII1").css("display", "none");
		}
	});


	$(".secondII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerII2:hover').length != 0

		) {
			$(".dropdownMenuII2").css("display", "block");

		} else {
			$(".dropdownMenuII2").fadeOut(100);
			$(".dropdownMenuContainerII2").css("display", "none");

		}

	});

	$(".thirdII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerII3:hover').length != 0

		) {
			$(".dropdownMenuII3").css("display", "block");

		} else {
			$(".dropdownMenuII3").fadeOut(100);
			$(".dropdownMenuContainerII3").css("display", "none");

		}

	});

	$(".fourthII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerII4:hover').length != 0

		) {
			$(".dropdownMenuII4").css("display", "block");

		} else {
			$(".dropdownMenuII4").fadeOut(100);
			$(".dropdownMenuContainerII4").css("display", "none");

		}

	});

	$(".fifthII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerII5:hover').length != 0

		) {
			$(".dropdownMenuII5").css("display", "block");

		} else {
			$(".dropdownMenuII5").fadeOut(100);
			$(".dropdownMenuContainerII5").css("display", "none");

		}

	});

	$(".sixthII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerII6:hover').length != 0

		) {
			$(".dropdownMenuII6").css("display", "block");

		} else {
			$(".dropdownMenuII6").fadeOut(100);
			$(".dropdownMenuContainerII6").css("display", "none");

		}

	});

	$(".seventhII").mouseleave(function () {
	
		if (
	
			$('.dropdownMenuContainerII7:hover').length != 0
	
		) {
			$(".dropdownMenuII7").css("display", "block");
	
		} else {
			$(".dropdownMenuII7").fadeOut(100);
			$(".dropdownMenuContainerII7").css("display", "none");
	
		}
	
	});


	$(".dropdownMenuContainerII1").mouseleave(function () {
		if (
			$('.firstII:hover').length != 0

		) {
			$(".dropdownMenuII1").css("display", "block");
		} else {
			$(".dropdownMenuII1").fadeOut(100);
			$(".dropdownMenuContainerII1").css("display", "none");
		}
	});

	$(".dropdownMenuContainerII2").mouseleave(function () {
		if (
			$('.secondII:hover').length != 0

		) {
			$(".dropdownMenuII2").css("display", "block");
		} else {
			$(".dropdownMenuII2").fadeOut(100);
			$(".dropdownMenuContainerII2").css("display", "none");
		}
	});

	$(".dropdownMenuContainerII3").mouseleave(function () {
		if (
			$('.thirdII:hover').length != 0

		) {
			$(".dropdownMenuII3").css("display", "block");
		} else {
			$(".dropdownMenuII3").fadeOut(100);
			$(".dropdownMenuContainerII3").css("display", "none");
		}
	});

	$(".dropdownMenuContainerII4").mouseleave(function () {
		if (
			$('.fourthII:hover').length != 0

		) {
			$(".dropdownMenuII4").css("display", "block");
		} else {
			$(".dropdownMenuII4").fadeOut(100);
			$(".dropdownMenuContainerII4").css("display", "none");
		}
	});

	$(".dropdownMenuContainerII5").mouseleave(function () {
		if (
			$('.fifthII:hover').length != 0

		) {
			$(".dropdownMenuII5").css("display", "block");
		} else {
			$(".dropdownMenuII5").fadeOut(100);
			$(".dropdownMenuContainerII5").css("display", "none");
		}
	});

	$(".dropdownMenuContainerII6").mouseleave(function () {
		if (
			$('.sixthII:hover').length != 0

		) {
			$(".dropdownMenuII6").css("display", "block");
		} else {
			$(".dropdownMenuII6").fadeOut(100);
			$(".dropdownMenuContainerII6").css("display", "none");
		}
	});

	$(".dropdownMenuContainerII7").mouseleave(function () {
		if (
			$('.seventhII:hover').length != 0
	
		) {
			$(".dropdownMenuII7").css("display", "block");
		} else {
			$(".dropdownMenuII7").fadeOut(100);
			$(".dropdownMenuContainerII7").css("display", "none");
		}
	});


// МЕНЮ ТРЕТЬЕГО СЛАЙДА 

	$(".firstIII").hover(function () {


		var widthContainerIII1 = $(".dropdownMenuIII1").outerWidth()
		var heightContainerIII1 = $(".dropdownMenuIII1").outerHeight()
		var marginLeftIII1 = $(".dropdownMenuIII1").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuIII1").fadeIn(100);
		$(".dropdownMenuContainerIII1").css("display", "block");
		$(".dropdownMenuContainerIII1").css("width", (100 * widthContainerIII1 / widthWindow) + "vw");
		$(".dropdownMenuContainerIII1").css("height", (100 * heightContainerIII1 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerIII1").css("marginLeft", marginLeftIII1);


	});

	// $(".secondIII").hover(function () {
	// 	var widthContainerIII2 = $(".dropdownMenuIII2").outerWidth()
	// 	var heightContainerIII2 = $(".dropdownMenuIII2").outerHeight()
	// 	var marginLeftIII2 = $(".dropdownMenuIII2").css("marginLeft");
	// 	var widthWindow = $(window).width();
	// 	$(".dropdownMenuIII2").fadeIn(100);
	// 	$(".dropdownMenuContainerIII2").css("display", "block");
	// 	$(".dropdownMenuContainerIII2").css("width", (100 * widthContainerIII2 / widthWindow) + "vw");
	// 	$(".dropdownMenuContainerIII2").css("height", (100 * heightContainerIII2 / widthWindow) + 0.45 + "vw");
	// 	$(".dropdownMenuContainerIII2").css("marginLeft", marginLeftIII2);

	// });

	$(".thirdIII").hover(function () {
		var widthContainerIII3 = $(".dropdownMenuIII3").outerWidth()
		var heightContainerIII3 = $(".dropdownMenuIII3").outerHeight()
		var marginLeftIII3 = $(".dropdownMenuIII3").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuIII3").fadeIn(100);
		$(".dropdownMenuContainerIII3").css("display", "block");
		$(".dropdownMenuContainerIII3").css("width", (100 * widthContainerIII3 / widthWindow) + "vw");
		$(".dropdownMenuContainerIII3").css("height", (100 * heightContainerIII3 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerIII3").css("marginLeft", marginLeftIII3);

	});

	$(".fourthIII").hover(function () {
		var widthContainerIII4 = $(".dropdownMenuIII4").outerWidth()
		var heightContainerIII4 = $(".dropdownMenuIII4").outerHeight()
		var marginLeftIII4 = $(".dropdownMenuIII4").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuIII4").fadeIn(100);
		$(".dropdownMenuContainerIII4").css("display", "block");
		$(".dropdownMenuContainerIII4").css("width", (100 * widthContainerIII4 / widthWindow) + "vw");
		$(".dropdownMenuContainerIII4").css("height", (100 * heightContainerIII4 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerIII4").css("marginLeft", marginLeftIII4);

	});

	$(".fifthIII").hover(function () {
		var widthContainerIII5 = $(".dropdownMenuIII5").outerWidth()
		var heightContainerIII5 = $(".dropdownMenuIII5").outerHeight()
		var marginLeftIII5 = $(".dropdownMenuIII5").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuIII5").fadeIn(100);
		$(".dropdownMenuContainerIII5").css("display", "block");
		$(".dropdownMenuContainerIII5").css("width", (100 * widthContainerIII5 / widthWindow) + "vw");
		$(".dropdownMenuContainerIII5").css("height", (100 * heightContainerIII5 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerIII5").css("marginLeft", marginLeftIII5);

	});

	$(".sixthIII").hover(function () {
		var widthContainerIII6 = $(".dropdownMenuIII6").outerWidth()
		var heightContainerIII6 = $(".dropdownMenuIII6").outerHeight()
		var marginLeftIII6 = $(".dropdownMenuIII6").css("marginLeft");
		var widthWindow = $(window).width();
		$(".dropdownMenuIII6").fadeIn(100);
		$(".dropdownMenuContainerIII6").css("display", "block");
		$(".dropdownMenuContainerIII6").css("width", (100 * widthContainerIII6 / widthWindow) + "vw");
		$(".dropdownMenuContainerIII6").css("height", (100 * heightContainerIII6 / widthWindow) + 0.45 + "vw");
		$(".dropdownMenuContainerIII6").css("marginLeft", marginLeftIII6);

	});

	// $(".seventhIII").hover(function () {
	// 	var widthContainerIII7 = $(".dropdownMenuIII7").outerWidth()
	// 	var heightContainerIII7 = $(".dropdownMenuIII7").outerHeight()
	// 	var marginLeftIII7 = $(".dropdownMenuIII7").css("marginLeft");
	// 	var widthWindow = $(window).width();
	// 	$(".dropdownMenuIII7").fadeIn(100);
	// 	$(".dropdownMenuContainerIII7").css("display", "block");
	// 	$(".dropdownMenuContainerIII7").css("width", (100 * widthContainerIII7 / widthWindow) + "vw");
	// 	$(".dropdownMenuContainerIII7").css("height", (100 * heightContainerIII7 / widthWindow) + 0.45 + "vw");
	// 	$(".dropdownMenuContainerIII7").css("marginLeft", marginLeftIII7);
	//
	// });


	$(".firstIII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerIII1:hover').length != 0

		) {
			$(".dropdownMenuIII1").css("display", "block");

		} else {
			$(".dropdownMenuIII1").fadeOut(100);
			$(".dropdownMenuContainerIII1").css("display", "none");
		}
	});


	$(".secondIII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerIII2:hover').length != 0

		) {
			$(".dropdownMenuIII2").css("display", "block");

		} else {
			$(".dropdownMenuIII2").fadeOut(100);
			$(".dropdownMenuContainerIII2").css("display", "none");

		}

	});

	$(".thirdIII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerIII3:hover').length != 0

		) {
			$(".dropdownMenuIII3").css("display", "block");

		} else {
			$(".dropdownMenuIII3").fadeOut(100);
			$(".dropdownMenuContainerIII3").css("display", "none");

		}

	});

	$(".fourthIII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerIII4:hover').length != 0

		) {
			$(".dropdownMenuIII4").css("display", "block");

		} else {
			$(".dropdownMenuIII4").fadeOut(100);
			$(".dropdownMenuContainerIII4").css("display", "none");

		}

	});

	$(".fifthIII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerIII5:hover').length != 0

		) {
			$(".dropdownMenuIII5").css("display", "block");

		} else {
			$(".dropdownMenuIII5").fadeOut(100);
			$(".dropdownMenuContainerIII5").css("display", "none");

		}

	});

	$(".sixthIII").mouseleave(function () {

		if (

			$('.dropdownMenuContainerIII6:hover').length != 0

		) {
			$(".dropdownMenuIII6").css("display", "block");

		} else {
			$(".dropdownMenuIII6").fadeOut(100);
			$(".dropdownMenuContainerIII6").css("display", "none");

		}

	});

	$(".seventhIII").mouseleave(function () {
	
		if (
	
			$('.dropdownMenuContainerIII7:hover').length != 0
	
		) {
			$(".dropdownMenuIII7").css("display", "block");
	
		} else {
			$(".dropdownMenuIII7").fadeOut(100);
			$(".dropdownMenuContainerIII7").css("display", "none");
	
		}
	
	});


	$(".dropdownMenuContainerIII1").mouseleave(function () {
		if (
			$('.firstIII:hover').length != 0

		) {
			$(".dropdownMenuIII1").css("display", "block");
		} else {
			$(".dropdownMenuIII1").fadeOut(100);
			$(".dropdownMenuContainerIII1").css("display", "none");
		}
	});

	$(".dropdownMenuContainerIII2").mouseleave(function () {
		if (
			$('.secondIII:hover').length != 0

		) {
			$(".dropdownMenuIII2").css("display", "block");
		} else {
			$(".dropdownMenuIII2").fadeOut(100);
			$(".dropdownMenuContainerIII2").css("display", "none");
		}
	});

	$(".dropdownMenuContainerIII3").mouseleave(function () {
		if (
			$('.thirdIII:hover').length != 0

		) {
			$(".dropdownMenuIII3").css("display", "block");
		} else {
			$(".dropdownMenuIII3").fadeOut(100);
			$(".dropdownMenuContainerIII3").css("display", "none");
		}
	});

	$(".dropdownMenuContainerIII4").mouseleave(function () {
		if (
			$('.fourthIII:hover').length != 0

		) {
			$(".dropdownMenuIII4").css("display", "block");
		} else {
			$(".dropdownMenuIII4").fadeOut(100);
			$(".dropdownMenuContainerIII4").css("display", "none");
		}
	});

	$(".dropdownMenuContainerIII5").mouseleave(function () {
		if (
			$('.fifthIII:hover').length != 0

		) {
			$(".dropdownMenuIII5").css("display", "block");
		} else {
			$(".dropdownMenuIII5").fadeOut(100);
			$(".dropdownMenuContainerIII5").css("display", "none");
		}
	});

	$(".dropdownMenuContainerIII6").mouseleave(function () {
		if (
			$('.sixthIII:hover').length != 0

		) {
			$(".dropdownMenuIII6").css("display", "block");
		} else {
			$(".dropdownMenuIII6").fadeOut(100);
			$(".dropdownMenuContainerIII6").css("display", "none");
		}
	});

	$(".dropdownMenuContainerIII7").mouseleave(function () {
		if (
			$('.seventhIII:hover').length != 0
	
		) {
			$(".dropdownMenuIII7").css("display", "block");
		} else {
			$(".dropdownMenuIII7").fadeOut(100);
			$(".dropdownMenuContainerIII7").css("display", "none");
		}
	});


// $(".dropdownMenuContainer").mouseleave(function () {


// 	$(".dropdownMenu").fadeOut(100);
// 	$(".dropdownMenuContainer").css("display", "none");


// } );


});
