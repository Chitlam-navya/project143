// script.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const close = document.querySelector('.close');
  
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
        caption.innerHTML = item.alt;
      });
    });
  
    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
      }
    });
  });