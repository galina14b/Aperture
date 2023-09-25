const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav');

hamburger.addEventListener('click', function (event) {
  navList.classList.toggle('hidden');
  hamburger.classList.toggle('open');
})

