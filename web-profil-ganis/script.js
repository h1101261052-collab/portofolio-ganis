const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const links = [...menu.querySelectorAll('a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
document.getElementById('year').textContent = new Date().getFullYear();

burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

addEventListener('scroll', () => {
  let cur = 0;
  sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === cur));
}, { passive: true });
links[0].classList.add('active');

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const roles = ['Mahasiswa Sistem Informasi', 'Web Developer Pemula', 'Suka Belajar Hal Baru'];
const typed = document.getElementById('typed');
const caret = document.querySelector('.caret');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typed.textContent = roles[0];
} else {
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = roles[r];
    c += del ? -1 : 1;
    typed.textContent = word.slice(0, c);
    let wait = del ? 35 : 80;
    if (!del && c === word.length) { del = true; wait = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 400; }
    setTimeout(tick, wait);
  })();
}
