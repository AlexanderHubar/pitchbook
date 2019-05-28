const carousel = document.querySelector('#slider');

const slider = container => {
	const list = container.querySelector('.slides-list');
	const slides = container.querySelectorAll('.slides-list__item');
	const prevButton = container.querySelector('#prev');
	const nextButton = container.querySelector('#next');

	var width = 273 + 132; 
	var count = 3; 

	let position = 0;

	prevButton.onclick = () => {
		position = Math.min(position + width * count, 0)
		list.style.marginLeft = position + 'px';
	};

	nextButton.onclick = () => {
		position = Math.max(position - width * count, -width * (slides.length - count));
		list.style.marginLeft = position + 'px';
	};
}

slider(carousel);