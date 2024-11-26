---
title: "02-Твій перший код: CSS "
date: "2024-07-30 00:02"
youtubeUrl: 'https://youtube.com/live/0tIg3aHPF5c'
---

## Додавання селекторів по типу елементів

Одним з багатьох варіантів css-селекторів для створення стильових правил є одноіменні до елементів селектори

### Код

```css
/* типовий приклад */
body {
}
header {
}
hr {
}
img {
}
main {
}
section {
}
h1 {
}
p {
}
a {
}
a:hover {
}
footer {
}
footer p {
}
```

```css
/* приклад з використанням css-нестінгу */
body {
  /* Стилі для тіла документа можуть бути тут */
  header {
    /* Стилі для заголовка */
    img {
      /* Стилі для зображення */
    }
  }
  hr {
    /* Стилі для розділювача */
  }
  main {
    /* Стилі для головної частини сторінки */
    section {
      /* Стилі для секції */
      h1 {
        /* Стилі для заголовку першого рівня */
      }
      p {
        /* Стилі для параграфу */
        a {
          /* Стилі для гіперпосилання */
          &:hover {
            /* Стилі для стану hover посилання */
          }
        }
      }
    }
  }
  footer {
    /* Стилі для футера */
    p {
      /* Стилі для параграфу в футері */
    }
  }
}
```

## Стилі для тіла документа

### Код

```css
body {
  background-color: #000;
  color: antiquewhite;
}
```

## Стилі для заголовка

### Код

```css
header {
  max-width: 1110px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}
```

## Стилі для зображення

### Код

```css
img {
  border-radius: 50%;
  width: 20%;
}
```

## Стилі для розділювача

### Код

```css
hr {
  max-width: 1110px;
  margin-bottom: 20px;
}
```

## Стилі для головної частини сторінки

### Код

```css
main {
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
}
```

## Стилі для секції

### Код

```css
section {
  background-color: rgb(31, 31, 28);
  padding: 20px;
}
```

## Стилі для заголовку першого рівня

### Код

```css
h1 {
  text-transform: uppercase;
  font-size: 48px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
```

## Стилі для параграфу

### Код

```css
p {
  font-size: 18px;
  line-height: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: justify;
}
```

## Стилі для гіперпосилання

### Код

```css
a {
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-weight: 900;
  transition: color 0.5s ease-in-out;
}
```

## Стилі для стану hover посилання

### Код

```css
a:hover {
  color: rgb(124, 215, 240);
}
```

## Стилі для футера

### Код

```css
footer {
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
}
```

## Стилі для параграфу в футері

### Код

```css
footer p {
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
```

## Повний перелік стилів з нестінгом

### Код

```css
body {
  /* Стилі для тіла документа можуть бути тут */
  background: #000;
  color: antiquewhite;

  header {
    /* Стилі для заголовка */
    max-width: 1110px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    img {
      /* Стилі для зображення */
      border-radius: 50%;
      width: 20%;
    }
  }
  hr {
    /* Стилі для розділювача */
    max-width: 1110px;
    margin-bottom: 20px;
  }
  main {
    /* Стилі для головної частини сторінки */
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    section {
      /* Стилі для секції */
      background-color: rgb(31, 31, 28);
      padding: 20px;
      h1 {
        /* Стилі для заголовку першого рівня */
        text-transform: uppercase;
        font-size: 48px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }
      p {
        /* Стилі для параграфу */
        font-size: 18px;
        line-height: 24px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: justify;
        a {
          /* Стилі для гіперпосилання */
          text-transform: uppercase;
          text-decoration: none;
          color: inherit;
          font-weight: 900;
          transition: color 0.5s ease-in-out;
          &:hover {
            /* Стилі для стану hover посилання */
            color: rgb(124, 215, 240);
          }
        }
      }
    }
  }

  footer {
    /* Стилі для футера */
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    p {
      /* Стилі для параграфу в футері */
      font-size: 24px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
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
