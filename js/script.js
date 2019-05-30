$(document).ready(function () {
	$('.wrapper-menu').click(function () {
		$(this).toggleClass('open');
		$('.navigation-mobile').toggleClass('visible');
	});
});