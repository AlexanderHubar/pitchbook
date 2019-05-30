// var carousel = document.querySelector('.slider');

$(document).ready(function () {

	var width = $('body').width();

		var slides = [];
		var min, max;
		var slide;

		if (width < 880) {
			slide = 0;

			$('.slider.slides-list__item').each(function () {
				slides.push(this);
				$(this).css('margin-right', '4.86em');
			})

			slides[0].classList.add('visible');

			$('.slider#next').on('click', function () {
				slide++;
				$('.slider.prev').prop('disabled', false);
				$('.slides-list__item').each(function (index) {
					slides[index].classList.remove('visible');
					if (slide > slides.length - 1) {
						slide = 0;
					}

					if(index === slide) {
						this.classList.add('visible');
					}
				})
			})
			$('.prev').on('click', function () {
				slide--;
					$('.next').prop('disabled', false);
					$('.slides-list__item').each(function (index) {
						slides[index].classList.remove('visible');
						if (slide < 0) {
							slide = slides.length - 1;
						}

					if(index === slide) {
						this.classList.add('visible');
					}
				})
			})
		} else if(width >= 880 && width <= 1235) {
			min = 0;
			max = 1;
			$('.slides-list__item').each(function () {
				slides.push(this);
				$(this).css('margin-right', '4.86em');
			})
			for (var i = 0; i < 2; i++) {
				slides[i].classList.add('visible');
			}

			$('.next').on('click', function () {
				$('.prev').prop('disabled', false);
				$('.slides-list__item').each(function (index) {
					if (!$('.slides-list__item:last-child').hasClass('visible')) {
						if (min === index) {
							this.classList.remove('visible');
						}
						if (max + 1 === index) {
							this.classList.add('visible');
						}
					} else {
						$('.next').prop('disabled', true);
					}
				})
				if (max !== slides.length - 1) {
					min++;
					max++;
				}
			});
	
			$('.prev').on('click', function () {
				console.log('click')
				$('.slides-list__item').each(function (index) {
					$('.next').prop('disabled', false);
					if (!$('.slides-list__item:nth-child(1)').hasClass('visible')) {
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
						$('.prev').prop('disabled', true);
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
			$('.slides-list__item').each(function () {
				slides.push(this);
			})
			for (var i = 0; i < 3; i++) {
				slides[i].classList.add('visible');
			}

			$('.next').on('click', function () {
				$('.prev').prop('disabled', false);
				$('.slides-list__item').each(function (index) {
					if (!$('.slides-list__item:last-child').hasClass('visible')) {
						if (min === index) {
							this.classList.remove('visible');
						}
						if (max + 1 === index) {
							this.classList.add('visible');
						}
					} else {
						$('.next').prop('disabled', true);
					}
				})
				if (max !== slides.length - 1) {
					min++;
					max++;
				}
			});
	
			$('.prev').on('click', function () {
				console.log('click')
				$('.slides-list__item').each(function (index) {
					$('.next').prop('disabled', false);
					if (!$('.slides-list__item:nth-child(1)').hasClass('visible')) {
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
						$('.prev').prop('disabled', true);
					}
				})
				if (min !== 0) {
					min--;
					max--;
				}
			})
		}
	}
)