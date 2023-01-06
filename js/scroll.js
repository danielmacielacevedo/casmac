const nameDaniel = document.querySelector(' header > nav > div > a > span');
const navContainer = document.querySelector(' header > nav');
let prevY = window.scrollY;

window.addEventListener('scroll', function(){

    // if(prevY > window.scrollY){
    //     console.log('volviendo al top');
    //     nameDaniel.classList.remove('off');
    // } else {
    //     console.log('bajando');
    //     nameDaniel.classList.add('off');
    // }

    if(window.scrollY > 270){
        nameDaniel.classList.add('on');
        navContainer.classList.add('on');
    } else { 
        nameDaniel.classList.remove('on');
        navContainer.classList.remove('on');
    }
    prevY = window.screenY
});