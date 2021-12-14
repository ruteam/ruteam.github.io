const pushing = document.querySelector('.push__block')
document.querySelector('.push__link').addEventListener('click', function() {
	if (pushing.style.display == 'block') {
		pushing.style.display = 'none';
	}
	else if (pushing.style.display = 'none') {
		pushing.style.display = 'block';
	}
	document.addEventListener('click', function(e) {
		if ((e.target.className != 'push__block') && (e.target.className != 'push') && (e.target.className != 'push__b')) {
			pushing.style.display = 'none';
		}
	});
})


