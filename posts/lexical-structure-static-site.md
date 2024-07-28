---
title: 'Лексична структура статичного багатосторінкового сайту'
date: '2024-07-28 00:01'
---

## Файлова структура
- **index.html**: Головна сторінка.
- **about.html**: Сторінка про нас.
- **contact.html**: Контактна сторінка.
- **/css/**: Тека(каталог, директорія) для CSS файлів.
  - `styles.css`: Основний файл стилів.
- **/js/**: Тека(каталог, директорія) для JavaScript файлів.
  - `scripts.js`: Основний файл скриптів.
- **/images/**: Тека(каталог, директорія) для зображень.
- **/fonts/**: Тека(каталог, директорія) для шрифтів.

## HTML-структура
HTML-сторінки мають заголовок (head) і тіло (body), які включають елементи такі як заголовки, параграфи, зображення та посилання.

### Приклад HTML-структури
```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Вітаємо на нашому сайті</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Головна</a></li>
            <li><a href="about.html">Про нас</a></li>
            <li><a href="contact.html">Контакти</a></li>
        </ul>
    </nav>
    <main>
        <section>
            <h2>Основний контент</h2>
            <p>Це головна частина контенту на сторінці.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Наш сайт. Всі права захищені.</p>
    </footer>
</body>
</html>
```

## CSS-структура
CSS файли стилізують HTML елементи через визначення правил, які містять селектори та властивості.

### Приклад CSS-структури
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}
```

## JavaScript-структура
JavaScript використовується для додавання інтерактивності до сторінок.

### Приклад JavaScript-структури
```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сторінка повністю завантажена.');
    // Можливість додавання подій, маніпуляцій з DOM тощо
});
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
