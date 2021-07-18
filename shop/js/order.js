"use strict";

let order = {
    /**
     * Функция для отображения количества
     * заказанных позиций в корзине
     * @param {*} cart 
     */
    showCountOfProducts(cart) {
        let number = document.querySelector(".cart--count");
        number.innerText = cart.products.length;
        let block = document.querySelector(".cart--ellipse");
        block.style.display = "block";
    },

    /**
     * Функция для отображения содержимого 
     * корзины
     * @param {*} cart 
     */
    showOrder(cart) {
        let emptyText = document.querySelector(".order p");
        let orderTable = document.querySelector(".order__container");
        orderTable.innerHTML = this.createTable(cart);
        if (cart.products.length == 0) {
            emptyText.style.display = "block";
            orderTable.style.display = "none";
        } else {
            emptyText.style.display = "none";
            orderTable.style.display = "flex";
        }

    },

    /**
     * Функция для создания таблицы с заказом
     * @param {*} cart 
     * @returns 
     */
    createTable(cart) {
        let str = '<div class="order__container__title"><div><h5>Наименование</h5></div><div><h5>Количество</h5></div><div><h5>Цена</h5></div><div><h5>Стоимость</h5></div></div>';
        let summaryPrice = 0;
        cart.products.forEach(c => {
            str += '<div class="order__container__title">';
            str += `<div><h5> ${c.name} </h5></div>`;
            str += `<div><h5> ${c.count} </h5></div>`;
            str += `<div><h5> ${c.price} </h5></div>`;
            let price = c.count * this.getPrice(c.price);
            summaryPrice += price;
            str += `<div><h5> ${price} </h5></div></div>`;
        });
        str += '<div class="order__container__title">';
        str += '<div style="width:360px; text-align: right;"><h5>Общая стоимость заказа</h5></div>';
        str += `<div><h5> ${summaryPrice} </h5></div></div>`;

        return str;
    },

    /**
     * Функция для удаления из цены знака $
     * @param {*} price 
     * @returns 
     */
    getPrice(price) {
        return price.replace(/[^0-9,.]/g, ' ');
    }
}
