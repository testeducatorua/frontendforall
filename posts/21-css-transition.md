---
title: "21-CSS transition: плавні анімації без JavaScript"
date: "2025-04-17 00:02"
youtubeUrl: "https://www.youtube.com/live/KDeUOEwu1zA"
practic: true
---

## CSS Transition

CSS-властивість `transition` дозволяє створювати плавні анімації зміни стилів елементів без використання JavaScript. Вона ідеально підходить для ефектів наведення, натискання, появи чи зникнення елементів.

### Основні концепції

В основі технології лежать два ключові поняття:
- **Властивість, що анімується** — наприклад, `color`, `opacity`, `transform`
- **Тригер зміни** — наведення, фокус, додавання/видалення класу тощо

#### HTML

```html
<button class="transition-btn">Наведіть на мене</button>
```

#### CSS

```css
.transition-btn {
  background: #1976d2;
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
.transition-btn:hover {
  background: #004ba0;
}
```

### Синтаксис transition

Властивість `transition` включає такі параметри:

- **transition-property** — які властивості анімуються
- **transition-duration** — тривалість анімації
- **transition-timing-function** — тип кривої анімації (прискорення/уповільнення)
- **transition-delay** — затримка перед стартом анімації
- **transition-behavior** — визначає, чи будуть запускатися переходи для властивостей, анімаційна поведінка яких є дискретною

#### CSS

```css
.selector {
  /* Які властивості анімуються */
  transition-property: background-color, display;
  
  /* Тривалість анімації для кожної властивості */
  transition-duration: 0.3s, 0.5s;
  
  /* Крива анімації */
  transition-timing-function: ease, linear;
  
  /* Затримка перед стартом анімації */
  transition-delay: 0s, 0.1s;
  
  /* Поведінка переходу (нова властивість) */
  transition-behavior: normal, allow-discrete;
}

/* Скорочений запис (без transition-behavior) */
.selector {
  transition: background-color 0.3s ease 0s, display 0.5s linear 0.1s;
}
```

### Анімація кількох властивостей

Можна анімувати одразу кілька властивостей:
#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  width: 100px;
  height: 100px;
  background: #ff9800;
  transition: width 0.3s, height 0.3s, background-color 0.5s;
}
.box:hover {
  width: 140px;
  height: 140px;
  background: #e64a19;
}
```

### Анімація дискретних властивостей з transition-behavior

Властивість `transition-behavior` дозволяє анімувати дискретні властивості, які звичайно не можна анімувати, наприклад `display` або `visibility`.

#### HTML

```html
<button id="toggle-btn">Показати/сховати</button>
<div class="card">
  <h3>Картка з анімацією display</h3>
  <p>Завдяки transition-behavior можна анімувати появу та зникнення елемента.</p>
</div>
```

#### CSS

```css
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 20px 0;
  max-width: 400px;
  display: block;

  opacity: 1;
  transform: translateY(0);
  transition: opacity 2s, transform 2s; 
  /* transition: opacity 2s, transform 2s, display 0.5s allow-discrete;  */
}

.card.hidden {
  opacity: 0;
  transform: translateY(-20px);
  /* display: none; */

}
```
> Завдяки `transition-behavior: allow-discrete` елемент спочатку анімує опасіті та трансформацію, а потім змінює `display`. Це дозволяє створити плавну анімацію появи та зникнення, що раніше було можливо лише з допомогою складних JavaScript-рішень.

#### JS

```js
const toggleBtn = document.getElementById('toggle-btn');
const card = document.querySelector('.card');

toggleBtn.addEventListener('click', () => {
  card.classList.toggle('hidden');
});
```



### Переваги CSS transition

1. Простота — не потрібен JavaScript для більшості анімацій
2. Висока продуктивність і апаратне прискорення
3. Легко комбінувати з іншими CSS-властивостями
4. Підтримка у всіх сучасних браузерах

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
