---
title: "14-CSS: flexbox layout"
date: "2024-09-08 00:02"
youtubeUrl: "https://youtube.com/live/b8ByQ93_QD4"
practic: true
---

## Що таке Flexbox?

Flexbox, повністю відомий як Flexible Box Layout, це метод розкладки в CSS, який дозволяє розробникам ефективно розміщувати елементи в контейнері, навіть коли розміри невідомі чи динамічні. Основна ідея полягає в тому, що контейнер автоматично вирівнює і розтягує/стискає дочірні елементи залежно від заданих параметрів.

## Застосування `display: flex`

Для використання Flexbox, ви повинні встановити властивість `display` елементу контейнера на `flex`.

```css
.container {
  display: flex;
}
```

## Окремі властивості Flexbox

### Властивості контейнера

- **flex-direction**: Визначає напрямок розташування елементів (наприклад, `row`, `column`).
- **justify-content**: Вирівнює елементи вздовж основної вісі (наприклад, `center`, `space-between`).
- **align-items**: Вирівнює елементи вздовж поперечної вісі (наприклад, `stretch`, `center`).
- **flex-wrap**: Визначає, чи мають елементи переноситися на наступну лінію (наприклад, `wrap`, `nowrap`).

### Властивості елементів

- **flex-grow**: Визначає, як елемент має зростати, щоб заповнити доступний простір у контейнері.
- **flex-shrink**: Визначає, як елемент має зменшуватися, коли не вистачає простору.
- **flex-basis**: Встановлює базовий розмір елемента перед розподілом простору.

## Приклад коду

```html
<div class="container">
  <div>Перший елемент</div>
  <div>Другий елемент</div>
  <div>Третій елемент</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
