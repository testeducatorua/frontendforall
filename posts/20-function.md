---
title: "20-Функції в JavaScript"
date: "2025-04-10 00:03"
youtubeUrl: "https://www.youtube.com/live/VS_uKsYNaBo"
practic: true
---
# Функції в JavaScript

Функції - це блоки коду, які можуть бути викликані повторно. Вони дозволяють структурувати код, уникнути повторень та покращити читабельність.

## Способи оголошення функцій

У JavaScript існує кілька способів створення функцій, кожен зі своїми особливостями.

### Оголошення функції (Function Declaration)

```javascript
function sayHello(name) {
    return `Привіт, ${name}!`;
}

// Виклик функції
console.log(sayHello("Олена")); // Привіт, Олена!
console.log(sayHello("Тарас")); // Привіт, Тарас!
console.log(sayHello("Noname")); // Привіт, Noname!
```

### Функціональний вираз (Function Expression)

```javascript
const sayHello = function(name) {
    return `Привіт, ${name}!`;
};

// Виклик функції
console.log(sayHello("Петро")); // Привіт, Петро!
```

### Стрілкові функції (Arrow Functions)

```javascript
const sayHello = (name) => {
    return `Привіт, ${name}!`;
};

// Скорочений синтаксис для простих функцій
const greet = name => `Привіт, ${name}!`;

console.log(greet("Марія")); // Привіт, Марія!
```
### Методи об'єктів

```javascript
const person = {
    name: "Олена",
    age: 25,
    greet: function() {
        return `Привіт, мене звати ${this.name}`;
    },
    // Скорочений синтаксис ES6
    sayHello() {
        return `Привіт від ${this.name}!`;
    }
};

console.log(person.greet()); // Привіт, мене звати Олена
console.log(person.sayHello()); // Привіт від Олена!
```

## Параметри функцій

### Значення за замовчуванням

```javascript
function greet(name = "Гість") {
    return `Привіт, ${name}!`;
}

console.log(greet()); // Привіт, Гість!
console.log(greet("Олег")); // Привіт, Олег!
```

### Rest параметри

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Деструктуризація параметрів

```javascript
function displayPerson({name, age, city = "Не вказано"}) {
    return `${name}, ${age} років, місто: ${city}`;
}

const person = {name: "Василь", age: 27};
console.log(displayPerson(person)); // Василь, 27 років, місто: Не вказано
```

## Замикання (Closures)

Замикання - це функція, яка має доступ до змінних з її зовнішньої (охоплюючої) функції, навіть після того, як зовнішня функція завершила своє виконання.

```javascript
function createCounter() {
    // Ця змінна є частиною лексичного оточення функції createCounter
    let count = 0;
    
    // Ця внутрішня функція є замиканням
    return function() {
        // Вона "запам'ятовує" і має доступ до змінної count
        return ++count;
    };
}

// Створюємо лічильник, викликаючи createCounter
const counter = createCounter();

// Кожен виклик counter() збільшує count на 1
console.log(counter()); // Виведе: 1
console.log(counter()); // Виведе: 2
console.log(counter()); // Виведе: 3

```

У цьому прикладі лексичне оточення включає змінну `count`. Внутрішня функція (замикання) має доступ до цієї змінної навіть після того, як `createCounter` завершила своє виконання. Це дозволяє зберігати стан між викликами `counter()`.

## Рекурсія

Рекурсія - це коли функція викликає сама себе.

```javascript
function countDownToLaunch(seconds) {
    if (seconds === 0) {
        console.log("Запуск!");
        return;
    }
    console.log(seconds);
    setTimeout(() => countDownToLaunch(seconds - 1), 1000);
}

countDownToLaunch(5);
// Виведе:
// 5
// 4
// 3
// 2
// 1
// Запуск!
```

## Функції вищого порядку

Це функції, які приймають інші функції як аргументи або повертають функції.

```javascript
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15
```

## IIFE (Immediately Invoked Function Expression)

Функції, які викликаються відразу після створення.

```javascript
(function() {
    const privateVar = "Я приватна змінна";
    console.log(privateVar);
})();

// privateVar не доступна тут
```

### Функції зворотного виклику (Callbacks)

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Дані отримано");
    }, 1000);
}

// Функція, яка передається як аргумент (callback) - це функція зворотного виклику
fetchData(data => console.log(data)); // Через 1 секунду: "Дані отримано"
```

## Висновок

JavaScript пропонує багато способів створення та використання функцій, що робить мову гнучкою та потужною. Вибір конкретного способу залежить від ваших потреб та контексту використання.
