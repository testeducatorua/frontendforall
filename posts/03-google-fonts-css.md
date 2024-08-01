---
title: "03-CSS: шрифти (Google Fonts) "
date: "2024-08-01 00:03"
---

## Google fonts

Шрифти які створені в тому разі для кириличних наборів символів:
- **PT Serif** (статичний)
- **Roboto Condensed** (варіативний)

[Сайт для вибору та підключення web-шрифтів](https://fonts.google.com/)

[Відео: Google Fonts знов змінився. Як підключити шрифт. ](https://youtu.be/WyYix56HtvY)

## Підключення в HTML

### Код

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```
## Застосування в CSS

### Код
```css
/* для статичного шрифта */
.pt-serif-regular {
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: normal;
}

.pt-serif-bold {
  font-family: "PT Serif", serif;
  font-weight: 700;
  font-style: normal;
}

.pt-serif-regular-italic {
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: italic;
}

.pt-serif-bold-italic {
  font-family: "PT Serif", serif;
  font-weight: 700;
  font-style: italic;
}
```
```css
/* для варіативного шрифта */

/* <uniquifier>: Use a unique and descriptive class name */
/* <weight>: Use a value from 100 to 900 */

/* .roboto-condensed-<uniquifier> { */
.roboto-condensed- {
  font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  /* font-weight: <weight>; */
  font-style: normal;
}
```


# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
