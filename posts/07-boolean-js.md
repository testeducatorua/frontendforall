---
title: "06-07-JavaScript: тип даних Boolean"
date: "2024-08-13 00:02"
---

## Створення значень типу Boolean

Boolean - це один з основних типів даних в JavaScript. Він має лише два можливі значення: `true` або `false`.

### За допомогою літералів

Найпростіший спосіб створення значень типу Boolean - використання літералів `true` або `false`.

```javascript
let isTrue = true;
let isFalse = false;
```

### За допомогою конструктора Boolean

Функція `Boolean` може використовуватися для створення значень типу Boolean з інших типів даних.

```javascript
let isTrue = Boolean(1); // true
let isFalse = Boolean(0); // false
```

## Основні операції з Boolean

### Логічні оператори

Логічні оператори дозволяють виконувати операції над значеннями типу Boolean.

#### Оператор AND (`&&`)

Оператор AND повертає `true`, якщо обидва операнди є `true`.

```javascript
let result = true && false; // false
```

#### Оператор OR (`||`)

Оператор OR повертає `true`, якщо хоча б один з операндів є `true`.

```javascript
let result = true || false; // true
```

#### Оператор NOT (`!`)

Оператор NOT повертає протилежне значення для операнда.

```javascript
let result = !true; // false
```

### Порівняння

Порівняння дозволяють отримати значення типу Boolean в результаті порівняння інших типів даних.

```javascript
let isEqual = (5 === 5); // true
let isGreater = (10 > 5); // true
let isLess = (3 < 1); // false
```

## Перетворення інших типів даних в Boolean

### Явне перетворення

За допомогою конструктора `Boolean` можна явно перетворити значення інших типів даних в Boolean.

```javascript
let isTrue = Boolean("Hello"); // true
let isFalse = Boolean(""); // false
```

### Неявне перетворення

Неявне перетворення відбувається під час використання значень інших типів даних у контекстах, де очікується значення типу Boolean.

```javascript
let isTrue = !!"Hello"; // true
let isFalse = !!""; // false
```

## Приклади

### Умовні оператори

Значення типу Boolean часто використовуються в умовних операторах для прийняття рішень в коді.

```javascript
let age = 18;
if (age >= 18) {
  console.log("Ви повнолітні");
} else {
  console.log("Ви неповнолітні");
}
```

### Логічні оператори

Логічні оператори дозволяють створювати складні логічні вирази.

```javascript
let hasPassport = true;
let hasVisa = false;
if (hasPassport && hasVisa) {
  console.log("Ви можете подорожувати");
} else {
  console.log("Ви не можете подорожувати");
}
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
