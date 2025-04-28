---
title: "22-HTML тег search: семантичний контейнер для пошуку"
date: "2025-04-28 00:01"
youtubeUrl: "https://www.youtube.com/watch?v=R3i1RQ8ktKA"
practic: true
---

# HTML тег search: семантичний контейнер для пошуку

**HTML тег `<search>`** — це новий семантичний елемент, який представляє контейнер для частин документа або додатку, пов'язаних з функціональністю пошуку або фільтрації. Цей елемент семантично ідентифікує призначення свого вмісту як такого, що має можливості пошуку або фільтрації.

## Основи використання тегу `<search>`

### 1. Пошук на веб-сайті

```html
<header>
  <h1>Назва сайту</h1>
  <search>
    <form action="">
      <label for="site-search">Пошук на сайті</label>
      <input type="search" id="site-search" name="q" />
      <button type="submit">Шукати</button>
    </form>
  </search>
</header>
```

- Тег `<search>` семантично позначає область пошуку
- Елемент `<form>` всередині обробляє відправку запиту
- Тип поля вводу `type="search"` спеціально призначений для пошукових запитів

### 2. Пошук у веб-додатку з JavaScript

```html
<search>
  <label>
    Знайти та відфільтрувати
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    Точні збіги
  </label>

  <section>
    <h3>Результати:</h3>
    <ul id="results">
      <!-- вміст результатів пошуку -->
    </ul>
    <output id="no-results">
      <!-- вміст для випадку відсутності результатів -->
    </output>
  </section>
</search>
```

- Для пошуку з JavaScript не обов'язково використовувати `<form>`
- Можна додавати додаткові елементи керування фільтрацією
- Результати пошуку відображаються динамічно

### 3. Кілька пошукових блоків на одній сторінці

```html
<body>
  <header>
    <h1>Сайт оренди автомобілів</h1>
    <search title="Сайт">
      <!-- пошук по всьому сайту -->
      <form action="/search/">
        <label for="global-search">Пошук на сайті</label>
        <input type="search" id="global-search" name="q" />
        <button type="submit">Шукати</button>
      </form>
    </search>
  </header>
  <main>
    <h2>Автомобілі доступні для оренди</h2>
    <search title="Автомобілі">
      <h3>Фільтр результатів</h3>
      <!-- фільтри для пошуку автомобілів -->
      <form id="car-filter">
        <label>
          Марка:
          <select name="brand">
            <option value="">Всі</option>
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
          </select>
        </label>
        <button type="submit">Застосувати</button>
      </form>
    </search>
    <article>
      <!-- результати пошуку автомобілів -->
    </article>
  </main>
</body>
```

- Атрибут `title` допомагає розрізняти різні пошукові блоки
- Кожен блок `<search>` має своє призначення та контекст
- Можна комбінувати різні типи пошуку на одній сторінці

## 4. Приклад стилізації пошукового блоку

#### HTML

```html
<search class="styled-search">
  <form action="/search/">
    <label for="styled-search">Пошук товарів</label>
    <div class="search-container">
      <input type="search" id="styled-search" name="q" placeholder="Введіть назву товару..." />
      <button type="submit">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34 6.5 6.5 0 1 0-6.5 6.5c2.23 0 4.14-.93 5.34-2.48l.27.28v.79l5 4.99L21 17l-5.5-5z" />
        </svg>
      </button>
    </div>
  </form>
</search>
```

#### CSS

```css
.styled-search {
  max-width: 500px;
  margin: 2em auto;
}

.styled-search label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: 500;
}

.search-container {
  display: flex;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.search-container input[type="search"] {
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  outline: none;
}

.search-container input[type="search"]::placeholder {
  color: #9e9e9e;
}

.search-container button {
  background: #1976d2;
  color: white;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  transition: background 0.2s;
}

.search-container button:hover {
  background: #1565c0;
}

.search-container svg {
  fill: currentColor;
}
```

## 5. Приклад з обробкою пошуку через JavaScript

#### HTML

```html
<search id="js-search">
  <label for="js-query">Швидкий пошук</label>
  <input type="search" id="js-query" placeholder="Почніть вводити..." />
  <div id="js-results" class="results"></div>
</search>
```

#### JavaScript

```js
const searchInput = document.getElementById('js-query');
const resultsContainer = document.getElementById('js-results');
const searchData = [
  'JavaScript', 'HTML', 'CSS', 'React', 'Vue', 'Angular', 
  'Node.js', 'TypeScript', 'Webpack', 'GraphQL'
];

// Це приклад фільтрації обмеженої порції інформації на клієнтській стороні
// Підходить для невеликих наборів даних, які вже завантажені на сторінку
searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  
  // Не показуємо результати для надто коротких запитів
  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }
  
  // Знаходимо перший елемент, який відповідає запиту - в нашому прикладі буде або 0, або 1 елемент
  const foundItem = searchData.find(item => 
    item.toLowerCase().includes(query)
  );
  
  // Відображаємо результат або повідомлення про його відсутність
  if (foundItem) {
    // Якщо знайдено елемент, показуємо його
    resultsContainer.innerHTML = `<div class="result-item">${foundItem}</div>`;
  } else {
    // Якщо нічого не знайдено
    resultsContainer.innerHTML = '<div class="no-results">Нічого не знайдено</div>';
  }
});
```

#### CSS

```css
#js-search {
  position: relative;
  max-width: 300px;
}

#js-search input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #eee;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.result-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
}

.result-item:hover {
  background: #f5f5f5;
}

.no-results {
  padding: 10px;
  color: #888;
  text-align: center;
}
```

## Доступність (accessibility)

Елемент `<search>` визначає орієнтир (landmark) пошуку для технологій допомоги. Це усуває необхідність додавати `role="search"` до елемента `<form>`.

```html
<!-- Старий підхід -->
<form role="search">
  <!-- вміст форми пошуку -->
</form>

<!-- Новий підхід з тегом search -->
<search>
  <form>
    <!-- вміст форми пошуку -->
  </form>
</search>
```

## Практичні поради

1. Використовуйте тег `<search>` для семантичного позначення області пошуку, а не для відображення результатів пошуку.
2. Результати пошуку повинні відображатися як частина основного вмісту веб-сторінки.
3. Для пошуку з формою використовуйте комбінацію `<search>` і `<form>`.
4. Для JavaScript-пошуку без відправки форми можна використовувати `<search>` без `<form>`.
5. Якщо на сторінці кілька пошукових блоків, додавайте атрибут `title` для їх розрізнення.
6. Пам'ятайте: тег `<search>` підтримується в сучасних браузерах (Chrome 118+, Edge 118+, Firefox 118+, Safari 17.0+).

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
