---
title: "18-CSS: властивість clip-path"
date: "2024-12-06 00:02"
youtubeUrl: "https://www.youtube.com/watch?v=nWzKZp3Zlbg"
practic: true
---

## Властивість clip-path в CSS

Властивість `clip-path` створює обрізану область, яка визначає яку частину елемента потрібно показувати. Частини, що знаходяться за межами цієї області, будуть приховані.

### Основні форми clip-path

1. Коло (circle):

```html
<div class="circle-image">
    <img src="photo.jpg" alt="Кругла фотографія">
</div>
```

```css
.circle-image {
    width: 300px;
    height: 300px;
}

.circle-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
}
```

2. Еліпс (ellipse):

```html
<div class="avatar-container">
    <img src="avatar.jpg" alt="Аватар користувача">
</div>
```

```css
.avatar-container img {
    width: 200px;
    height: 250px;
    clip-path: ellipse(40% 50% at 50% 50%);
}
```

3. Багатокутники (polygon):

```html
<div class="card">
    <img src="landscape.jpg" alt="Пейзаж">
</div>
```

```css
/* Шестикутник */
.card img {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Ромб */
.diamond img {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* Трикутник */
.triangle img {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Зірка */
.star img {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
```

4. Складні форми (path):

```html
<div class="wave-header">
    <div class="content">
        <h1>Хвилястий заголовок</h1>
    </div>
</div>
```

```css
.wave-header {
    background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
    clip-path: path('M0,0 L100,0 L100,85 C75,100 25,100 0,85 L0,0 Z');
    height: 300px;
}
```

5. Анімація форм:

```html
<div class="morphing-shape"></div>
```

```css
.morphing-shape {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    animation: morph 8s infinite;
}

@keyframes morph {
    0% {
        clip-path: circle(50% at 50% 50%);
    }
    25% {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    50% {
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
    75% {
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
    100% {
        clip-path: circle(50% at 50% 50%);
    }
}
```

> Для створення складних форм можна використовувати онлайн-інструмент: [Clippy - CSS clip-path maker](https://bennettfeely.com/clippy/)

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
