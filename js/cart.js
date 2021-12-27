;(function() {
	const cartDOMElement = document.querySelector('.js-cart');
	const quantityDOMElement = document.querySelector('.js-cart-item-quantity12');

	const cart = JSON.parse(localStorage.getItem('cart')) || {};
	const cartItemsCounterDOMElement = document.querySelector('.js-cart-total-count-items');
	const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
	const cartTotalPriceInputDOMElement = document.querySelector('.js-cart-total-price-input');
	if (document.querySelector('.js-cart')) {
		const cartWrapperDOMElement = document.querySelector('.js-cart');
	}

	const renderQuantityItem = ({ id, quantity }) => {
		const quantityItemDOMElement = document.createElement('div');
		const quantityItemTemplate =`
			<input class="number-text12" type="text" name="count" value="${quantity}">
			<a href="#" class="number-minus js-count-minus">−</a>
			<a href="#" class="number-plus js-count-plus">+</a>`

			quantityItemDOMElement.innerHTML = quantityItemTemplate;
			quantityItemDOMElement.setAttribute('data-id', id);
			quantityItemDOMElement.classList.add('js-cart-item');
			if (document.querySelector('.js-cart-item-quantity12')) {
				quantityDOMElement.appendChild(quantityItemDOMElement);
			};
	};

	const renderCartItem = ({ id, name, price, link, img, quantity }) => {
		const cartItemDOMElement = document.createElement('div');
		const cartItemTemplate =`
		<div class="order-checkout__items">
			<div class="order-checkout__item item-order">
				<div class="item-order__content">
					<a href="${link}" class="item-order__img">
						<img src="${img}" alt="${name}">
					</a>
					<div class="item-order__body">
						<a href="${link}" class="item-order__title"><span>${name}</span></a>
						<div class="item-order__price"><span class="rub-price js-cart-item-price">${price}</span> ₽</div>
					</div>
				</div>
				<div class="item-order__quantity">
					<div class="number js-cart-item-quantity" data-step="1" data-min="1" data-max="99">
						<input class="number-text" type="text" name="count" value="${quantity}">
						<a href="#" class="number-minus js-count-minus">−</a>
						<a href="#" class="number-plus js-count-plus">+</a>
					</div>
				</div>
				<div class="item-order__total">
					<div class="item-order__label">Всего:</div>
					<div class="item-order__price"><span class="rub-total">${price * quantity}</span> ₽</div>
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
		};

		return totalPrice;
	};

	const updateCart = () => {
		const totalPrice = updateCartTotalPrice();
		updateCartTotalPrice();
		saveCart();
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
		renderQuantityItem(data);
		updateCart();
	};
	const updateQuantity = (id, quantity) => {
		const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
		const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.number-text');
		const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.rub-total');
		cart[id].quantity = quantity;
		if (cartItemQuantityDOMElement) {
			cartItemQuantityDOMElement.value = quantity;
		};
		if (cartItemPriceDOMElement) {
			cartItemPriceDOMElement.textContent = numberWithSpaces(quantity * cart[id].price);
		};


		const quantityItemQuantityDOMElement = document.querySelector('.number-text12');
		cart[id].quantity = quantity;
		if (quantityItemQuantityDOMElement) {
			quantityItemQuantityDOMElement.value = quantity;

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
		const price = productDOMElement.getAttribute('data-price');
		const link = productDOMElement.getAttribute('data-link');
		const img = productDOMElement.getAttribute('data-img');

		const quantity = 1;

		return { id, name, price, link, img, quantity};
	};

	const renderCart = () => {
		const ids = Object.keys(cart);
		ids.forEach((id) => renderCartItem(cart[id]));
	};

	const renderQuantity = () => {
		const ids = Object.keys(cart);
		ids.forEach((id) => renderQuantityItem(cart[id]));
	};

	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	const cartInit = () => {
		renderCart();
		renderQuantity();
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
			if (target.classList.contains('js-count-product-plus')) {
				e.preventDefault();
				const productID = document.querySelector('.js-btn-add-to-cart').getAttribute('data-id');
				plusQuantity(productID);
			}
			if (target.classList.contains('js-count-product-minus')) {
				e.preventDefault();
				const productID = document.querySelector('.js-btn-add-to-cart').getAttribute('data-id');
				minusQuantity(productID);
			}
		});
	};

	cartInit();
})();



if (document.querySelector('.rub-price') || document.querySelector('.rub-total')) {
	function numberWithSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	let prices = document.querySelector('.rub-price');
	let total_prices = document.querySelector('.rub-total'); // МБ можно убрать, т. к. уже выполняется
	let price = numberWithSpaces(prices.innerHTML);
	let total_price = numberWithSpaces(total_prices.innerHTML);
	document.querySelector('.rub-price').innerHTML = price;
	document.querySelector('.rub-total').innerHTML = total_price;
}
