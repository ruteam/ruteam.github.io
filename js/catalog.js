'use strict';

// Модуль каталога
let jirov = document.getElementById("pages");
let pages = jirov.getAttribute("data-pages");
let catalog = (function($) {

    // Инициализация модуля
    function init() {
        _render();
    }

    // Рендерим каталог
    function _render() {
        let template = _.template($('#catalog-template').html()),
            $goods = $('#goods');
		if (pages === "aggressor") {
			$.getJSON('../../../../data/aggressor.json', function(data) {
            	$goods.html(template({goods: data}));
        	});
		} else if (pages === "blaster") {
			$.getJSON('../../../../data/blaster.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "diamondjig") {
			$.getJSON('../../../../data/diamondjig.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "elitejig") {
			$.getJSON('../../../../data/elitejig.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "elitejign") {
			$.getJSON('../../../../data/elitejign.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "elitemj") {
			$.getJSON('../../../../data/elitemj.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "anira") {
			$.getJSON('../../../../data/anira.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "basara") {
			$.getJSON('../../../../data/basar.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "blacksense") {
			$.getJSON('../../../../data/blacksense.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "onesensoric") {
			$.getJSON('../../../../data/onesensoric.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "progresschub") {
			$.getJSON('../../../../data/progresschub.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "progressjig") {
			$.getJSON('../../../../data/progressjig.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "progressjigv2") {
			$.getJSON('../../../../../data/progressjigv2.json', function(data) {
				$goods.html(template({goods: data}));
			});
		} else if (pages === "progressmj7") {
			$.getJSON('../../../../data/progressmj7.json', function(data) {
				$goods.html(template({goods: data}));
			});
		}
    }


 	// Экспортируем наружу
 	return {
		init: init
	}

})(jQuery);