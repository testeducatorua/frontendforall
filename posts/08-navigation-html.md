---
title: "08-HTML: елементи для навігації"
date: "2024-08-16 00:01"
youtubeUrl: 'https://youtube.com/live/TS47hVEvJZA'
practic: true
---

## Основні теги для навігації

- `<nav>` - Визначає секцію для навігаційних посилань.
- `<a>` - Визначає гіперпосилання на інші сторінки або ресурси.
- `<ul>` - Створює список для групування посилань.
- `<li>` - Елемент списку в межах `<ul>`.

### Приклад структури навігації

```html
<nav>
  <ul>
    <li><a href="#home">Головна</a></li>
    <li><a href="#about">Про нас</a></li>
    <li><a href="#services">Послуги</a></li>
    <li><a href="#contact">Контакти</a></li>
  </ul>
</nav>
```

### Атрибути для `<a>`
- href - Визначає URL-адресу посилання.
- target - Визначає, де буде відкрите посилання (_self, _blank, _parent, _top).
- rel - Визначає відношення між поточною сторінкою і посиланням.
### Приклад використання атрибутів у `<a>`

```html
<nav>
  <ul>
    <li><a href="/home">Головна</a></li>
    <li><a href="/about">Про нас</a></li>
    <li><a href="/services">Послуги</a></li>
    <li><a href="/contact">Контакти</a></li>
  </ul>
</nav>
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
