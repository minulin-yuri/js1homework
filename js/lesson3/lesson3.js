"use strict";

/**
 * Функция для вывода в консоль чисел от min до max 
 * включительно
 * @param {number} min 
 * @param {number} max 
 */
function showNumbers(min, max) {
    for (let i = min; i <= max; i++) {
        if (i == 0) {
            console.log(`${i} - это ноль`);
        } else if ((i % 2) == 1) {
            console.log(`${i} - нечетное число`);
        } else {
            console.log(`${i} - четное число`);
        }
    }
}

/**
 * Функция для вывода в консоль отдельных 
 * элементов массива
 */
function showData() {
    const post = {
        author: "John", //вывести этот текст 
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число 
                }
            },
            {
                userId: 5, //вывести это число 
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст 
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };

    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

/**
 * Функция для применения скидки discount 
 * к цене товара
 * @param {Number} discount 
 */

function getDiscount(discount) {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach(element => element.price *= (100 - discount) / 100);
}


/**
 * Функция для работы со списком товаров интернет-магазина
 */
function changeProducts() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    /**
     * Функция для получения товаров с фотографиями
     */
    let filteredProducts = products.filter(
        function (currentProd) {
            if ((currentProd.photos != null) && (currentProd.photos.length > 0)) {
                return currentProd;
            }
        }
    )

    /**
     * Функция для сортировки товаров по цене по возрастанию
     */
    let sortedProducts = products.sort(
        function (currentProd, nextProd) {
            if (currentProd.price > nextProd.price) {
                return 1;
            } else if (currentProd.price < nextProd.price) {
                return -1;
            } else {
                return 0;
            }
        }
    )

    console.log(filteredProducts);//вывод отфильтрованного списка
    console.log(sortedProducts);//вывод отсортированного списка
}

/**
 * Функция для вывода чисел с помощью цикла for не используя 
 * тело цикла
 * @param {number} min 
 * @param {number} max 
 */
function showNums(min, max) {
    for (let i = min; i <= max; console.log(i++)) {

    }
}

/**
 * Функция для рисования горки в консоле
 */
function makeHill() {
    let hill = [];
    for (let i = 0; i < 20; i++) {
        hill.unshift("X");
        console.log(hill.join(''));
    }
}