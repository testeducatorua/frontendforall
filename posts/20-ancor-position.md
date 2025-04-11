---
title: "20-CSS-anchor positioning як сучасний спосіб позиціонування"
date: "2025-04-10 00:02"
youtubeUrl: "https://www.youtube.com/live/VS_uKsYNaBo"
practic: true
---

## CSS Anchor Positioning

Модуль CSS anchor positioning визначає функції, які дозволяють прив'язувати елементи один до одного. Певні елементи визначаються як якірні елементи; елементи з прив'язкою до якоря можуть потім мати свій розмір і положення встановлені на основі розміру та розташування якірних елементів, до яких вони прив'язані.

### Основні концепції

В основі технології лежать два ключові поняття:
- **Якір (Anchor)** - елемент, який слугує точкою відліку
- **Ціль (Target)** - елемент, який позиціонується відносно якоря

```html
<button class="anchor">Показати підказку</button>
<div class="tooltip">Це підказка</div>
```

```css
.anchor {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.tooltip {
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 4px;
  width: 200px;
}
```

### Створення якоря

Щоб зробити елемент якорем, використовуємо властивість `anchor-name`:

```css
.anchor {
  /* Призначаємо ім'я якорю, завжди з префіксом -- */
  anchor-name: --tooltip-anchor;
}
```

### Прив'язка цільового елемента до якоря

Щоб приєднати елемент до якоря, використовуємо властивості `position: absolute` та `position-anchor`:

```css
.tooltip {
  position: absolute;
  position-anchor: --tooltip-anchor;
}
```

### Позиціонування відносно якоря

Для вказівки місця розташування відносно якоря використовуємо властивість `position-area`:

```css
/* Розміщення підказки внизу від кнопки */
.tooltip {
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: end start;
}

/* Розміщення підказки вгорі від кнопки */
.tooltip-top {
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: start center;
}
```

### Запобігання виходу за межі екрану

Властивість `position-try-fallbacks` дозволяє вказати альтернативні позиції, якщо основна позиція виходить за межі екрану:

```css
.tooltip {
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: end start;
  position-try-fallbacks: flip;
}
```

### Комбінування з іншими властивостями

Можна комбінувати anchor positioning з іншими CSS-властивостями для створення складних інтерфейсів:

```css
.tooltip {
  position: absolute;
  position-anchor: --tooltip-anchor;
  position-area: end start;
  position-try-fallbacks: flip;
  
  /* Додаємо анімацію появи */
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip.show {
  opacity: 1;
}
```

### Використання функцій anchor() та anchor-size()

CSS також надає функції для доступу до позиції та розміру якоря:

```css
.dropdown {
  position: absolute;
  position-anchor: --button-anchor;
  
  /* Встановлюємо ширину рівною ширині якоря */
  width: anchor-size(--button-anchor, width);
  
  /* Розміщуємо на 10px нижче якоря */
  top: calc(anchor(--button-anchor, bottom) + 10px);
  left: anchor(--button-anchor, left);
}
```

### Приклад з адаптивним меню

```html
<nav>
  <button class="menu-button">Меню</button>
  <ul class="dropdown-menu">
    <li><a href="#">Головна</a></li>
    <li><a href="#">Про нас</a></li>
    <li><a href="#">Контакти</a></li>
  </ul>
</nav>
```

```css
.menu-button {
  anchor-name: --menu-anchor;
}

.dropdown-menu {
  position: absolute;
  position-anchor: --menu-anchor;
  position-area: end start;
  position-try-fallbacks: flip, resize;
  
  display: none;
}

.menu-button:focus + .dropdown-menu,
.dropdown-menu:hover {
  display: block;
}
```

### Переваги CSS Anchor Positioning

1. Автоматично адаптується до змін розміру вікна
2. Може автоматично перепозиціонуватися, щоб залишатися видимим
3. Більш доступний та семантичний підхід до створення інтерфейсів
4. Спрощує реалізацію адаптивних інтерфейсів без додаткового коду

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
