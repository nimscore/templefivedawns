$(document).ready(function() {


	var menu = $(".sticky-nav-bar");
	$(window).scroll(function() {
		var top = $(this).scrollTop();
		if ( top > $(".acnhor-nav-bar").outerHeight() ) {
			$(".sticky-nav-bar").addClass("scroll-sticky-bar-bg");
		} else if ( top < $(".acnhor-nav-bar").outerHeight() ) {
			$(".sticky-nav-bar").removeClass("scroll-sticky-bar-bg");
		}
	});

	//ТАБЫ СТАТЫ
	$(".btn-stat-1").click(function(){
		$(".tab-stat-1").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-1 p").addClass("select-tab");
		$(".btn-stat-2 p").removeClass("select-tab");
		$(".btn-stat-3 p").removeClass("select-tab");
		$(".btn-stat-4 p").removeClass("select-tab");
		$(".btn-stat-5 p").removeClass("select-tab");
	});

	$(".btn-stat-2").click(function(){
		$(".tab-stat-2").fadeIn (600);
		$(".tab-stat-1").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-2 p").addClass("select-tab");
		$(".btn-stat-1 p").removeClass("select-tab");
		$(".btn-stat-3 p").removeClass("select-tab");
		$(".btn-stat-4 p").removeClass("select-tab");
		$(".btn-stat-5 p").removeClass("select-tab");
	});

	$(".btn-stat-3").click(function(){
		$(".tab-stat-3").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-1").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-3 p").addClass("select-tab");
		$(".btn-stat-2 p").removeClass("select-tab");
		$(".btn-stat-1 p").removeClass("select-tab");
		$(".btn-stat-4 p").removeClass("select-tab");
		$(".btn-stat-5 p").removeClass("select-tab");
	});

	$(".btn-stat-4").click(function(){
		$(".tab-stat-4").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-1").fadeOut (0);
		$(".tab-stat-5").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-4 p").addClass("select-tab");
		$(".btn-stat-2 p").removeClass("select-tab");
		$(".btn-stat-3 p").removeClass("select-tab");
		$(".btn-stat-1 p").removeClass("select-tab");
		$(".btn-stat-5 p").removeClass("select-tab");
	});

	$(".btn-stat-5").click(function(){
		$(".tab-stat-5").fadeIn (600);
		$(".tab-stat-2").fadeOut (0);
		$(".tab-stat-3").fadeOut (0);
		$(".tab-stat-4").fadeOut (0);
		$(".tab-stat-1").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-stat-5 p").addClass("select-tab");
		$(".btn-stat-2 p").removeClass("select-tab");
		$(".btn-stat-3 p").removeClass("select-tab");
		$(".btn-stat-4 p").removeClass("select-tab");
		$(".btn-stat-1 p").removeClass("select-tab");
	});
	//ТАБЫ СТАТЫ

	//ТАБ WTF1
	$(".btn-wtf1-1").click(function(){
		if ($(".tab-wtf1-1").css('display') === 'none') {
			$(".tab-wtf1-1").slideDown(200);
			$(".tab-wtf2-1").slideUp(200);
		} else {
			$(".tab-wtf1-1").slideUp(200);
		}
	});
//ТАБ WTF1

//ТАБ WTF2
	$(".btn-wtf2-1").click(function(){
		if ($(".tab-wtf2-1").css('display') === 'none') {
			$(".tab-wtf2-1").slideDown(200);
			$(".tab-wtf1-1").slideUp(200);
		} else {
			$(".tab-wtf2-1").slideUp(200);
		}
	});
//ТАБ WTF2

//ТАБЫ ЛЕГИ
	$(".btn-leg-1").click(function(){
		$(".tab-leg-1").fadeIn (600);
		$(".tab-leg-2").fadeOut (0);
		$(".tab-leg-3").fadeOut (0);
		$(".tab-leg-4").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-leg-1").addClass("select-bg-leg");
		$(".btn-leg-2").removeClass("select-bg-leg");
		$(".btn-leg-3").removeClass("select-bg-leg");
		$(".btn-leg-4").removeClass("select-bg-leg");
	});

	$(".btn-leg-2").click(function(){
		$(".tab-leg-2").fadeIn (600);
		$(".tab-leg-1").fadeOut (0);
		$(".tab-leg-3").fadeOut (0);
		$(".tab-leg-4").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-leg-2").addClass("select-bg-leg");
		$(".btn-leg-1").removeClass("select-bg-leg");
		$(".btn-leg-3").removeClass("select-bg-leg");
		$(".btn-leg-4").removeClass("select-bg-leg");
	});

	$(".btn-leg-3").click(function(){
		$(".tab-leg-3").fadeIn (600);
		$(".tab-leg-2").fadeOut (0);
		$(".tab-leg-1").fadeOut (0);
		$(".tab-leg-4").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-leg-3").addClass("select-bg-leg");
		$(".btn-leg-2").removeClass("select-bg-leg");
		$(".btn-leg-1").removeClass("select-bg-leg");
		$(".btn-leg-4").removeClass("select-bg-leg");
	});

	$(".btn-leg-4").click(function(){
		$(".tab-leg-4").fadeIn (600);
		$(".tab-leg-2").fadeOut (0);
		$(".tab-leg-3").fadeOut (0);
		$(".tab-leg-1").fadeOut (0);
		// $(".tab-l").attr('color', '#00ff99');
		// $(".tab-r").attr('color', '#9d9063');
		$(".btn-leg-4").addClass("select-bg-leg");
		$(".btn-leg-2").removeClass("select-bg-leg");
		$(".btn-leg-3").removeClass("select-bg-leg");
		$(".btn-leg-1").removeClass("select-bg-leg");
	});
	//ТАБЫ ЛЕГИ

	//ТАБЫ РАСХОДНИКИ
	$(".btn-rashod-1").click(function(){
		$(".tab-rashod-1").fadeIn (600);
		$(".tab-rashod-2").fadeOut (0);
		$(".tab-rashod-3").fadeOut (0);
		$(".btn-rashod-1").addClass("select-bg-leg");
		$(".btn-rashod-2").removeClass("select-bg-leg");
		$(".btn-rashod-3").removeClass("select-bg-leg");
	});

	$(".btn-rashod-2").click(function(){
		$(".tab-rashod-2").fadeIn (600);
		$(".tab-rashod-1").fadeOut (0);
		$(".tab-rashod-3").fadeOut (0);
		$(".btn-rashod-2").addClass("select-bg-leg");
		$(".btn-rashod-1").removeClass("select-bg-leg");
		$(".btn-rashod-3").removeClass("select-bg-leg");
	});

	$(".btn-rashod-3").click(function(){
		$(".tab-rashod-3").fadeIn (600);
		$(".tab-rashod-2").fadeOut (0);
		$(".tab-rashod-1").fadeOut (0);
		$(".btn-rashod-3").addClass("select-bg-leg");
		$(".btn-rashod-2").removeClass("select-bg-leg");
		$(".btn-rashod-1").removeClass("select-bg-leg");
	});
	//ТАБЫ РАСХОДНИКИ

	//ТАБЫ РАСЫ
	$(".btn-race-1").click(function(){
		$(".tab-race-1").fadeIn (600);
		$(".tab-race-2").fadeOut (0);
		$(".tab-race-3").fadeOut (0);
		$(".btn-race-1").addClass("select-bg-leg");
		$(".btn-race-2").removeClass("select-bg-leg");
		$(".btn-race-3").removeClass("select-bg-leg");
	});

	$(".btn-race-2").click(function(){
		$(".tab-race-2").fadeIn (600);
		$(".tab-race-1").fadeOut (0);
		$(".tab-race-3").fadeOut (0);
		$(".btn-race-2").addClass("select-bg-leg");
		$(".btn-race-1").removeClass("select-bg-leg");
		$(".btn-race-3").removeClass("select-bg-leg");
	});

	$(".btn-race-3").click(function(){
		$(".tab-race-3").fadeIn (600);
		$(".tab-race-2").fadeOut (0);
		$(".tab-race-1").fadeOut (0);
		$(".btn-race-3").addClass("select-bg-leg");
		$(".btn-race-2").removeClass("select-bg-leg");
		$(".btn-race-1").removeClass("select-bg-leg");
	});

	// ВТОРАЯ ВКЛАДКА
	$(".btn-race2-1").click(function(){
		$(".tab-race2-1").fadeIn (600);
		$(".tab-race2-2").fadeOut (0);
		$(".tab-race2-3").fadeOut (0);
		$(".btn-race2-1").addClass("select-bg-leg");
		$(".btn-race2-2").removeClass("select-bg-leg");
		$(".btn-race2-3").removeClass("select-bg-leg");
	});

	$(".btn-race2-2").click(function(){
		$(".tab-race2-2").fadeIn (600);
		$(".tab-race2-1").fadeOut (0);
		$(".tab-race2-3").fadeOut (0);
		$(".btn-race2-2").addClass("select-bg-leg");
		$(".btn-race2-1").removeClass("select-bg-leg");
		$(".btn-race2-3").removeClass("select-bg-leg");
	});

	$(".btn-race2-3").click(function(){
		$(".tab-race2-3").fadeIn (600);
		$(".tab-race2-2").fadeOut (0);
		$(".tab-race2-1").fadeOut (0);
		$(".btn-race2-3").addClass("select-bg-leg");
		$(".btn-race2-2").removeClass("select-bg-leg");
		$(".btn-race2-1").removeClass("select-bg-leg");
	});
	//ТАБЫ РАСЫ


	});