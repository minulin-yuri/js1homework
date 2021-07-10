"use strict";


/**
 * Функция определения объекта Post в стиле ES5
 */
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

/**
 * Функция для изменения текста в объекте Post
 * @param {string} newText 
 */
PostES5.prototype.edit = function (newText) {
    this.text = newText;
}

/**
 * Функция вывода сообщения 
 */
PostES5.prototype.showPostES5 = function () {
    alert(`${this.author} написал сообщение: '${this.text}' ${this.date}`);
}

/**
 * Функция определения объекта AttachedPost в стиле ES5
 */
function AttachedPostES5(author, text, date, highlighted = false) {
    PostES5.call(this, author, text, date);
    this.highlighted = highlighted;
}
//создаем наследование от объекта Post
AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

/**
 * Функция для назначения значения true для
 * метода highlighted объекта AttachedPost
 */
AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

/**
 * Функция для проверки работы объектов AttachedPost
 * и Post и их методов в стиле ES5
 */
function showPostES5() {
    let attachedpost = new AttachedPostES5("John", "hello world", "2021-05-17");
    attachedpost.showPostES5();
    attachedpost.edit("The new text");
    attachedpost.showPostES5();
    attachedpost.makeTextHighlighted();
    alert(`Значение свойства highlighted = ${attachedpost.highlighted}`);
}

/**
 * Функция определения объекта Post в стиле ES6
 */
class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    /**
    * Функция для изменения текста в объекте Post
    * @param {string} newText 
    */
    edit(newText) {
        this.text = newText;
    }

    /**
    * Функция вывода сообщения 
    */
    showPostES6() {
        alert(`${this.author} написал сообщение: '${this.text}' ${this.date}`);
    }
}

/**
 * Функция определения объекта AttachedPost в стиле ES6
 */
class AttachedPostES6 extends PostES6 {
    constructor(author, text, date, highlighted = false) {
        super(author, text, date);
        this.highlighted = highlighted;
    }

    /**
     * Функция для назначения значения true для
     * метода highlighted объекта AttachedPost
     */
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

/**
 * Функция для проверки работы объектов AttachedPost
 * и Post и их методов в стиле ES6
 */
function showPostES6() {
    let attachedpost = new AttachedPostES6("Mike", "My text", "2021-07-01");
    attachedpost.showPostES6();
    attachedpost.edit("The new text");
    attachedpost.showPostES6();
    attachedpost.makeTextHighlighted();
    alert(`Значение свойства highlighted = ${attachedpost.highlighted}`);
}