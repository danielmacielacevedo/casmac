const languageButton = document.querySelector('.language-selector');
const languageFlag = document.querySelector('.lang-img');

const langEn = document.querySelector('.lang-nav-en');
const langEs = document.querySelector('.lang-nav-es');

const langEnMobile = document.querySelector('.mobile-lang-nav-en');
const langEsMobile = document.querySelector('.mobile-lang-nav-es');


if(localStorage.getItem('lang') == null)
{
    localStorage.setItem('lang', 'en');
}

let localData = localStorage.getItem('lang')

if(localData == 'es'){
    document.body.classList.add('lang');

    languageFlag.classList.add('es');

    langEn.classList.add('none');
    langEs.classList.remove('none');

    langEnMobile.classList.add('none');
    langEsMobile.classList.remove('none');

} else if(localData == 'en'){

    languageFlag.classList.remove('es');

    langEn.classList.remove('none');
    langEs.classList.add('none');

    langEnMobile.classList.remove('none');
    langEsMobile.classList.add('none');

    document.body.classList.remove('lang');
}

languageButton.onclick = function(){
    document.body.classList.toggle('lang');
    if(document.body.classList.contains('lang')){

        languageFlag.classList.remove('es');

        langEn.classList.remove('none');
        langEs.classList.add('none');

        langEnMobile.classList.remove('none');
        langEsMobile.classList.add('none');

        localStorage.setItem('lang', 'en');
    } else {

        languageFlag.classList.add('es');

        langEn.classList.add('none');
        langEs.classList.remove('none');

        langEnMobile.classList.add('none');
        langEsMobile.classList.remove('none');

        localStorage.setItem('lang', 'es');
    }
}