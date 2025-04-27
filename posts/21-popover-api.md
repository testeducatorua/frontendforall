---
title: "21-Popover API: сучасні спливаючі підказки в HTML"
date: "2025-04-17 00:01"
youtubeUrl: "https://youtube.com/live/KDeUOEwu1zA"
practic: true
---

# Popover API: сучасний спосіб створення підказок і діалогів

**Popover API** — це новий стандарт HTML, що дозволяє легко створювати спливаючі елементи (підказки, меню, діалоги) без складних скриптів. Він працює через атрибут `popover` для будь-якого HTML-елемента та забезпечує зручне керування їхнім відкриттям і закриттям.

## Основи використання Popover API

### 1. Відкриття

```html
<button popovertarget="my-pop">Показати підказку</button>
<div id="my-pop" popover>Це сучасна підказка, керована Popover API!</div>
```

- Атрибут `popover` робить елемент спливаючим.
- Атрибут `popovertarget` на кнопці вказує, який popover відкривати.

### 2. Відкриття та закриття

```html
<button popovertarget="pop">Відкрити popover</button>
<div id="pop" popover>
  <button popovertarget="pop" popovertargetaction="hide">Закрити</button>
  Привіт з Popover!
</div>
```

- Кнопка з popovertarget відкриває popover без жодного JavaScript.
- Кнопка всередині popover із popovertargetaction="hide" закриває його.
- Атрибут `popovertargetaction="hide"` дозволяє закривати popover з кнопки.

### 3.Приклад зі стилізацією через `[popover]`

#### HTML

```html
<button popovertarget="styled-pop">Відкрити стильний popover</button>
<div id="styled-pop" popover>
  <button popovertarget="styled-pop" popovertargetaction="hide">Закрити</button>
  Я стильний popover!
</div>
```

#### CSS

```css
[popover] {
  padding: 1em 2em;
  border-radius: 12px;
  background: #222;
  color: #fff;
  box-shadow: 0 4px 24px #0005;
  border: none;
  font-size: 1.1em;
  text-align: center;
}
```

### 4. Приклад роботи з подіями `beforetoggle`, `toggle`

#### HTML

```html
<button popovertarget="event-pop">Показати popover з подіями</button>
<div id="event-pop" popover>
  <button popovertarget="event-pop" popovertargetaction="hide">Закрити</button>
  Popover з подіями!
</div>
```

#### JS

```js
const pop = document.getElementById("event-pop");
let openCount = 0;
pop.addEventListener("beforetoggle", (e) => {
  console.log("beforetoggle:", e.newState); // "open" або "closed"
});
pop.addEventListener("toggle", (e) => {
  console.log("toggle:", e.newState); // "open" або "closed"
  if (e.newState === "open") {
    openCount++;
    console.log("Відкрито popover разів:", openCount);
  }
});
```

## 5. Приклад: бургер-меню через `popover`

#### HTML

```html
<button
  id="burger-anchor"
  popovertarget="burger-menu"
  style="font-size:2em; background:none; border:none; cursor:pointer;">
  &#9776;
</button>
<div id="burger-menu" popover popover-anchor="burger-anchor">
  <nav>
    <a href="#" class="menu-link">Головна</a>
    <a href="#" class="menu-link">Про сайт</a>
    <a href="#" class="menu-link">Контакти</a>
  </nav>
</div>
```

#### CSS

```css
#burger-menu[popover] {
  margin-top: 0.5em;
  min-width: 160px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 32px #0003;
  border: 1px solid #e0e0e0;
  padding: 0.5em 0;
  animation: fadein 0.2s;
  margin-left: 44px;
  margin-top: 44px;
}
.menu-link {
  display: block;
  padding: 0.9em 1.5em;
  text-decoration: none;
  color: #222;
  font-size: 1.08em;
  transition: background 0.18s, color 0.18s;
}
.menu-link:hover {
  background: #1976d2;
  color: #fff;
}
#burger-anchor {
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s;
}
#burger-anchor:hover {
  background: #f0f4fa;
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Практичні поради

1. Використовуйте popover для підказок, контекстних меню, діалогів, але не для складних модальних вікон із багатьма сценаріями.
2. Додавайте aria-атрибути для кращої доступності, якщо popover містить важливий контент.
3. Стилізуйте popover через CSS (селектор `[popover]`).
4. Пам'ятайте: Popover API підтримується у сучасних браузерах (Chrome 114+, Edge 114+, Safari 17.4+, Firefox Nightly).

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
