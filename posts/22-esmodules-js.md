---
title: "22-ES модулі в JavaScript"
date: "2025-04-28 00:03"
youtubeUrl: "https://www.youtube.com/watch?v=R3i1RQ8ktKA"
practic: true
---
# ES модулі в JavaScript

ES модулі (ESM) — це стандартний формат модулів у JavaScript, який з'явився в ES6 (ES2015). Вони дозволяють розділяти код на окремі файли та організовувати його в логічні блоки, що робить розробку та підтримку складних додатків значно простішою.

## Основи ES модулів

### Експорт

Експорт дозволяє зробити функції, об'єкти або примітивні значення доступними для використання в інших модулях.

```javascript
// math.js - модуль з математичними функціями

// Іменований експорт
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Змінні також можна експортувати
export const PI = 3.14159;

// Можна експортувати класи
export class Calculator {
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error("Ділення на нуль неможливе");
    }
    return a / b;
  }
}
```

### Імпорт

Імпорт дозволяє використовувати функціональність, експортовану з інших модулів.

```javascript
// app.js - основний файл додатку

// Імпорт окремих експортованих елементів
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159

// Імпорт класу
import { Calculator } from './math.js';

const calc = new Calculator();
console.log(calc.multiply(4, 2)); // 8
console.log(calc.divide(10, 2));  // 5
```

### Експорт за замовчуванням

Кожен модуль може мати один експорт за замовчуванням, який часто використовується для експорту основної функціональності модуля.

```javascript
// user.js

// Експорт класу за замовчуванням
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getInfo() {
    return `${this.name} (${this.email})`;
  }
}

// Додаткові іменовані експорти
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
};
```

### Імпорт експорту за замовчуванням

Імпорт експорту за замовчуванням відрізняється від іменованого імпорту.

```javascript
// app.js

// Імпорт експорту за замовчуванням
import User from './user.js';

// Імпорт іменованих експортів
import { validateEmail, ROLES } from './user.js';

// Можна комбінувати імпорт за замовчуванням та іменований імпорт
// import User, { validateEmail, ROLES } from './user.js';

const user = new User('Іван Петренко', 'ivan@example.com');
console.log(user.getInfo()); // Іван Петренко (ivan@example.com)

console.log(validateEmail('ivan@example.com')); // true
console.log(ROLES.ADMIN); // admin
```

## Додаткові можливості модулів

### Перейменування при імпорті та експорті

Можна перейменовувати експортовані та імпортовані елементи для уникнення конфліктів імен.

```javascript
// utils.js
export function formatDate(date) {
  /* ... */
}

// Альтернативний варіант експорту з перейменуванням
export { formatDate as formatDateTime };
import { formatDateTime } from './utils.js';

// app.js
// Альтернативний варіант імпорту з перейменуванням
import { formatDate as formatMyDate} from './utils.js';

formatMyDate(new Date()); // Використання перейменованого імпорту
```


## Використання модулів у браузері

Для використання ES модулів у браузері потрібно вказати `type="module"` в тегу `<script>`.

```html
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>ES Модулі</title>
</head>
<body>
  <h1>Приклад використання ES модулів</h1>
  
  
  <!-- Основний скрипт як модуль -->
  <!-- <script type="module" src="app.js"></script> -->
  
  <!-- Можна також писати код модуля безпосередньо в HTML -->
  <script type="module">
    import { add, subtract } from './math.js';
    console.log(add(2, 2)); // 4
    console.log(subtract(5, 3)); // 2
  </script>
</body>
</html>
```


## Висновок

ES модулі надають стандартний, ефективний спосіб організації коду в JavaScript. Вони забезпечують кращу інкапсуляцію, дозволяють уникнути забруднення глобальної області видимості та роблять залежності між частинами коду явними. Підтримка ES модулів є у всіх сучасних браузерах та середовищах виконання JavaScript, що робить їх універсальним інструментом для розробки як клієнтських, так і серверних додатків.

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
