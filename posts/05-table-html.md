---
title: "05-HTML: елементи для таблиць"
date: "2024-08-08 00:01"
youtubeUrl: 'https://youtube.com/live/XV_0DsVZMuY'
practic: true
---


## Основні теги для створення таблиць

Для створення таблиць в HTML використовуються наступні теги:

- `<table>` - Визначає таблицю.
- `<tr>` - Визначає рядок таблиці.
- `<td>` - Визначає комірку таблиці.
- `<th>` - Визначає заголовочну комірку таблиці.
- `<thead>` - Визначає блок заголовків таблиці.
- `<tbody>` - Визначає блок основного вмісту таблиці.
- `<tfoot>` - Визначає блок нижнього колонтитулу таблиці.

### Приклад структури таблиці

```html
<table border="1">
  <thead>
    <tr>
      <th>Заголовок 1</th>
      <th>Заголовок 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Комірка 1</td>
      <td>Комірка 2</td>
    </tr>
    <tr>
      <td>Комірка 3</td>
      <td>Комірка 4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Нижній колонтитул 1</td>
      <td>Нижній колонтитул 2</td>
    </tr>
  </tfoot>
</table>
```

## Атрибути тегів таблиць

Теги таблиць мають різноманітні атрибути для налаштування вигляду та поведінки таблиці.

### Атрибути для `<th>` та `<td>`

- `colspan` - Визначає кількість стовпців, які має охоплювати комірка.
- `rowspan` - Визначає кількість рядків, які має охоплювати комірка.

### Приклад використання атрибутів у `<th>` та `<td>`

```html
<table border="1">
  <thead>
    <tr>
      <th colspan="2">Об'єднаний заголовок</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Об'єднана комірка</td>
      <td>Комірка 1</td>
    </tr>
    <tr>
      <td>Комірка 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Нижній колонтитул 1</td>
      <td>Нижній колонтитул 2</td>
    </tr>
  </tfoot>
</table>
```

## Приклади

### Проста таблиця

```html
<table border="1">
  <thead>
    <tr>
      <th>Ім'я</th>
      <th>Прізвище</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Іван</td>
      <td>Петренко</td>
    </tr>
    <tr>
      <td>Олена</td>
      <td>Ковальчук</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Всього</td>
      <td>2 записи</td>
    </tr>
  </tfoot>
</table>
```



# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
