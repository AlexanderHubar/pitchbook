$(document).ready(function () {
	$('.tabs-nav').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('#tab1').find('.tabs-body__item').removeClass('show').eq($(this).index()).addClass('show');
	});
});