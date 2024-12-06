---
title: "18-JavaScript: об'єктний тип даних"
date: "2024-12-06 00:03"
youtubeUrl: "https://www.youtube.com/watch?v=nWzKZp3Zlbg"
practic: true
---

## Об'єктний тип даних в JavaScript

Об'єкт - це набір властивостей, де кожна властивість має ім'я та значення. Об'єкти використовуються для зберігання колекцій різних значень та складніших сутностей.

### Створення об'єктів

1. Літеральний запис:

```javascript
const user = {
    name: "Іван",
    age: 25,
    isAdmin: false,
    "likes birds": true  // ключ з пробілом береться в лапки
};
```

2. Через конструктор Object:

```javascript
const user = new Object();
user.name = "Іван";
user.age = 25;
```

### Доступ до властивостей

```javascript
// Через крапку
console.log(user.name);  // "Іван"

// Через квадратні дужки (працює з будь-якими іменами властивостей)
console.log(user["likes birds"]);  // true

// Динамічні ключі
const key = "name";
console.log(user[key]);  // "Іван"
```

### Зміна властивостей

```javascript
// Зміна значення
user.age = 26;

// Додавання нової властивості
user.city = "Київ";

// Видалення властивості
delete user.isAdmin;
```

### Методи об'єкта

```javascript
const calculator = {
    value: 0,
    add(num) {
        this.value += num;  
    },
    subtract(num) {
        this.value -= num;
    },
};

// Виклик методів
calculator.add(5);
console.log(calculator);  
```

### Перебір властивостей

```javascript
const product = {
    name: "Ноутбук",
    price: 25000,
    inStock: true
};

// Перебір ключів
for (let key in product) {
    console.log(key);  // name, price, inStock
}

// Отримання масивів ключів та значень
const keys = Object.keys(product);
const values = Object.values(product);
const entries = Object.entries(product);  // масив пар [ключ, значення]
```



### Вкладені об'єкти

```javascript
const company = {
    name: "IT Company",
    office: {
        city: "Київ",
        address: {
            street: "Хрещатик",
            building: "1A"
        }
    },
    employees: [
        { id: 1, name: "Іван" },
        { id: 2, name: "Марія" }
    ]
};

// Доступ до вкладених властивостей
console.log(company.office.address.street);  // "Хрещатик"
console.log(company.employees[0].name);      // "Іван"
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
