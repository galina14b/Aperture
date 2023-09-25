const arrow = document.querySelector('.arrow');
const header = document.querySelector('.header');


window.addEventListener('scroll', function () {
  const height = document.documentElement.scrollTop
  if (height > 900) {
    arrow.classList.add('showArrow')
  } else {
    arrow.classList.remove('showArrow')
  }
});

arrow.addEventListener('click', function () {
  header.scrollIntoView({ block: 'start', behavior: "smooth" });
  arrow.classList.remove("showArrow");

});

