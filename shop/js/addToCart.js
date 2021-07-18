"use strict";
let cart = new Cart;

//создание события при нажатии на кнопку 
//"Add to cart"
let btn = document.querySelectorAll(".add-to-cart");
btn.forEach(button => {
    button.addEventListener("click", function () {
        let productItem = button.parentNode.parentNode;
        let productName = productItem.querySelector('.products__items__item__text a h3').innerHTML;
        let productDescription = productItem.querySelector('.products__items__item__text p').innerHTML;
        let productPrice = productItem.querySelector('.products__items__item__text span').innerHTML;
        let product = new Product(productName, productDescription, productPrice);
        cart.addToCart(cart, product);
        order.showCountOfProducts(cart);
        order.showOrder(cart);
    });
});

//вывод содержимого корзины при наведении
//курсора на ярлык
let cartLogo = document.querySelector(".cart--link");
cartLogo.addEventListener("mouseover", function () {
    document.querySelector(".order").style.display = "block";
});

//скрытие содержимого корзины при 
//отведении курсора от ярлыка
cartLogo.addEventListener("mouseout", function () {
    document.querySelector(".order").style.display = "none";
})


