;(function() {
	const cartDOMElement = document.querySelector('.js-cart');

	const cart = JSON.parse(localStorage.getItem('cart')) || {};
	const cartItemsCounterDOMElement = document.querySelector('.js-cart-total-count-items');
	const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
	const cartTotalPriceInputDOMElement = document.querySelector('.order-checkout__btn');
	const cartWrapperDOMElement = document.querySelector('.js-cart');
	const checkoutContentDOMElement = document.querySelector('.checkout__content');

	const renderCartItem = ({ id, name, type, price, link, img, quantity }) => {
		const cartItemDOMElement = document.createElement('div');
		const cartItemTemplate =`
		<div class="order-checkout__items">
			<div class="order-checkout__item item-order">
				<div class="item-order__content">
					<a href="${link}" class="item-order__img">
						<img src="${img}" alt="${name}">
					</a>
					<div class="item-order__body">
						<a href="${link}" class="item-order__title">${type}<span> ${name}</span></a>
						<div class="item-order__price"><span class="rub-price js-cart-item-price">${numberWithSpaces(price)}</span> ₽</div>
					</div>
				</div>
				<div class="item-order__quantity">
					<div class="number-cart js-cart-item-quantity" data-step="1" data-min="1" data-max="99">
						<input class="number-text-cart" type="text" name="count" value="${quantity}">
						<a href="#" class="number-minus-cart js-count-minus">−</a>
						<a href="#" class="number-plus-cart js-count-plus">+</a>
					</div>
				</div>
				<div class="item-order__total">
					<div class="item-order__label">Всего:</div>
					<div class="item-order__price"><span class="rub-total">${numberWithSpaces(price * quantity)}</span> ₽</div>
				</div>
				<div class="cl-btn-2">
					<div class="js-remove-cart">
						<div class="leftright"></div>
						<div class="rightleft"></div>
					</div>
				</div>
			</div>
		</div>
		`

		cartItemDOMElement.innerHTML = cartItemTemplate;
		cartItemDOMElement.setAttribute('data-id', id);
		cartItemDOMElement.classList.add('js-cart-item');
		if (document.querySelector('.js-cart')) {
			cartDOMElement.prepend(cartItemDOMElement);
		}
	};

	const saveCart = () => {
		localStorage.setItem('cart', JSON.stringify(cart));
	};

	const updateCartTotalPrice = () => {
	 	const totalPrice = Object.keys(cart).reduce((acc, id) => {
			const { quantity, price } = cart[id];
			return acc + price * quantity;
		}, 0);

		if (cartTotalPriceDOMElement) {
			cartTotalPriceDOMElement.textContent = numberWithSpaces(totalPrice);
			cartTotalPriceInputDOMElement.setAttribute('data-totalprice', totalPrice);
		};

		return totalPrice;
	};

	const updateCartTotalItemsCounter = () => {
		const totalQuantity = Object.keys(cart).reduce((acc, id) => {
		  const { quantity } = cart[id];
		  return acc + quantity;
		}, 0);

		if (cartItemsCounterDOMElement) {
		  cartItemsCounterDOMElement.textContent = totalQuantity;

		}

		return totalQuantity;
	  };

	const updateCart = () => {
		const totalQuantity = updateCartTotalItemsCounter();
		updateCartTotalPrice();
		saveCart();


			if (totalQuantity === 0 && document.querySelector('.js-cart') && document.querySelector('.checkout__content')) {
				cartWrapperDOMElement.classList.add('is-empty');
				checkoutContentDOMElement.classList.remove('cart-empty');
			} else if (totalQuantity != 0 && document.querySelector('.js-cart') && document.querySelector('.checkout__content')){
				cartWrapperDOMElement.classList.remove('is-empty');
				checkoutContentDOMElement.classList.add('cart-empty');
			}
	};

	const deleteCartItem = (id) => {
		const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
		cartDOMElement.removeChild(cartItemDOMElement);

		delete cart[id];
		updateCart();
	};

	const addCartItem = (data) => {
		const {id} = data;
		document.querySelector('.js-btn-add-to-cart').value = "В корзине";

		if (cart[id]) {
			plusQuantity(id);
			return;
		}

		cart[id] = data;

		renderCartItem(data);
		updateCart();
	};
	const updateQuantity = (id, quantity) => {
		const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
		const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.number-text-cart');
		const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.rub-total');
		cart[id].quantity = quantity;
		if (cartItemQuantityDOMElement) {
			cartItemQuantityDOMElement.value = quantity;
		};
		if (cartItemPriceDOMElement) {
			cartItemPriceDOMElement.textContent = numberWithSpaces(quantity * cart[id].price);
		};

		updateCart();
	};

	const plusQuantity = (id) => {
		const newQuantity = cart[id].quantity + 1;
		updateQuantity(id, newQuantity);
	};

	const minusQuantity = (id) => {
		const newQuantity = cart[id].quantity - 1;
		if (newQuantity >= 1) {
			updateQuantity(id, newQuantity);
		};
	};

	const getProductData = (productDOMElement) => {
		const id = productDOMElement.getAttribute('data-id');
		const name = productDOMElement.getAttribute('data-name');
		const type = productDOMElement.getAttribute('data-type');
		const price = productDOMElement.getAttribute('data-price');
		const link = productDOMElement.getAttribute('data-link');
		const img = productDOMElement.getAttribute('data-img');

		const quantity = 1;

		return { id, name, type, price, link, img, quantity};
	};

	const renderCart = () => {
		const ids = Object.keys(cart);
		ids.forEach((id) => renderCartItem(cart[id]));
	};

	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	const cartInit = () => {
		renderCart();
		updateCart();
		document.querySelector('body').addEventListener('click', (e) => {
			const target = e.target;

			if (target.classList.contains('js-btn-add-to-cart')) {
				e.preventDefault();
				const productDOMElement = target.closest('.tovar-btn');
				const data = getProductData(productDOMElement);
				addCartItem(data);
			}
			if (target.classList.contains('js-remove-cart')) {
				e.preventDefault();
				const cartItemDOMElement = target.closest('.js-cart-item');
				const productID = cartItemDOMElement.getAttribute('data-id');
				deleteCartItem(productID);
			}
			if (target.classList.contains('js-count-plus')) {
				e.preventDefault();
				const cartItemDOMElement = target.closest('.js-cart-item');
				const productID = cartItemDOMElement.getAttribute('data-id');
				plusQuantity(productID);
			}
			if (target.classList.contains('js-count-minus')) {
				e.preventDefault();
				const cartItemDOMElement = target.closest('.js-cart-item');
				const productID = cartItemDOMElement.getAttribute('data-id');
				minusQuantity(productID);
			}
		});
	};

	cartInit();
})();

if (document.querySelector('.tovar__item-text')) {
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
}