"use strict";


/**
 * Функция для проверки числового объекта и его метода
 */
function showNum() {
    let num = new Num(+prompt("Введите число:"));
    num.showNum();
}

/**
 * Функция определения объекта Product в стиле ES5
 * @param {string} name 
 * @param {number} price 
 */
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

/**
 * Определение метода определения цены товара 
 * со скидкой 25% для типа Product в стиле ES5 
 */
ProductES5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

/**
 * Функция для проверки типа ProductES5 и его метода
 */
function showProductES5() {
    let product = new ProductES5("товар1", 250);
    alert(`${product.name} стоит ${product.price} рублей`);
    product.make25PercentDiscount();
    alert(`${product.name} со скидкой 25% стоит ${product.price} рублей`);
}

/**
 * Функция определения объекта Product в стиле ES6
 */
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /**
    * Определение метода определения цены товара 
    * со скидкой 25% для типа Product в стиле ES6 
    */
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

/**
 * Функция для проверки типа ProductES6 и его метода
 */
function showProductES6() {
    let product = new ProductES6("товар2", 830);
    alert(`${product.name} стоит ${product.price} рублей`);
    product.make25PercentDiscount();
    alert(`${product.name} со скидкой 25% стоит ${product.price} рублей`);
}