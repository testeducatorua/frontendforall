---
title: "14-JavaScript: прийняття рішень в коді"
date: "2024-09-08 00:03"
youtubeUrl: "https://youtube.com/live/b8ByQ93_QD4"
practic: true
---
JavaScript надає різні умовні конструкції, які дозволяють управляти потоком виконання програми на основі певних умов.

## if конструкція

Конструкція `if` використовується для виконання коду, якщо задана умова є істинною.

### Приклад використання if

```javascript
let score = 75;
if (score > 60) {
  console.log("Прохідний бал!");
}
```

## else конструкція

`else` додається до `if`, щоб виконати блок коду, якщо умова `if` не виконується.

### Приклад використання else

```javascript
let score = 50;
if (score > 60) {
  console.log("Прохідний бал!");
} else {
  console.log("Недостатньо балів.");
}
```

## else if конструкція

`else if` дозволяє перевірити додаткові умови, якщо попередні умови не виконуються.

### Приклад використання else if

```javascript
let score = 75;
if (score > 80) {
  console.log("Відмінно!");
} else if (score > 60) {
  console.log("Добре!");
} else {
  console.log("Намагайся краще.");
}
```

## switch конструкція

Конструкція `switch` порівнює значення з декількома варіантами та виконує код відповідно до співпадіння.

### Приклад використання switch

```javascript
let color = "червоний";
switch (color) {
  case "синій":
    console.log("Колір моря");
    break;
  case "зелений":
    console.log("Колір трави");
    break;
  case "жовтий":
    console.log("Колір літа");
    break;
  default:
    console.log("Колір невідомий");
}
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
