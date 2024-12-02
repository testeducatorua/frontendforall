---
title: "07-CSS: box-model"
date: "2024-08-13 00:02"
youtubeUrl: 'https://youtube.com/live/PO6i0BDB4_M'
practic: true
---

## Введення

Box Model в CSS визначає, як HTML елементи сприймаються та розміщуються на сторінці. Вона складається з: padding, border, margin, та content.

## Складові Box Model

### Padding

Padding (внутрішні відступи) визначає відстань між контентом елемента та його border.

```css
/* Встановлює padding для всіх сторін елемента */
.element {
  padding: 20px;
}

/* Встановлює padding для кожної сторони окремо */
.element {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}
```

### Border

Border (рамка) оточує контент та padding елемента. Вона може мати різний стиль, товщину та колір.

```css
/* Встановлює border для всіх сторін елемента */
.element {
  border: 1px solid black;
}

/* Встановлює border для кожної сторони окремо */
.element {
  border-top: 2px dashed red;
  border-right: 2px dashed green;
  border-bottom: 2px dashed blue;
  border-left: 2px dashed yellow;
}
```

### Margin

Margin (зовнішні відступи) визначає відстань між border елемента та іншими елементами на сторінці.

```css
/* Встановлює margin для всіх сторін елемента */
.element {
  margin: 20px;
}

/* Встановлює margin для кожної сторони окремо */
.element {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}
```

### Border-Radius

Border-radius визначає заокруглення кутів елемента.

```css
/* Встановлює border-radius для всіх кутів елемента */
.element {
  border-radius: 10px;
}

/* Встановлює border-radius для кожного кута окремо */
.element {
  border-top-left-radius: 10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 25px;
}
```

## Приклади використання Box Model

### Приклад з padding та border

```html
<div class="box">
  Це приклад з padding та border.
</div>
```

```css
.box {
  padding: 20px;
  border: 2px solid black;
}
```

### Приклад з margin та border-radius

```html
<div class="box">
  Це приклад з margin та border-radius.
</div>
```

```css
.box {
  margin: 20px;
  border: 2px solid black;
  border-radius: 15px;
}
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
