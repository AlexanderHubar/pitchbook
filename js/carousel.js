$(document).ready(function () {

	$.fn.slider = function () {
		var width = $('body').width();

		var slides = [];
		var min, max;
		var slide;
		var context = this;

		if (width < 880) {
			slide = 0;

			$('.slides-list__item', this).each(function () {
				slides.push(this);
			})

			slides[0].classList.add('visible');

			$('.next', this).on('click', function () {
				slide++;
				$('.prev', context).prop('disabled', false);
				$('.slides-list__item', context).each(function (index) {
					slides[index].classList.remove('visible');
					if (slide > slides.length - 1) {
						slide = 0;
					}

					if (index === slide) {
						this.classList.add('visible');
					}
				})
			})
			$('.prev', this).on('click', function () {
				slide--;
				$('.next', context).prop('disabled', false);
				$('.slides-list__item', context).each(function (index) {
					slides[index].classList.remove('visible');
					if (slide < 0) {
						slide = slides.length - 1;
					}

					if (index === slide) {
						this.classList.add('visible');
					}
				})
			})
		} else if (width >= 880 && width <= 1235) {
			min = 0;
			max = 1;
			$('.slides-list__item', this).each(function () {
				slides.push(this);
				$(this).css('margin-right', '4.86em');
			})
			for (var i = 0; i < 2; i++) {
				slides[i].classList.add('visible');
			}

			$('.next', this).on('click', function () {
				$('.prev', context).prop('disabled', false);
				$('.slides-list__item', context).each(function (index) {
					if (!$('.slides-list__item:last-child', context).hasClass('visible')) {
						if (min === index) {
							this.classList.remove('visible');
						}
						if (max + 1 === index) {
							this.classList.add('visible');
						}
					} else {
						$('.next', context).prop('disabled', true);
					}
				})
				if (max !== slides.length - 1) {
					min++;
					max++;
				}
			});

			$('.prev', this).on('click', function () {
				console.log('click')
				$('.slides-list__item', context).each(function (index) {
					$('.next', context).prop('disabled', false);
					if (!$('.slides-list__item:nth-child(1)', context).hasClass('visible')) {
						if (min - 1 === index) {
							this.classList.add('visible');
						}
						if (max === index) {
							this.classList.remove('visible');
						}
					} else {
						if (max === index) {
							this.classList.remove('visible');
						}
						$('.prev', context).prop('disabled', true);
					}
				})
				if (min !== 0) {
					min--;
					max--;
				}
			})
		} else {
			min = 0;
			max = 2;
			$('.slides-list__item', this).each(function () {
				slides.push(this);
			})
			for (var i = 0; i < 3; i++) {
				slides[i].classList.add('visible');
			}

			$('.next', this).on('click', function () {
				$('.prev', context).prop('disabled', false);
				$('.slides-list__item', context).each(function (index) {
					if (!$('.slides-list__item:last-child', context).hasClass('visible')) {
						if (min === index) {
							this.classList.remove('visible');
						}
						if (max + 1 === index) {
							this.classList.add('visible');
						}
					} else {
						$('.next', context).prop('disabled', true);
					}
				})
				if (max !== slides.length - 1) {
					min++;
					max++;
				}
			});

			$('.prev', this).on('click', function () {
				console.log('click')
				$('.slides-list__item', context).each(function (index) {
					$('.next', context).prop('disabled', false);
					if (!$('.slides-list__item:nth-child(1)', context).hasClass('visible')) {
						if (min - 1 === index) {
							this.classList.add('visible');
						}
						if (max === index) {
							this.classList.remove('visible');
						}
					} else {
						if (max === index) {
							this.classList.remove('visible');
						}
						$('.prev', context).prop('disabled', true);
					}
				})
				if (min !== 0) {
					min--;
					max--;
				}
			})
		}
	};

	$('#slider1').slider();
})