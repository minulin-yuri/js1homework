"use strict";

/**
 * Функция для описания результатов в примерах
 */

function interpretationExamples() {
    /*
    объявляем 4 переменные: a, b, c, d
    присваиваем a и b значение 1
    c и d пока undefined
     */
    let a = 1, b = 1, c, d;
    c = ++a;    //увеличиваем a на 1 и записываем в c
    alert(c);   //выводим значение с

    /*
    присваиваем d значение b, потом b увеличиваем на 1
     */
    d = b++;
    alert(d);   //выводим значение d

    /*
    a увеличиваем на 1
    в c записываем a + 2
     */
    c = 2 + ++a;
    alert(c);   //выводим значение с

    /*
    в d записываем 2 + b
    b увеличиваем на 1
    */
    d = 2 + b++;
    alert(d);   //выводим значение d
    alert(a);   //выводим значение a
    alert(b);   //выводим значение b

}

/**
 * Функция для описания значения переменных
 */
function interpretationVariables() {
    /*
    объявляем переменную a
    присваиваем переменной a значение 2
     */
    let a = 2;

    /*
    увеличиваем переменную a в 2 раза
    объявляем переменную x
    присваиваем переменной x значение 1 + a
     */
    let x = 1 + (a *= 2);

    alert(`a = ${a}, x = ${x}`);
}

/**
 * Функция сравнения переменных
 */
function compareVariables() {
    let a = parseInt(prompt("Введите первое число"));
    let b = parseInt(prompt("Введите второе число"));

    if ((a >= 0) && (b >= 0)) { //если оба числа положительные
        return alert("a - b = " + (a - b));
    } else if ((a < 0) && (b < 0)) { //если оба числа отрицательные
        return alert("a * b = " + (a * b));
    } else if (((a < 0) && (b >= 0)) || ((a >= 0) && (b < 0))) {
        // если числа разных знаков
        return alert("a + b = " + (a + b));
    } else { //если пользователь ввел некорректные данные
        return alert("Вы ввели некорректные числа!");
    }
}

/**
 * Функция сложения 
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function sum(num1, num2, ...other) {
    let sum = num1 + num2;
    //если параметров больше, чем 2
    if (other.length > 0) {
        for (let i = 0; i < other.length; i++) {
            sum += other[i];
        }
    }
    return sum;
}

/**
 * Функция вычитания 
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function sub(num1, num2, ...other) {
    let sub = num1 - num2;
    //если параметров больше, чем 2
    if (other.length > 0) {
        for (let i = 0; i < other.length; i++) {
            sub -= other[i];
        }
    }
    return sub;
}

/**
 * Функция умножения 
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function mult(num1, num2, ...other) {
    let mult = num1 * num2;
    //если параметров больше, чем 2
    if (other.length > 0) {
        for (let i = 0; i < other.length; i++) {
            mult *= other[i];
        }
    }
    return mult;
}

/**
 * Функция деления 
 * @param {number} num1 
 * @param {number} num2 
 * @return {number}
 */
function div(num1, num2, ...other) {
    let div = num1 / num2;
    //если параметров больше, чем 2
    if (other.length > 0) {
        for (let i = 0; i < other.length; i++) {
            div /= other[i];
        }
    }
    return div;
}

/**
 * Функция проверки работы арифметических функция
 */
function checkFunc() {
    //получаем от пользователя количество параметров функций
    let count = parseInt(prompt("Введите количество параметров"));
    //проверяем корректность введенного количества параметров
    if (count >= 1) {
        //получаем первое число
        let num = parseInt(prompt("Введите число 1"));
        /* 
            объявляем переменные для арифметических операций
            и присваиваем им значение первого числа
        */
        let sumRezult = num;
        let subRezult = num;
        let multRezult = num;
        let divRezult = num;
        /* 
            получаем от пользователя остальные числа
            и считаем результаты арифметических операций
        */
        for (let i = 2; i <= count; i++) {
            num = parseInt(prompt(`Введите число ${i}`));
            sumRezult = sum(sumRezult, num);
            subRezult = sub(subRezult, num);
            multRezult = mult(multRezult, num);
            divRezult = div(divRezult, num);
        }
        //выводим результаты
        alert(`Сумма всех чисел = ${sumRezult}\n
Разность чисел = ${subRezult}\n
Произведение чисел = ${multRezult}\n
Частное чисел = ${divRezult}`);
    } else {
        /* 
        если пользователь ввел некорректное значение
        количества параметров, сообщаем ему об этом и 
        заново запускаем функцию 
        */
        alert("Вы ввели некорректное число параметров");
        checkFunc();
    }
}

/**
 * Функция получения арифметической операции
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {

        case "сумма": return sum(arg1, arg2);

        case "разница": return sub(arg1, arg2);

        case "произведение": return mult(arg1, arg2);

        case "деление": return div(arg1, arg2);

        default: return false;
    }
}

/**
 * Функция для получения данных от пользователя
 * для функции mathOperation(arg1, arg2, operation)
 */
function checkMath() {
    let num1 = parseInt(prompt("Введите число 1 :"));
    let num2 = parseInt(prompt("Введите число 2 :"));
    let operation = prompt("Введите название арифметической операции.\n сумма - получение суммы чисел\n разница - получение разницы чисел\n произведение - получение произведения чисел\n деление - получение частного чисел");
    if (mathOperation(num1, num2, operation)) {
        return alert(`Результат = ${mathOperation(num1, num2, operation)}`);
    } else {
        alert("Некорректно введены данные!");
        checkMath();
    }
}


/**
 * Функция для проверки корректности ввода суммы вклада на счет
 * @returns string
 */
function getCountMoney() {
    let count = prompt("Введите сумму, которую Вы хотите положить на счет.");
    while (!parseInt(count)) {
        count = prompt("Введены некорректные данные. Повторите ввод!");
    }
    return count;
}

/**
 * Функция для получения символа в строке по номеру
 * @param {string} str 
 * @param {number} num 
 * @returns 
 */
function getChar(str, num) {
    return str.substr(num - 1, 1);
}

/**
 * Функция для определения правильного окончания в рублях
 * @param {string} count 
 * @param {string} lastChar 
 * @returns string
 */
function getText(count, lastChar) {
    switch (lastChar) {
        case "1": return alert(`Ваша сумма в ${count} рубль успешно зачислена!`);

        case "2":
        case "3":
        case "4": return alert(`Ваша сумма в ${count} рубля успешно зачислена!`);

        default: return alert(`Ваша сумма в ${count} рублей успешно зачислена!`);
    }
}

/**
 * Функция для определения количества денег на счету
 */
function countMoney() {
    //получаем сумму денег от пользывателя
    let count = getCountMoney();
    //определяем длину числа
    let length = count.length;
    //получаем последний символ
    let lastChar = getChar(count, length);
    if (length >= 2) {
        /*
        если число больше 10 
        и предпоследний символ равен 1,
        то в любом случае будет сумма рублЕЙ
        */
        let penultimateChar = getChar(count, length - 1);
        if (penultimateChar == "1") {
            return alert(`Ваша сумма в ${count} рублей успешно зачислена!`);
        } else {
            //иначе согласно правилу
            getText(count, lastChar);
        }
    } else {
        getText(count, lastChar);
    }
}
