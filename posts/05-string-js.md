---
title: "05-JavaScript: рядковий тип даних"
date: "2024-08-08 00:03"
youtubeUrl: 'https://youtube.com/live/XV_0DsVZMuY'
practic: true
---
## Створення рядків
Рядок (string) - це один з основних типів даних в JavaScript. Рядки представляють послідовності символів і використовуються для зберігання та маніпулювання текстовою інформацією. Існує кілька способів створення рядків у JavaScript.

### Використання лапок

```javascript
let singleQuote = 'Це рядок у одинарних лапках';
let doubleQuote = "Це рядок у подвійних лапках";
```

### Використання шаблонних рядків

Шаблонні рядки дозволяють вбудовувати вирази всередину рядка.

```javascript
let name = "Іван";
let templateString = `Привіт, ${name}!`;
```

## Основні властивості та методи рядків

### Властивість `length`

Властивість `length` повертає кількість символів у рядку.

```javascript
let text = "Привіт, світ!";
console.log(text.length); // 13
```

### Метод `charAt()`

Метод `charAt(index)` повертає символ, що знаходиться за вказаним індексом.

```javascript
let text = "Привіт, світ!";
console.log(text.charAt(0)); // "П"
```

### Метод `includes()`

Метод `includes(substring)` перевіряє, чи містить рядок вказаний підрядок.

```javascript
let text = "Привіт, світ!";
console.log(text.includes("світ")); // true
```

### Метод `indexOf()`

Метод `indexOf(substring)` повертає індекс першого входження підрядка. Якщо підрядок не знайдений, повертає -1.

```javascript
let text = "Привіт, світ!";
console.log(text.indexOf("світ")); // 8
```

### Метод `toUpperCase()`

Метод `toUpperCase()` повертає рядок, де всі символи перетворені у верхній регістр.

```javascript
let text = "Привіт, світ!";
console.log(text.toUpperCase()); // "ПРИВІТ, СВІТ!"
```

### Метод `toLowerCase()`

Метод `toLowerCase()` повертає рядок, де всі символи перетворені у нижній регістр.

```javascript
let text = "Привіт, світ!";
console.log(text.toLowerCase()); // "привіт, світ!"
```

### Метод `trim()`

Метод `trim()` видаляє пробіли з обох кінців рядка.

```javascript
let text = "  Привіт, світ!  ";
console.log(text.trim()); // "Привіт, світ!"
```

## Приклади

### Об'єднання рядків

Об'єднання двох або більше рядків можна виконати за допомогою оператора `+`.

```javascript
let greeting = "Привіт";
let place = "світ";
let message = greeting + ", " + place + "!";
console.log(message); // "Привіт, світ!"
```

### Шаблонні рядки

Шаблонні рядки дозволяють вставляти змінні та вирази в середину рядка.

```javascript
let name = "Іван";
let age = 25;
let message = `Мене звати ${name} і мені ${age} років.`;
console.log(message); // "Мене звати Іван і мені 25 років."


# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
