$(document).ready(function() {

// аккордеон начало
$(".accordion").click(function(){
	if($(".panel").css('display') == 'none')
	{
		$(".panel").slideDown(200);
	}
	else {
		$(".panel").slideUp(200);
	}
});  
// аккордеон конец

});
