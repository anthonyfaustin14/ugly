const images = document.querySelectorAll('img'); // Select all images

images.forEach(img => {
    const randomX = Math.random() * (window.innerWidth - img.width); // Random X
    const randomY = Math.random() * (window.innerHeight - img.height); // Random Y

    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';
});