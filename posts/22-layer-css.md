---
title: "22-CSS @layer: керування каскадом стилів"
date: "2025-04-28 00:02"
youtubeUrl: "https://www.youtube.com/watch?v=R3i1RQ8ktKA"
practic: true
---

## CSS @layer

CSS-правило `@layer` дозволяє створювати каскадні шари (cascade layers) для кращого контролю над пріоритетами стилів. Це потужний інструмент для організації CSS-коду та вирішення проблем специфічності селекторів.

### Основні концепції

В основі технології лежать кілька ключових понять:
- **Каскадні шари** — групи стилів з визначеним порядком пріоритетності
- **Порядок шарів** — визначає, які стилі матимуть перевагу при конфліктах
- **Вкладені шари** — дозволяють створювати ієрархічну структуру стилів

#### HTML

```html
<div class="box">
  <p>Текст з шарами стилів</p>
</div>
```

#### CSS

```css
/* Оголошення шарів (порядок важливий) */
@layer base, components, utilities;

/* Стилі в шарі components */
@layer components {
  p {
    color: blue;
    font-weight: bold;
  }
}

/* Стилі поза шарами мають найвищий пріоритет */
p {
  color: purple;
}

/* Стилі в шарі base */
@layer base {
  body .box p {
    color: rgb(211, 188, 9);
    font-size: 2rem;
  }
}
```

### Синтаксис @layer

Існує кілька способів використання `@layer`:

#### 1. Оголошення шарів без стилів

```css
/* Оголошення одного шару */
@layer utilities;

/* Оголошення кількох шарів (порядок важливий) */
@layer reset, base, theme, components, utilities;
```

#### 2. Оголошення шару зі стилями

```css
@layer components {
  .button {
    padding: 0.5em 1em;
    border-radius: 4px;
    background: #1976d2;
    color: white;
  }
  
  .card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1em;
  }
}
```

#### 3. Додавання стилів до існуючого шару

```css
/* Спочатку оголошуємо шари */
@layer base, components, utilities;

/* Пізніше додаємо стилі до шару components */
@layer components {
  .button {
    padding: 0.5em 1em;
  }
}

/* Можна додавати ще стилі до того ж шару */
@layer components {
  .card {
    border: 1px solid #e0e0e0;
  }
}
```

#### 4. Анонімні шари

```css
/* Створення анонімного шару */
@layer {
  p {
    margin-block: 1rem;
  }
}
```
> Основна відмінність анонімного шару від іменованого полягає в тому, що не можна додавати до нього стилі пізніше, оскільки у нього немає імені, за яким можна звернутися. Він існує лише в тому місці, де був оголошений.

### Порядок пріоритетності

Порядок пріоритетності шарів визначається їх першим оголошенням:

```css
/* Шар base має найнижчий пріоритет, utilities - найвищий */
@layer base, components, utilities;

@layer utilities {
  .text-center { text-align: center; }
}

@layer base {
  p { color: black; }
}

@layer components {
  .card { padding: 1rem; }
}
```

Стилі поза шарами завжди мають вищий пріоритет, ніж стилі в будь-якому шарі:

```css
p { color: red; }  /* Вищий пріоритет, застосується цей колір */

@layer theme {
  p { color: blue; }  /* Нижчий пріоритет */
}

```

### Вкладені шари

Можна створювати вкладені шари для більш детальної організації стилів:

#### CSS

```css
@layer framework {
  @layer layout {
    p {
      margin: 0;
    }
  }
  
  @layer typography {
    p {
      font-family: sans-serif;
    }
  }
}

/* Додавання стилів до вкладеного шару */
@layer framework.typography {
  h1 {
    font-size: 2rem;
  }
}
```

### Практичний приклад: організація стилів веб-сайту

#### HTML

```html
<header>
  <h1 class="title">Мій сайт</h1>
  <nav>
    <a href="#" class="nav-link">Головна</a>
    <a href="#" class="nav-link">Про нас</a>
    <a href="#" class="nav-link">Контакти</a>
  </nav>
</header>
<main>
  <article class="card">
    <h2>Стаття про CSS @layer</h2>
    <p>CSS @layer дозволяє краще організувати ваші стилі.</p>
    <button class="btn btn-primary">Читати далі</button>
  </article>
</main>
```

#### CSS

```css
/* Оголошення порядку шарів */
@layer reset, base, layout, components, utilities;

/* Шар reset для скидання стилів браузера */
@layer reset {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
}

/* Шар base для базових стилів */
@layer base {
  body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.5;
    color: #333;
  }
  
  h1, h2, h3 {
    margin-bottom: 0.5em;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1em;
  }
}

/* Шар layout для структури сторінки */
@layer layout {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #f5f5f5;
  }
  
  main {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
}

/* Шар components для компонентів інтерфейсу */
@layer components {
  .card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .btn {
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .btn-primary {
    background: #1976d2;
    color: white;
  }
  
  .nav-link {
    margin-left: 1.5rem;
    font-weight: 500;
  }
  
  .nav-link:hover {
    color: #1976d2;
  }
}

/* Шар utilities для допоміжних класів */
@layer utilities {
  .text-center { text-align: center; }
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
}

/* Стилі поза шарами (найвищий пріоритет) */
.title {
  color: #1976d2; /* Цей стиль перевизначить будь-які стилі для .title в шарах */
}
```

### Використання !important з шарами

Правила з `!important` мають особливу поведінку в контексті шарів:

```css
@layer base, components;

@layer base {
  p { 
    color: blue !important; /* Вищий пріоритет, ніж звичайні стилі в components */
  }
}

@layer components {
  p { 
    color: red !important; /* Нижчий пріоритет, ніж !important в base */
  }
}
```

Для `!important` порядок пріоритетності шарів **інвертується**: шари, оголошені раніше, мають вищий пріоритет для `!important` стилів.

### Переваги використання @layer

1. **Контроль над каскадом** — можливість визначати пріоритети стилів незалежно від специфічності селекторів
2. **Організація коду** — логічне групування стилів за їх призначенням
3. **Спрощення селекторів** — можна використовувати простіші селектори без турботи про їх специфічність
4. **Інтеграція зовнішніх бібліотек** — можливість легко перевизначати стилі зовнішніх бібліотек
5. **Масштабованість** — зручна робота з великими проектами та командна розробка

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
