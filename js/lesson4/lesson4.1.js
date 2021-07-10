"use strict";

/**
 * Определение числового объекта
 */
class Num {
    constructor(number) {
        if (Number.isInteger(number)) {
            this.units = number % 10;
            this.tens = Math.floor((number % 100) / 10);
            this.hundreds = Math.floor(number / 100);
        } else {
            console.log("Некорректное число");
        }
    }

    /**
     * Функция для вывода единиц, десятков и сотен числа
     */
    showNum() {
        console.log(`units: ${this.units}`);
        console.log(`tens: ${this.tens}`);
        console.log(`hundreds: ${this.hundreds}`);
    }
}




