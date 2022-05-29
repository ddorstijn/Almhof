const menuToggle = document.getElementById('main-menu__toggle');

menuToggle?.addEventListener('click', function () {  
    menuToggle.setAttribute(
      'aria-expanded', 
      menuToggle.getAttribute('aria-expanded') === 'true' 
        ? 'false' 
        : 'true'
    );
});

const languageToggle = document.getElementById('language-selector__toggle');

languageToggle?.addEventListener('click', function () {  
    languageToggle.setAttribute(
      'aria-expanded', 
      languageToggle.getAttribute('aria-expanded') === 'true' 
        ? 'false' 
        : 'true'
    );
});