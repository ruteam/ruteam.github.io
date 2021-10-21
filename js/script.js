// Счетчик кол-во товаров
let k = 1;
document.querySelector(".count__item").innerHTML = k;
let d = 0;
let plus = document.querySelector(".plus");
let minus = document.querySelector(".min");

plus.onclick = function() {
	if (k <= 8) {
		k = k + 1;
		document.querySelector(".count__item").innerHTML = k;
	}

}

minus.onclick = function() {
	if (k >= 2) {
		k = k - 1;
		document.querySelector(".count__item").innerHTML = k;
	}
}

// Уведомление о покупке
let a = document.querySelector(".tovar-btn");
a.onclick = function () {
	alert("Спасибо за покупку (" + k + " шт.)! " + "Заглядывайте еще!");
}
