let cartCount = 0;
let totalPrice = 0;

const cartCountElement = document.getElementById("cart-count");
const buyButtons = document.querySelectorAll(".buy-button");

// На каждую кнопку "Купить" вешаем свой обработчик
buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cartCount++;
        totalPrice += price;

        cartCountElement.textContent = cartCount;

        alert(
            "Товар добавлен в корзину!\n" +
            "Товар: " + name + "\n" +
            "Товаров: " + cartCount + "\n" +
            "Сумма: " + totalPrice + " ₽"
        );
    });
});