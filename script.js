// Preloader animation
let bar = document.querySelector('.bar');
let main = document.querySelector('#main');
let loader = document.querySelector('.preloader');

let width = 0;
let interval = setInterval(() => {
  width += 1;
  bar.style.width = width + '%';
  if (width >= 100) {
    clearInterval(interval);
    gsap.to(loader, { opacity: 0, duration: 1, onComplete: () => loader.style.display = 'none' });
    gsap.to(main, { opacity: 1, duration: 1 });
  }
}, 25);

// Locomotive Scroll initialization
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
