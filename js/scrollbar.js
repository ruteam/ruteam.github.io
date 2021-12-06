document.querySelectorAll('a.yakor').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		const href = this.getattribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const elementposition = scrollTarget.getBoundingClientRect().top;
		const offsetposition = elementposition;
		window.scrollBy({
			top: offsetposition,
			behavior: 'smooth'
		});
	});
});