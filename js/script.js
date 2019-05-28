// const tabsContainer = document.getElementById('tab1');

// const wrapperMenu = document.querySelector('.wrapper-menu');
// const mobileNav = document.querySelector('.navigation-mobile');
// wrapperMenu.addEventListener('click',() => {
// 	wrapperMenu.classList.toggle('open'); 
// 	mobileNav.classList.toggle('visible');
// });

// tabChange(tabsContainer);

$(document).ready(function () {
	$('.wrapper-menu').click(function () {
		$(this).toggleClass('open');
	});
});