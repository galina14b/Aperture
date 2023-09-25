const menuNav = document.querySelector('.header__nav');
const hamburger = document.querySelector('.hamburger');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      if (!menuNav.classList.contains('hidden')) {
        menuNav.classList.add('hidden');
        hamburger.classList.remove("open");
      }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    });
});