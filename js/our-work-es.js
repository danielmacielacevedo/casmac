const ourWorkButton_2 = document.querySelector('.click-link-our-work2');

const hideContent_2 = document.querySelector('.cover-container2');
const hideContent2_2 = document.querySelector('.cover-content2');
const hideContent3_2 = document.querySelector('.our-work-container2');

const navDisplay_2 = document.querySelector(' header > nav > div > a > span');
const navContainer2_2 = document.querySelector(' header > nav');

let ourWorkContent_2 = false;

ourWorkButton_2.addEventListener('click', () => 
{
    if(!ourWorkContent_2) 
    {
        ourWorkButton_2.classList.add('on');


        hideContent_2.classList.add('on');
        hideContent2_2.classList.add('on');
        hideContent3_2.classList.add('on');

        navDisplay_2.classList.add('on');
        navContainer2_2.classList.add('on');

        ourWorkContent_2 = true;
    } else {
        ourWorkButton_2.classList.remove('on');


        hideContent_2.classList.remove('on');
        hideContent2_2.classList.remove('on');
        hideContent3_2.classList.remove('on');

        navDisplay_2.classList.remove('on');
        navContainer2_2.classList.remove('on');

        ourWorkContent_2 = false;
    }
});