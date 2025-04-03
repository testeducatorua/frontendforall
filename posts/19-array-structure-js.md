---
title: "19-JavaScript: масиви"
date: "2025-04-03 00:03"
youtubeUrl: "https://youtube.com/live/rryZ_kq3NA8"
practic: true
---

## Масиви в JavaScript

Масив - це впорядкована колекція даних, де кожен елемент має свій індекс. Масиви використовуються для зберігання списків елементів та роботи з ними.

### Створення масивів

1. Літеральний запис:

```javascript
const fruits = ["Яблуко", "Банан", "Апельсин"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [42, "Текст", true, null, { name: "Об'єкт" }];
```

2. Через конструктор Array:

```javascript
const array = new Array();
array[0] = "Перший";
array[1] = "Другий";

// Або з розміром
const fixedArray = new Array(3); // [empty × 3]
```

### Доступ до елементів

```javascript
// Через індекс (починається з 0)
console.log(fruits[0]);  // "Яблуко"
console.log(fruits[1]);  // "Банан"

// Довжина масиву
console.log(fruits.length);  // 3

// Останній елемент
console.log(fruits[fruits.length - 1]);  // "Апельсин"
```

### Зміна масиву (перевизначення значення елементу та методи)

```javascript
// Зміна елемента
fruits[1] = "Груша";

// Додавання елементів
fruits.push("Манго");      // в кінець
fruits.unshift("Ківі");    // на початок

// Видалення елементів
const last = fruits.pop();     // з кінця
const first = fruits.shift();  // з початку
```

### Інші окремі методи масивів

```javascript
const numbers = [1, 2, 3, 4, 5];

// Перебір елементів
numbers.forEach(num => console.log(num));

// Створення нового масиву через перетворення
const doubled = numbers.map(num => num * 2);

// Фільтрація
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Пошук елемента
const found = numbers.find(num => num > 3);

// Перевірка умови для всіх елементів
const allPositive = numbers.every(num => num > 0);

// Сортування
fruits.sort();  // за кодами символі
numbers.sort((a, b) => a - b);  // для чисел, за зростанням
```

### Багатовимірні масиви

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Доступ до елементів
console.log(matrix[0][1]);  // 2
console.log(matrix[1][2]);  // 6

// Перебір
matrix.forEach(row => {
    row.forEach(element => {
        console.log(element);
    });
});
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
