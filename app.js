let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const indicator = document.getElementById('page-indicator');

function updateGallery() {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === currentIndex);
  });
  indicator.textContent = `Страница ${currentIndex + 1} из ${images.length}`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
}

updateGallery();
