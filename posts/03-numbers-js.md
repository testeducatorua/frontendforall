---
title: "03-JavaScript: числовий тип даних"
date: "2024-08-01 00:02"
---

## Тип даних number

Тип даних **number** в JavaScript використовується для представлення чисел (цілих або десяткових) і виконання числових операцій.

### Код

```javascript
let majuSmakolykiv = 10; // ціле число
const shosSchoVchivUShkoli = 3.14; // десяткове число
```

## Стандарт та діапазон

JavaScript використовує стандарт [_IEEE 754_](https://uk.wikipedia.org/wiki/IEEE_754?authuser=0&hl=uk) для зберігання та маніпулювання даними типу **number**

Цілі числа можуть бути представлені без втрати точності лише в діапазоні від (-2 в 53 ступені + 1) до (2 в 53 ступені - 1) включно.

### Код

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9 007 199 254 740 991
console.log(Number.MIN_SAFE_INTEGER); // -9 007 199 254 740 991
```

## Візуальний розділювач

В JavaScript можна використовувати розділювач \_ (підкреслення) у числових літералах для полегшення читабельності. Це дозволяє вставляти розділювачі між групами цифр, щоб зробити числа більш зрозумілими, особливо великі числа.

Розділювач \_ ігнорується при обробці числа, тому його можна використовувати у будь-якому місці числового літерала без впливу на фактичне значення числа.

### Код

```javascript
let num5 = 1_000_000; // 1000000
let num6 = 1_234.567_89; // 1234.56789
```

## Деякі математичні операції з даними типу **number**

### Код

```javascript
const sum = 2 + 3; // 5

const difference = 5 - 2; // 3

const product = 2 * 3; // 6

const quotient = 6 / 2; // 3

const remainder = 10 % 3; // 1

const power1 = 2 ** 3; // 8

// інкремент
let chiselko = 3;
chiselko++;
console.log(chiselko);

// декремент
let insheChiselko = 5;
insheChiselko--;
console.log(insheChiselko);
```

## Методи об'єкта Math

Об'єкт `Math` в JavaScript є вбудованим об'єктом, який містить набір математичних функцій та констант.

### Код

```javascript
// Властивості та методи об'єкта Math
console.log(Math);

// Генерація числа в діапазоні від 0 до 1
const randomValueFrom0to1 = Math.random();
console.log(randomValueFrom0to1);

// Генерація чисел в діапазоні від 0 до 9
const randomValueFrom0toAnyDigit = Math.random()*9;
console.log(randomValueFrom0toAnyDigit);
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
