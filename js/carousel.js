if (document.querySelector('.swipers')) {
	const swiper = new Swiper('.swipers', {
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 5500,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});
}

if (document.querySelector('.sliders')) {
	const sliderVar = new Swiper('.subslides', {
		slidesPerView:4,
	});
	const slider = new Swiper('.sliders', {
		thumbs: {
			swiper: sliderVar
		},
	});
}

