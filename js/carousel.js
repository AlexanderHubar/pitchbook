var carousel = document.querySelector('#slider');

function slider(container) {
	var list = container.querySelector('.slides-list');
	var slides = container.querySelectorAll('.slides-list__item');
	var prevButton = container.querySelector('#prev');
	var nextButton = container.querySelector('#next');

	var width = 273 + 132;
	var count = 3;

	var position = 0;

	prevButton.addEventListener('click', function() {
		position = Math.min(position + width * count, 0)
		list.style.marginLeft = position + 'px';
	}) 

	nextButton.addEventListener('click', function() {
		position = Math.max(position - width * count, -width * (slides.length - count));
		list.style.marginLeft = position + 'px';
	});

};

slider(carousel)