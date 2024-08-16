---
title: "08-JavaScript: null та undefined"
date: "2024-08-16 00:02"
---

`null` та `undefined` - це два окремих типи даних у JavaScript, що використовуються для позначення відсутності значення або ненадання значення змінній.

## null

`null` - це спеціальне значення, яке вказує на відсутність об'єкта або значення.

### Приклад використання null

Зазвичай `null` використовується для явного встановлення відсутності значення або для очищення змінної.

```javascript
let emptyValue = null;
```

## undefined

`undefined` - це значення, яке автоматично присвоюється змінній, коли їй не було надано значення.

### Приклад використання undefined

Значення `undefined` зазвичай вказує на те, що змінна була оголошена, але їй ще не було присвоєно значення.

```javascript
let uninitialized;
console.log(uninitialized); // undefined
```

## Порівняння null та undefined

### Використання операторів порівняння

`null` та `undefined` мають різну поведінку при порівнянні за допомогою операторів `==` та `===`.

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
