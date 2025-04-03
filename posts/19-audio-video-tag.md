---
title: "19-HTML - audio, video та відео з YouTube"
date: "2025-04-03 00:01"
youtubeUrl: "https://youtube.com/live/rryZ_kq3NA8"
practic: true
---

### Аудіо тег

- `<audio>` - використовується для відтворення аудіо на веб-сторінці.
  Приклад:

  ```html
  <audio controls muted title="Музичний трек Ersatz Bossa від John Deley">
    <source
      src="./media/Ersatz-Bossa-(Sting)-John-Deley-and-the-41-Players.mp3" />
    Ваш браузер не підтримує аудіо тег.
  </audio>
  ```

Основні атрибути:

- `controls` - показує елементи керування (плей, пауза, гучність)
- `autoplay` - автоматичне відтворення
- `loop` - повторення аудіо
- `muted` - вимкнення звуку за замовчуванням

### Відео тег

- `<video>` - використовується для відтворення відео на веб-сторінці.
  Приклад:
  ```html
  <video width="960" height="540" controls title="Дрон над коаліновим кар'єром">
    <source src="./media/videoplayback.mp4" type="video/mp4" />
    Ваш браузер не підтримує відео тег.
  </video>
  ```

  Приклад з субтитрами:
  ```html
  <video width="960" height="540" controls title="Дрон над коаліновим кар'єром">
    <source src="./media/videoplayback.mp4" type="video/mp4" />
    <track src="./media/subtitles.vtt" kind="subtitles" srclang="uk" label="Українська" />
    <track src="./media/subtitles-en.vtt" kind="subtitles" srclang="en" label="English" />
    Ваш браузер не підтримує відео тег.
  </video>
  ```

  Приклад з субтитрами та окремим аудіо:
  ```html
  <div>
    <video width="960" height="540" controls title="Дрон над коаліновим кар'єром" id="drone-video">
      <source src="./media/videoplayback.mp4" type="video/mp4" />
      <track src="./media/subtitles.vtt" kind="subtitles" srclang="uk" label="Українська" />
      <track src="./media/subtitles-en.vtt" kind="subtitles" srclang="en" label="English" />
      Ваш браузер не підтримує відео тег.
    </video>
    <audio id="background-audio" style="display: none;">
      <source src="./media/background-music.mp3" type="audio/mpeg" />
    </audio>
  </div>

  <script>
    const video = document.getElementById('drone-video');
    const audio = document.getElementById('background-audio');

    video.addEventListener('play', () => {
      audio.currentTime = video.currentTime;
      audio.play();
    });

    video.addEventListener('pause', () => {
      audio.pause();
    });

    video.addEventListener('seeked', () => {
      audio.currentTime = video.currentTime;
    });
  </script>
  ```

Основні атрибути відео:

- `width` та `height` - розміри відео плеєра
- `controls` - показує елементи керування
- `poster` - зображення-превʼю до початку відтворення
- `autoplay` - автоматичне відтворення
- `loop` - повторення відео
- `muted` - вимкнення звуку за замовчуванням

### Вбудовування відео з YouTube

- `<iframe>` - використовується для вбудовування відео з YouTube та інших сервісів.
  Приклад:
  ```html
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/TKBEOq9vTUo?si=B5TENVATo6TFblXa"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
  ```

### Практичні поради

1. Завжди додавайте альтернативний текст для аудіо та відео контенту
2. Використовуйте різні формати для кращої сумісності з браузерами
3. Вказуйте розміри для відео, щоб уникнути перекомпонування сторінки
4. Додавайте субтитри для відео за допомогою тегу `<track>`

# Більше інформації та можливостей:

[Самостійно вивчати на MDN (EN)](https://developer.mozilla.org/en-US/curriculum/)

[Дізнатись про курси від автора сайту (UA)](https://learningtogetherua.github.io/courses/)

[Тренувати знання в тестовій системі (UA)](https://testeducatorua.github.io/itest/)

[Приєднатись до Telegram-спільноти та отримати допомогу](https://t.me/profrontendua)

[Підписатись на YouTube автора сайту](https://www.youtube.com/@itmentor)

[Підтримати автора сайту спонсорством (YouTube)](https://www.youtube.com/channel/UCo8KNXmB8Yb_07FzwCL6HgQ/join)
