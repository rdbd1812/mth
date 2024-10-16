// Variables
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let images = document.querySelectorAll('.gallery-item');
let currentImageIndex;

// Ouvrir la Lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        currentImageIndex = index;
    });
});

// Fermer la Lightbox
let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigation (Suivant et Précédent)
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
});

function showImage(index) {
    lightboxImg.classList.add('fade-out');
    setTimeout(() => {
        lightboxImg.src = images[index].src;
        lightboxImg.classList.remove('fade-out');
    }, 300); // Durée de l'animation
}
