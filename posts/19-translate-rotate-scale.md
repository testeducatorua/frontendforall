---
title: "19-CSS - transform, rotate, scale як окремі властивості"
date: "2025-04-03 00:02"
youtubeUrl: "https://youtube.com/live/rryZ_kq3NA8"
practic: true
---

## Окремі властивості трансформації в CSS

Замість використання властивості `transform`, сучасний CSS дозволяє застосовувати translate, rotate та scale як окремі властивості. Це робить код більш читабельним та полегшує анімацію.

### Властивість translate

Переміщує елемент без впливу на інші елементи:

```html
<div class="box move">Переміщення</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out 0.75s;
}
/* .move{
    background-color: blueviolet;
}
.spin{
    background-color: rgb(6, 95, 65);
}
.grow{
    background-color: rgb(56, 142, 142);
}
.combined{
    background-color: black;
}
.animated-box{
    background-color: brown;
} */
/* Нова властивість */
.move {
  translate: 100px 50px;
}

/* Старий спосіб */
.move-old {
  transform: translate(100px, 50px);
}
```

### Властивість rotate

Обертає елемент навколо точки:

```html
<div class="box spin">Обертання</div>
```

```css
/* Нова властивість */
.spin {
  rotate: 45deg;
}

/* Старий спосіб */
.spin-old {
  transform: rotate(45deg);
}
```

### Властивість scale

Змінює розмір елемента:

```html
<div class="box grow">Масштабування</div>
```

```css
/* Нова властивість */
.grow {
  scale: 1.5;
}

/* Старий спосіб */
.grow-old {
  transform: scale(1.5);
}
```

### Комбінування властивостей

Можна використовувати всі властивості разом:

```html
<div class="box combined">Комбінація</div>
```

```css
.combined {
  translate: 100px 0;
  rotate: 45deg;
  scale: 1.2;
}

/* Еквівалент у старому стилі */
.combined-old {
  transform: translate(100px, 0) rotate(45deg) scale(1.2);
}
```

### Переваги окремих властивостей

1. Кращий контроль над анімаціями
2. Легше читати та розуміти код
3. Можливість незалежно анімувати кожну властивість
4. Простіше змінювати окремі значення через JavaScript

### Приклад з анімацією

```css
.animated-box {
  animation: move-and-spin 2s infinite;
}

@keyframes move-and-spin {
  to {
    translate: 200px 0;
    rotate: 360deg;
    scale: 1.5;
  }
}
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
