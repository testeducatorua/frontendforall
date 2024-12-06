---
title: "18-HTML: різні теги"
date: "2024-12-06 00:01"
youtubeUrl: "https://www.youtube.com/watch?v=nWzKZp3Zlbg"
practic: true
---

### Верхній та нижній індекси

- `<sub>` - створює нижній індекс. Часто використовується у хімічних формулах та математичних виразах.
  Приклад:

  ```html
  <span>H<sub>2</sub>O</span>
  <span>CO<sub>2</sub></span>
  ```

- `<sup>` - створює верхній індекс. Використовується для степенів, порядкових числівників тощо.
  Приклад:
  ```html
  <span>x<sup>2</sup></span>
  <span>1<sup>st</sup></span>
  ```

### Контактна інформація

- `<address>` - семантичний тег для розмітки контактної інформації автора документа або організації.
  Приклад:
  ```html
  <address>
    <a href="https://example.com/author">Іван Петренко</a>
    <a href="mailto:ivan@example.com">ivan@example.com</a>
    <a href="https://goo.gl/maps/ukraine">Київ, Україна</a>
  </address>
  ```

### Форматований текст та код

- `<pre>` - зберігає форматування тексту включно з пробілами та переносами рядків. Корисний для відображення ASCII-арту, віршів тощо.
  Приклад:

  ```html
  <pre>
    *     *
   ***   ***
    *     *
  </pre>
  ```

- `<code>` - використовується для відображення фрагментів коду. Часто використовується всередині `<pre>` для збереження форматування.
  Приклад: 
  ```html
  <code>const greeting = "Привіт, світ!";</code>
  ```

- Комбінація `<pre>` та `<code>`:

1. Приклад з JavaScript:

```html
<pre>
    <code>
    function sayHello() {
        console.log("Привіт!");
    }
    </code>
</pre>
```

2. Приклад з HTML:

```html
<pre>
    <code>
    &lt;div class="container"&gt;
        &lt;h1&gt;Заголовок&lt;/h1&gt;
        &lt;p&gt;Параграф тексту&lt;/p&gt;
    &lt;/div&gt;
    </code>
</pre>
```

3. Приклад з CSS:

```html
<pre>
    <code>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    </code>
</pre>
```

> Для конвертації HTML-тегів в екрановані символи можна використовувати онлайн-інструмент: [HTML Entities Converter](https://www.web2generators.com/html-based-tools/online-html-entities-encoder-and-decoder)

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
