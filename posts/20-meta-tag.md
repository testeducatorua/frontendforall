---
title: "20-HTML-meta теги та SEO"
date: "2025-04-10 00:01"
youtubeUrl: "https://www.youtube.com/live/VS_uKsYNaBo"
practic: true
---

# Мета-теги в HTML

- `<meta>` - використовується для передачі метаданих про HTML-документ.
  Приклад:

  ```html
  <!-- Метадані - це дані, які надають додаткову інформацію про веб-сторінку, але не відображаються безпосередньо на ній -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Навчальний сайт про веб-розробку та програмування">
    <meta name="keywords" content="HTML, CSS, JavaScript, програмування, веб-розробка">
    <meta name="author" content="IT Mentor">
    <title>Сайт про веб-розробку</title>
  </head>
  ```

## Основні типи мета-тегів

### 1. Базові мета-теги

- `charset` - визначає кодування символів
  ```html
  <!-- UTF-8 включає в себе майже всі символи світових мов -->
  <meta charset="UTF-8">
  ```

- `viewport` - налаштування відображення для мобільних пристроїв
  ```html
  <!-- width=device-width - встановлює ширину сторінки на ширину пристрою, initial-scale=1.0 - встановлює початковий масштаб -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

- `description` - опис вмісту сторінки (важливо для SEO)
  ```html
  <meta name="description" content="Навчальний ресурс з веб-розробки для початківців та досвідчених">
  ```

- `keywords` - ключові слова для сторінки (не рекомендується для сучасного SEO)
  ```html
  <!-- Застарілий мета-тег, не рекомендується використовувати -->
  <meta name="keywords" content="HTML, CSS, JavaScript, фронтенд, розробка">
  ```
  > Чому не рекомендується? Пошукові системи більше не використовують цей тег для ранжування, оскільки він часто зловживався для спаму. Замість цього, зосередьтеся на якісному контенті та природному використанні ключових слів у тексті.

- `author` - автор контенту
  ```html
  <meta name="author" content="IT Mentor">
  ```
  > Цей мета-тег не впливає на SEO чи відображення сторінки, але може бути корисним для внутрішньої організації та авторських прав. Деякі CMS та інструменти веб-аналітики можуть використовувати цю інформацію.

### 2. Мета-теги для соціальних мереж

#### Open Graph (Facebook, LinkedIn)
```html
<meta property="og:title" content="Назва вашого сайту">
<meta property="og:description" content="Короткий опис вашого сайту">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com">
<meta property="og:type" content="website">
```

#### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@username">
<meta name="twitter:title" content="Назва вашого сайту">
<meta name="twitter:description" content="Короткий опис вашого сайту">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

### 3. Мета-теги для SEO-оптимізації

- `robots` - інструкції для пошукових роботів
  ```html
  <meta name="robots" content="index, follow">  <!-- Індексувати та слідувати за посиланнями -->
  <meta name="robots" content="noindex, nofollow">  <!-- Не індексувати та не слідувати -->
  ```

- `canonical` - вказує основну (канонічну) URL для сторінки
  ```html
  <link rel="canonical" href="https://example.com/page">
  ```
  
  > Канонічний URL - це "офіційна" або "переважна" версія URL для веб-сторінки. Цей тег використовується для вирішення проблеми дублювання контенту, коли одна і та ж сторінка може бути доступна за кількома різними URL-адресами. Наприклад:
  
  - https://example.com
  - https://www.example.com
  - https://example.com/index.html
  
  Всі ці URL можуть вести до однієї і тієї ж сторінки. Використання канонічного тегу допомагає пошуковим системам зрозуміти, яка версія URL є основною, що покращує SEO та запобігає проблемам з дублюванням контенту. Це особливо корисно для:
  
  1. Об'єднання сигналів ранжування для подібних або дубльованих сторінок.
  2. Спрощення відстеження аналітики для однієї сторінки.

## Практичні поради

1. Завжди використовуйте UTF-8 кодування для міжнародної підтримки
2. Обов'язково додавайте мета-тег viewport для адаптивності на мобільних пристроях
3. Створюйте унікальні та інформативні description для кожної сторінки
4. Додавайте Open Graph мета-теги для кращого відображення при поширенні в соціальних мережах


# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
