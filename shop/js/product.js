"use strict";

/**
 * Функция для определения объекта для товаров
 */
class Product {
    constructor(name, description, price, count = 1) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = count;
    }
}