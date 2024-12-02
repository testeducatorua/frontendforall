---
title: "05-CSS: селектори бувають різні"
date: "2024-08-08 00:02"
youtubeUrl: 'https://youtube.com/live/XV_0DsVZMuY'
practic: true
---

## Введення

CSS-селектори дозволяють вибирати HTML-елементи для стилізації. Існує багато різних типів селекторів, кожен з яких має своє призначення.

## Основні типи селекторів

### Селектори тегів (елементів)

Вибирають всі елементи заданого типу.

```css
/* Стилізує всі абзаци <p> */
p {
  color: blue;
}
```

```html
<p>Це абзац, стилізований за допомогою селектора тегу.</p>
```

### Селектори класів

Вибирають елементи, що мають заданий клас.

```css
/* Стилізує всі елементи з класом .highlight */
.highlight {
  background-color: yellow;
}
```

```html
<p class="highlight">Це абзац з класом .highlight.</p>
```

### Комбіновані селектори

Вибирають елементи, що відповідають кільком умовам.

```css
/* Стилізує всі <p> з класом .highlight */
p.highlight {
  color: red;
}
```

```html
<p class="highlight">Це абзац з класом .highlight.</p>
```

### Селектори атрибутів

Вибирають елементи на основі наявності або значення атрибутів.

```css
/* Стилізує всі <a> з атрибутом title */
a[title] {
  text-decoration: underline;
}

/* Стилізує всі <input> з типом "text" */
input[type="text"] {
  border: 1px solid #000;
}
```

```html
<a title="Посилання" href="#">Це посилання з атрибутом title.</a>
<input type="text" value="Це текстове поле з атрибутом type='text'">
```

## Селектори нащадків та дітей

### Селектори нащадків

Вибирають елементи, що є нащадками заданого елемента.

```css
/* Стилізує всі <span> всередині <div> */
div span {
  color: green;
}
```

```html
<div>Це div з <span>вкладеним span</span>.</div>
```

### Селектори дітей

Вибирають елементи, що є безпосередніми дітьми заданого елемента.

```css
/* Стилізує всі <span>, що є дітьми <div> */
div > span {
  color: purple;
}
```

```html
<div>Це div з <span>вкладеним span</span>.</div>
```

## Псевдокласи та псевдоелементи

### Псевдокласи

Вибирають елементи у визначених станах.

```css
/* Стилізує посилання при наведенні */
a:hover {
  color: red;
}

/* Стилізує перший дочірній елемент <li> */
li:first-child {
  font-weight: bold;
}
```

```html
<a href="#">Наведіть на це посилання</a>
<ul>
  <li>Перший елемент списку</li>
  <li>Другий елемент списку</li>
</ul>
```

### Псевдоелементи

Вибирають частини елементів.

```css
/* Стилізує першу літеру абзацу */
p::first-letter {
  font-size: 2em;
  color: red;
}

/* Стилізує перед вмістом елемента */
p::before {
  content: "Note: ";
  font-weight: bold;
}
```

```html
<p>Це абзац з псевдоелементом ::first-letter.</p>
<p>Це абзац з псевдоелементом ::before.</p>
```

## Комбіновані приклади

### Складений селектор

```css
/* Стилізує <span> з класом .highlight всередині <div> */
div span.highlight {
  color: orange;
}
```

```html
<div>Це div з <span class="highlight">вкладеним span з класом .highlight</span>.</div>
```

### Селектор атрибутів з псевдокласом

```css
/* Стилізує <input> з типом "text" при фокусі */
input[type="text"]:focus {
  border-color: blue;
}
```

```html
<input type="text" value="Наведіть фокус на це текстове поле">
```

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
