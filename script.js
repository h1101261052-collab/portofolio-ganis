// tandai bahwa JS aktif (supaya animasi hanya jalan kalau JS hidup)
document.documentElement.classList.add('js');

// menu hamburger di HP
const menu = document.getElementById('menu');
document.getElementById('burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// elemen muncul pelan saat di-scroll
const io = new IntersectionObserver(items => {
  items.forEach(i => { if (i.isIntersecting) { i.target.classList.add('show'); io.unobserve(i.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
