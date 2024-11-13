// navbar start
const navEl = document.querySelector( '.navbar');

window.addEventListener('scroll', ()=> {
  if (window.scrollY >= 100) {
    navEl.classList.add('scrolled-nav');
  } else if (window.scrollY < 100) {
    navEl.classList.remove('scrolled-nav');
  }
});
// navbar end