---
title: "21-Класи в JavaScript"
date: "2025-04-17 00:03"
youtubeUrl: "https://youtube.com/live/KDeUOEwu1zA"
practic: true
---
# Класи в JavaScript

Класи в JavaScript з'явилися в ES6 (2015) і представляють собою синтаксичний цукор над прототипним наслідуванням. Вони дозволяють створювати об'єкти з певним шаблоном, визначаючи властивості та методи, які будуть доступні для всіх екземплярів класу.

## Основи класів

### Оголошення класу

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    return `Привіт, мене звати ${this.name}!`;
  }
  
  getInfo() {
    return `${this.name}, ${this.age} років`;
  }
}

// Створення екземпляра класу
const person1 = new Person("Олена", 25);
console.log(person1.sayHello()); // Привіт, мене звати Олена!
console.log(person1.getInfo()); // Олена, 25 років
```

### Конструктор

Метод `constructor` викликається автоматично при створенні нового екземпляра класу. Він використовується для ініціалізації властивостей об'єкта.

```javascript
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
console.log(book1.title); // Кобзар
console.log(book1.author); // Тарас Шевченко
```

### Методи класу

Методи класу — це функції, які визначені всередині класу і доступні для всіх його екземплярів.

```javascript
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error("Ділення на нуль неможливе");
    }
    return a / b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.multiply(4, 2)); // 8
```

### Статичні методи

Статичні методи викликаються на самому класі, а не на його екземплярах. Вони часто використовуються для створення утилітних функцій, пов'язаних з класом.

```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
  
  static cube(x) {
    return x * x * x;
  }
}

// Виклик статичних методів без створення екземпляра
console.log(MathUtils.square(4)); // 16
console.log(MathUtils.cube(3)); // 27
```

## Наслідування класів

Класи в JavaScript підтримують наслідування через ключове слово `extends`. Це дозволяє створювати нові класи на основі існуючих.

```javascript
// Базовий клас
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} видає звук`;
  }
}

// Похідний клас
class Dog extends Animal {
  constructor(name, breed) {
    // Виклик конструктора батьківського класу
    super(name);
    this.breed = breed;
  }
  
  speak() {
    // Перевизначення методу батьківського класу
    return `${this.name} гавкає`;
  }
  
  getInfo() {
    return `${this.name} - собака породи ${this.breed}`;
  }
}

const dog = new Dog("Рекс", "Вівчарка");
console.log(dog.speak()); // Рекс гавкає
console.log(dog.getInfo()); // Рекс - собака породи Вівчарка
```

### Ключове слово super

Ключове слово `super` використовується для виклику функцій батьківського класу:

```javascript
class Cat extends Animal {
  constructor(name, color) {
    super(name); // Виклик конструктора батьківського класу
    this.color = color;
  }
  
  speak() {
    // Виклик методу батьківського класу з додаванням власної логіки
    return `${super.speak()}, а саме: м'яукає`;
  }
}

const cat = new Cat("Марися", "сірий");
console.log(cat.speak()); // Марися видає звук, а саме: м'яука
```

## Порівняння з функціональним підходом

До появи класів в ES6, об'єктно-орієнтоване програмування в JavaScript реалізовувалося через функції-конструктори та прототипи.

```javascript
// Старий підхід (до ES6)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  return `Привіт, мене звати ${this.name}!`;
};

// Новий підхід (ES6+)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    return `Привіт, мене звати ${this.name}!`;
  }
}
```

## Висновок

Класи в JavaScript надають зручний синтаксис для об'єктно-орієнтованого програмування. Хоча вони є лише синтаксичним цукром над прототипним наслідуванням, вони роблять код більш читабельним і зрозумілим, особливо для розробників, які прийшли з інших мов програмування.

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
