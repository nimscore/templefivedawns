$(document).ready(function () {

	$('body,html').scrollTop(0);
	$("a.scroll-to").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top -50;
		$('body,html').animate({scrollTop: top}, 2500);
	});
	var hash = location.hash;
	if($(hash).length){
		var top = $(hash).offset().top -50;
		$('body,html').animate({scrollTop: top}, 2500);
	}

	// $('body,html').scrollTop(0);
	// $("a.scroll-to").on("click", function(e){
	// 	e.preventDefault();
	// 	var anchor = $(this).attr('href');
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor).offset().top - 60
	// 	}, 800);
	// });

// скролл вверх выбранного итема меню
	$(".select").click(function () {
		$("html,body").animate({
			scrollTop: 0
		}, 200);
	});
// скролл вверх выбранного итема меню

// фикс контейнера гайда от прыжка вверх при открытии поп-ап меню
// 	$(".mobHeaderDots").click(function () {
// 		$(".mobHeaderDots").css("display", "none");
// 		$(".mobHeaderDotsHide").css("display", "block");
// 		$(".container").css("marginTop", "11vw");
// 	});

// 	$(".mobHeaderDotsHide").click(function () {
// 		$(".mobHeaderDots").css("display", "block");
// 		$(".mobHeaderDotsHide").css("display", "none");
// 		$(".container").css("marginTop", "0%");
// 	});
// фикс контейнера гайда от прыжка вверх при открытии поп-ап меню

//открытие поп-ап меню на три точки
	$(".mobHeaderDots").click(function () {
		// фикс контейнера гайда от прыжка вверх при открытии поп-ап меню
		$(".mobHeaderDots").css("display", "none");
		$(".mobHeaderDotsHide").css("display", "block");
		$(".container").css("marginTop", "11vw");
		// фикс контейнера гайда от прыжка вверх при открытии поп-ап меню

		//фиксация на троеточие контейнера от прокрутки при открытом поп-ап меню
		$(".container").addClass("fixed");
		//фиксация на троеточие контейнера от прокрутки при открытом поп-ап меню

		$(".popup").animate({
			width: "70vw"
		}, 150);
		$(".popupBackground").animate({
			width: "100%"
		}, 150);
		$(".popup-menu").fadeIn(150);
		$("#header-mob").css("display", "none");
		$("#popup-header-mob").css("display", "block");
	});
//открытие поп-ап меню на три точки

//скрытие поп-ап меню на три точки и на бэкграунд поп-ап меню
	$(".mobHeaderDotsHide").click(function () {
		// фикс контейнера гайда от прыжка вверх при открытии поп-ап меню
		$(".mobHeaderDots").css("display", "block");
		$(".mobHeaderDotsHide").css("display", "none");
		$(".container").css("marginTop", "0%");
		// фикс контейнера гайда от прыжка вверх при открытии поп-ап меню

		//фиксация на троеточие контейнера от прокрутки при открытом поп-ап меню
		$(".container").removeClass("fixed");
		//фиксация на троеточие контейнера от прокрутки при открытом поп-ап меню

		$(".popup").animate({
			width: "0%"
		}, 150);
		$(".popupBackground").animate({
			width: "0%"
		}, 150);
		$(".popup-menu").fadeOut(150);
		$("#header-mob").css("display", "block");
		$("#popup-header-mob").css("display", "none");
	});

	$(".popupBackground").click(function () {
		$(".mobHeaderDots").css("display", "block");
		$(".mobHeaderDotsHide").css("display", "none");
		$(".container").removeClass("fixed");
		$(".container").css("marginTop", "0%");

		$(".popup").animate({
			width: "0%"
		}, 150);
		$(".popupBackground").animate({
			width: "0%"
		}, 150);
		$(".popup-menu").fadeOut(150);
		$("#header-mob").css("display", "block");
		$("#popup-header-mob").css("display", "none");
	});
//скрытие поп-ап меню на три точки и на бэкграунд поп-ап меню

//фиксация на троеточие контейнера от прокрутки при открытом поп-ап меню
// 	$(".mobHeaderDots").click(function () {
// 		$(".container").addClass("fixed");
// 	});

	// $(".mobHeaderDotsHide").click(function () {
	// 	$(".container").removeClass("fixed");
	// });
//фиксация контейнера на троеточие от прокрутки при открытом поп-ап меню

//краски бэкграунда в десктоп хэдере
	$(".BM").hover(function () {
		if ($(".BMbrush").css('display') === 'none') {
			$(".BMbrush").fadeIn(100);
			$(".BM").mouseleave(function () {
				$(".BMbrush").fadeOut(100);
			});
		}
	});

	$(".WW").hover(function () {
		if ($(".WWbrush").css('display') === 'none') {
			$(".WWbrush").fadeIn(100);
			$(".WW").mouseleave(function () {
				$(".WWbrush").fadeOut(100);
			});
		}
	});

	$(".MW").hover(function () {
		if ($(".MWbrush").css('display') === 'none') {
			$(".MWbrush").fadeIn(100);
			$(".MW").mouseleave(function () {
				$(".MWbrush").fadeOut(100);
			});
		}
	});

	$(".Support").hover(function () {
		if ($(".Supportbrush").css('display') === 'none') {
			$(".Supportbrush").fadeIn(100);
			$(".Support").mouseleave(function () {
				$(".Supportbrush").fadeOut(100);
			});
		}
	});

	// 	$(".BM").hover(function () {
	// 		$(".BMbrush").fadeIn(100);
	// 	});

	// $(".BM").mouseleave(function () {
	// 	$(".BMbrush").fadeOut(100);
	// });

	// $(".WW").hover(function () {
	// 	$(".WWbrush").fadeIn(100);
	// });
	//
	// $(".WW").mouseleave(function () {
	// 	$(".WWbrush").fadeOut(100);
	// });
	//
	// $(".MW").hover(function () {
	// 	$(".MWbrush").fadeIn(100);
	// });
	//
	// $(".MW").mouseleave(function () {
	// 	$(".MWbrush").fadeOut(100);
	// });
	//
	// $(".Support").hover(function () {
	// 	$(".Supportbrush").fadeIn(100);
	// });
	//
	// $(".Support").mouseleave(function () {
	// 	$(".Supportbrush").fadeOut(100);
	// });
//краски бэкграунда в десктоп хэдере

});

//копирование текста в буфер
$('#copy1').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text1').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy2').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text2').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy3').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text3').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy4').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text4').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy5').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text5').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy6').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text6').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy7').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text7').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy8').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text8').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy9').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text9').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy10').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text10').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy11').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text11').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy12').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text12').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy13').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text13').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy14').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text14').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy15').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text15').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});

$('#copy16').click(function() {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#copy-text16').text()).select();
  document.execCommand("copy");
  $temp.remove();
  // $(this).text('Готово!');
});
//копирование текста в буфер