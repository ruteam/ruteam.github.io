'use strict';

// Модуль приложения
var app = (function($) {

    var $body = $('body'),
        page = $body.data('page'),
        options = {
            elAddToCart: '.js-add-to-cart',
            attrId: 'data-id',
            attrName: 'data-name',
            attrPrice: 'data-price',
            attrDelta: 'data-delta',
        };

    function init() {
		if (page === 'catalog') {
            catalog.init();
        }
    }

    return {
        init: init
    }

})(jQuery);

jQuery(document).ready(app.init);

if (document.querySelector(".quantity-product")) {
	$(document).ready(function() {
		$('body').on('click', '.number-minus, .number-plus', function(){
			var $row = $(this).closest('.number');
			var $input = $row.find('.number-text');
			var step = $row.data('step');
			var val = parseFloat($input.val());
			if ($(this).hasClass('number-minus')) {
				val -= step;
			} else {
				val += step;
			}
			$input.val(val);
			$input.change();
			return false;
		});

		$('body').on('change', '.number-text', function(){
			var $input = $(this);
			var $row = $input.closest('.number');
			var step = $row.data('step');
			var min = parseInt($row.data('min'));
			var max = parseInt($row.data('max'));
			var val = parseFloat($input.val());
			if (isNaN(val)) {
				val = step;
			} else if (min && val < min) {
				val = min;
			} else if (max && val > max) {
				val = max;
			}
			$input.val(val);
		});
	});
};

