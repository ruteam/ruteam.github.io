const titleNot = document.querySelector('.title__notactive');
const titleActive = document.querySelector('.title__active');
const texts = document.querySelector('.tovar__description-texts');
const har = document.querySelector('.tovar__description-har');
titleNot.addEventListener('click', function() {
	titleActive.classList.remove('title__active');
	titleActive.classList.add('title__notactive');
	titleNot.classList.add('title__active');
	texts.style.display='none';
	har.style.display='block';
})

titleActive.addEventListener('click', function() {
	titleNot.classList.remove('title__active');
	titleNot.classList.add('title__notactive');
	titleActive.classList.add('title__active');
	har.style.display='none';
	texts.style.display='block';
})
