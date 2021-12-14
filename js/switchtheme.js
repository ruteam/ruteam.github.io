const themeSwitchers = document.querySelectorAll('.changeTheme');

themeSwitchers.forEach(switcher => {
	switcher.addEventListener('click', function() {
		applyTheme(this.dataset.theme);
	});
});

function applyTheme(themeName) {
	let themeUrl = `css/theme-${themeName}.css`;
	alert(themeUrl);
}