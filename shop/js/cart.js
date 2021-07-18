"use strict";

class Cart {

    constructor(products = []) {
        this.products = products;
    }

    /**
     * Функция для добавления товаров 
     * в корзину
     * @param {*} cart 
     * @param {*} product 
     */
    addToCart(cart, product) {
        if (cart.products.length == 0) {
            cart.products.push(product);
        } else {
            let isInclude = false;
            for (let i = 0; i < cart.products.length; i++) {
                if (cart.products[i].name == product.name) {
                    cart.products[i].count++;
                    isInclude = true;
                }
            }
            if (!isInclude) {
                cart.products.push(product);
            }
        }
    }

    /**
     * Функция для получения общей стоимости 
     * товаров
     * @param {*} cart 
     * @returns 
     */
    getSummaryPrice(cart) {
        let rezult = 0;
        cart.products.forEach(c => {
            rezult += c.count;
        });
        return rezult;
    }
}