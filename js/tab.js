const tabChange = container => {
	const nav = container.querySelectorAll('.tabs-nav__item');
	const tabs = container.querySelectorAll('.tabs-body__item');

	for(let i = 0; i < nav.length; i++) {
		nav[i].addEventListener('click', element => {
			nav.forEach(element => {
				element.className = 'tabs-nav__item';
			});

			tabs.forEach(element => {
				element.className = 'tabs-body__item';
			});

			element.target.className = 'tabs-nav__item active';
			tabs[i].className = 'tabs-body__item show';
		});
	}
}
