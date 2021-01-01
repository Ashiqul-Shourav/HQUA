// Declaration
const slideleft = document.querySelector('.btn-left');
const slideright = document.querySelector('.btn-right');

var slider = document.querySelector('.slider-main ul');
let position = 0;

slideleft.addEventListener('click', toRight);
slideright.addEventListener('click', toleft);

function toleft(e) {
    e.preventDefault();
    slideleft.style.visibility = "visible";
    position += 20;
    slider.style.transform = `translate(-${position}%)`;

    if (position == 80) {
        slideright.style.visibility = "hidden";
    }
}

function toRight(e) {
    e.preventDefault();
    slideright.style.visibility = "visible";
    position -= 20;
    slider.style.transform = `translate(-${position}%)`;

    if (position <= 0) {
        slideleft.style.visibility = "hidden";
    }
}