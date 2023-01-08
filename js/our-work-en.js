const ourWorkButton = document.querySelector('.click-link-our-work');

const hideContent = document.querySelector('.cover-container');
const hideContent2 = document.querySelector('.cover-content');
const hideContent3= document.querySelector('.our-work-container');

const navDisplay = document.querySelector(' header > nav > div > a > span');
const navContainer2 = document.querySelector(' header > nav');

let ourWorkContent = false;

ourWorkButton.addEventListener('click', () => 
{
    if(!ourWorkContent) 
    {
        ourWorkButton.classList.add('on');


        hideContent.classList.add('on');
        hideContent2.classList.add('on');
        hideContent3.classList.add('on');

        nameDaniel.classList.add('on');
        navContainer.classList.add('on');

        ourWorkContent = true;
    } else {
        ourWorkButton.classList.remove('on');


        hideContent.classList.remove('on');
        hideContent2.classList.remove('on');
        hideContent3.classList.remove('on');

        nameDaniel.classList.remove('on');
        navContainer.classList.remove('on');

        ourWorkContent = false;
    }
});