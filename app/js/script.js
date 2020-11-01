const headerMenuMoon = document.querySelector('.header-menu__moon'),
    burger = document.querySelector('.header-burger'),
    headerMenuList = document.querySelector('.header-menu-list'),
    reviewsSlider = document.querySelector('.reviews-slider').children,
    nextSlider = document.querySelector('.right-slider'),
    prevSlider = document.querySelector('.left-slider'),
    reviewsSliderPageLength = document.querySelector('.reviews-slider-page__length'),
    reviewsSliderPageActual = document.querySelector('.reviews-slider-page__actual');

let index = 0;
let totalSlides = reviewsSlider.length;

//slider
reviewsSliderPageActual.innerHTML =index +1+ '/';
reviewsSliderPageLength.innerHTML = totalSlides;

nextSlider.onclick =function () {
    next('next');
}
prevSlider.onclick =function () {
    next('prev');
}
function next(dir){
    if(dir === 'next'){
        index++;
        if(index !== 0){
            prevSlider.classList.remove('last');
        }

        if(index === totalSlides-1){
            nextSlider.classList.add('last');
        } else { nextSlider.classList.remove('last');}

        if(index === totalSlides){
            index = totalSlides-1;
        }
        if(index === totalSlides-1){
            nextSlider.classList.add('last');
        } else { nextSlider.classList.remove('last');}

    }
    else {
        if(index !== totalSlides){
            nextSlider.classList.remove('last');
        }
        if(index === 1){
            prevSlider.classList.add('last');
        } else{  prevSlider.classList.remove('last');}
        if(index === 0){
            index = 0;
            prevSlider.classList.add('last');
        }
        else {index--;}
    }
    for( let i =0; i< reviewsSlider.length; i++){
        reviewsSlider[i].classList.remove('active');
    }
    reviewsSlider[index].classList.add('active');
    reviewsSliderPageActual.innerHTML =index +1+ '/';
}


function toggleBurger(){
    burger.classList.toggle('active');
    headerMenuList.classList.toggle('active');
}
function showMenu(){
    burger.addEventListener('click', toggleBurger);
}

function initialState(themeName){
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}
initialState('theme-is-white');

function toogleTheme(){

    if (localStorage.getItem('theme') === 'theme-is-black'){
        initialState('theme-is-white');
    } else {
        initialState('theme-is-black')
    }
}
headerMenuMoon.addEventListener('click', toogleTheme);

showMenu();



window.onload = function () {
    document.getElementsByClassName('video-tablet-back__link')[0].addEventListener('click', function () {
        document.getElementsByClassName('video-tablet-frame')[0].classList.add('active')
    });
}