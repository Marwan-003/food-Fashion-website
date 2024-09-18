"use strict";
// elements selection
let nextBtn = document.querySelector(".slider .next");
let prevBtn = document.querySelector(".slider .prev");
let slider = document.querySelector(".slider .slider_imgs");
let prevImgs = document.querySelectorAll(".product_prev .product_img img");
let productsInfo = document.querySelectorAll(".product .product_info");
// vars 
let current = 0;
let rotate = 0;
let rotateAmount = 360 / prevImgs.length;
function show() {
    slider.style.setProperty("--rotate", rotate + 'deg');
    prevImgs.forEach((ele) => ele.classList.remove('active'));
    prevImgs[current].classList.add('active');
    productsInfo.forEach((ele) => ele.classList.remove('active'));
    productsInfo[current].classList.add('active');
}
function slide(direction) {
    if (direction === 'next') {
        if (current >= prevImgs.length - 1) {
            current = 0;
        }
        else {
            current += 1;
        }
        rotate += rotateAmount;
        show();
    }
    if (direction === 'prev') {
        if (current <= 0) {
            current = prevImgs.length - 1;
        }
        else {
            current -= 1;
        }
        rotate -= rotateAmount;
        show();
    }
}
nextBtn.onclick = () => slide("next");
prevBtn.onclick = () => slide("prev");
// image reflect
//vars
let imgs = document.querySelectorAll(".categories .categories_info .box .img_holder");
imgs.forEach((ele) => {
    let img = ele.querySelector('img');
    let url = img.getAttribute('src');
    ele.style.setProperty('--imgSrc', `url(.${url})`);
});
// fav button
// Favorite button functionality
const favButtons = document.querySelectorAll('.fav-btn');
function toggleFavorite(button) {
    button.classList.toggle('fav');
}
favButtons.forEach(button => {
    button.addEventListener('click', () => toggleFavorite(button));
});
// header
let links_bar = document.querySelector(".header .links");
let socialMedia = document.querySelector(".header .social-media");
let menuBar = document.querySelector(".header .menu-bar");
menuBar.addEventListener('click', () => {
    links_bar.classList.toggle('active');
    socialMedia.classList.toggle('active');
});
let links = document.querySelectorAll(".header .links a");
links.forEach((ele) => {
    ele.addEventListener('click', () => {
        links_bar.classList.remove('active');
        socialMedia.classList.remove('active');
    });
});
//# sourceMappingURL=main.js.map