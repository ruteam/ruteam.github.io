;(function() {
	let body = document.querySelector('body');

	body.addEventListener('click', function(e) {
		let target = e.target;
		console.log(target);
	})
})();