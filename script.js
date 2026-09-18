const looks = [
  ['look-01.jfif','Traditional bridal hairstyle'],['look-02.jfif','Bridal beauty portrait'],['look-03.jfif','Mehndi-ready hairstyle'],['look-04.jfif','Romantic updo'],['look-05.jfif','Luminous bridal makeup'],['look-06.jfif','Soft glam bridal portrait'],['look-07.jfif','Elegant bridal finish'],['look-08.jfif','Bridal hair and makeup'],['look-09.jfif','Timeless bridal beauty'],['look-10.jfif','Refined bridal makeup'],['look-11.jfif','Butterfly hair pins'],['look-12.jfif','Fountain braid hairstyle'],['look-13.jfif','Elegant glamour'],['look-14.jfif','Half-up bridal curls'],['look-15.jfif','Reception hairstyle'],['look-16.jfif','Editorial hair styling'],['look-17.jfif','Kochi bridal beauty'],['look-18.jfif','Statement bridal look'],['look-19.jfif','Bridal glow'],['look-20.jfif','Rose gold evening makeup'],['look-21.jfif','Champagne glitter glam'],['look-22.jfif','Pearl accessory updo'],['look-23.jfif','Bridal portrait'],['look-24.jfif','Wedding day portrait'],['look-25.jfif','Bridal pose'],['look-26.jfif','Classic bridal makeup']
];
const grid = document.querySelector('#galleryGrid');
const dialog = document.querySelector('#lightbox');
const lightboxImage = dialog?.querySelector('img');
const lightboxCaption = dialog?.querySelector('p');
if (grid) looks.forEach(([file, alt], index) => {
  const button = document.createElement('button'); button.className = 'gallery-item'; button.dataset.number = String(index + 1).padStart(2, '0');
  button.innerHTML = `<img src="assets/${file}" alt="${alt}" loading="lazy">`;
  button.addEventListener('click', () => { lightboxImage.src = `assets/${file}`; lightboxImage.alt = alt; lightboxCaption.textContent = `${String(index + 1).padStart(2, '0')} — ${alt}`; dialog.showModal(); });
  grid.appendChild(button);
});
if (dialog) { dialog.querySelector('button').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); }); }
const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('nav');
toggle.addEventListener('click', () => { const opened = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', opened); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
