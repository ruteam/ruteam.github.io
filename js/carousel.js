let offset = 0;
const slider = document.querySelector('.images');


document.querySelector('.next').addEventListener('click', getNext);
document.querySelector('.prev').addEventListener('click', getPrev);

function getNext() {
	offset += 1074;
	if (offset > 2148) {
		offset = 0;
	}
	slider.style.left = -offset + 'px';
}

setInterval(getNext, 6000);

function getPrev() {
	offset -= 1074;
	if (offset < 0) {
		offset = 2148;
	}
	slider.style.left = -offset + 'px';
}

