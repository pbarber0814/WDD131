const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('nav a');

menuBtn.addEventListener('click', () => {
  navLinks.forEach(link => {
    link.style.display =
      link.style.display === 'block' ? 'none' : 'block';
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth >= 1000) {
    navLinks.forEach(link => link.style.display = 'inline');
  } else {
    navLinks.forEach(link => link.style.display = 'none');
  }
});



const gallery = document.querySelector('main');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const src = e.target.getAttribute('src');
    const alt = e.target.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
  }
});


closeButton.addEventListener('click', () => {
  modal.close();
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});
