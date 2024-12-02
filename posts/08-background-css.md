---
title: "08-CSS: background"
date: "2024-08-16 00:02"
youtubeUrl: 'https://youtube.com/live/TS47hVEvJZA'
practic: true
---

Властивість `background` в CSS використовується для встановлення фону елементів. Фон може бути кольором, зображенням або градієнтом.

## Background Color

`background-color` визначає колір фону елемента.

```css
/* Встановлює білий колір фону для елемента */
.element {
  background-color: black;
}

/* Встановлює прозорий фон */
.element {
  background-color: transparent;
}
```

## Background Image

`background-image` використовується для встановлення зображення або градієнта як фон.

```css
/* Встановлює зображення як фон для елемента */
.element {
  background-image: url(image.png);
}

/* Встановлює градієнт як фон */
.element {
  background-image: linear-gradient(to right, red, yellow);
}
```

## Background Repeat

`background-repeat` контролює повторення фонових зображень.

```css
/* Встановлює повторення зображення по горизонталі та вертикалі */
.element {
  background-repeat: repeat;
}

/* Забороняє повторення зображення */
.element {
  background-repeat: no-repeat;
}
```

## Background Position

`background-position` визначає початкову точку відображення фонових зображень.

```css
/* Встановлює зображення у верхньому лівому куті */
.element {
  background-position: top left;
}

/* Встановлює зображення у центрі */
.element {
  background-position: center;
}
```

## Background Size

`background-size` контролює розмір фонових зображень.

```css
/* Масштабує зображення на всю ширину та висоту елемента */
.element {
  background-size: cover;
}
```

## Background Shorthand

`background` - це скорочення для визначення всіх background-властивостей в одному правилі.

```css
/* Використання shorthand для визначення фону */
.element {
  background: url(image.png) no-repeat center center / cover;
}
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
