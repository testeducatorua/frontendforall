// Функція для ініціалізації кнопок копіювання
function initializeCodeBlocks() {
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(block => {
    // Перевіряємо чи вже є кнопки
    if (block.querySelector('.code-header')) {
      return;
    }
    
    // Створюємо контейнер для кнопок та назви мови
    const header = document.createElement('div');
    header.className = 'code-header';
    
    // Додаємо назву мови
    const language = block.getAttribute('data-language');
    const languageLabel = document.createElement('span');
    languageLabel.className = 'language-label';
    languageLabel.textContent = language || 'text';
    
    // Створюємо кнопку копіювання
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = 'COPY';
    
    // Додаємо елементи до контейнера
    header.appendChild(languageLabel);
    header.appendChild(copyButton);
    
    // Додаємо контейнер до блоку коду
    block.appendChild(header);
    
    // Додаємо обробник кліку для копіювання
    copyButton.addEventListener('click', async () => {
      const code = block.querySelector('code').innerText;
      
      try {
        await navigator.clipboard.writeText(code);
        copyButton.innerHTML = 'COPIED!';
        
        // Повертаємо назад напис "COPY" через 2 секунди
        setTimeout(() => {
          copyButton.innerHTML = 'COPY';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
        copyButton.innerHTML = 'ERROR!';
      }
    });
  });
}

// Ініціалізуємо кнопки при першому завантаженні
document.addEventListener('DOMContentLoaded', initializeCodeBlocks);

// Створюємо MutationObserver для відслідковування змін в DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      initializeCodeBlocks();
    }
  });
});

// Починаємо спостерігати за змінами в DOM
observer.observe(document.body, {
  childList: true,
  subtree: true
});
