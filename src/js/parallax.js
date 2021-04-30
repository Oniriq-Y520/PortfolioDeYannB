const parallax = document.querySelector('.banner .banner-image');

window.addEventListener('sroll',() => {
    banner.banner.image.style.backgroundPositionY = -window.scrollY / 2 + "px";
});


