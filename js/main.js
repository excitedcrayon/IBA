"use strict";

window.addEventListener('DOMContentLoaded', () => {
    footerYear();
    animateBurgerMenu();
    scrollToFirstSection();
    animateSolarImages();
    animateOurServicesBgColor();
    accordion();
});

window.addEventListener('scroll', () => {
    updateNavigationBackgroundOpacity();
    animateOnScroll();
    animateBackgroundImagePosition();
    try{
        new ParallaxEffect('.page-header-bar');
    }catch(e){}
});

['DOMContentLoaded','resize'].forEach((event) => {
    window.addEventListener(event, () => {
        resizeContentHero();
    });
});

function footerYear(){
    let footerCopyrightSpan = document.querySelector('.footer-copyright > span');
    if(footerCopyrightSpan != undefined){
        let date = new Date();
        footerCopyrightSpan.innerHTML = `Copyright &copy; ${date.getFullYear()}`;
    }
}

function animateBurgerMenu(){
    let navBurgerMenu = document.querySelector('.nav-burger-menu');
    if(navBurgerMenu != undefined){
        let menuLinks = document.querySelector('.menu-links');
        navBurgerMenu.addEventListener('click', () => {
            navBurgerMenu.classList.toggle('active-menu');
            if(menuLinks != undefined){
                if(menuLinks.style.maxHeight){
                    menuLinks.style.maxHeight = null;
                } else {
                    menuLinks.style.maxHeight = `${menuLinks.scrollHeight}px`;
                }
            }
        });
    }
}

function updateNavigationBackgroundOpacity(){
    let navContainer = document.querySelector('.nav-container');
    let fadeBackground = 'fade-background';
    if(navContainer != undefined){
        let bounds = navContainer.getBoundingClientRect();
        return (window.pageYOffset > bounds.height) ? navContainer.classList.add(fadeBackground) : navContainer.classList.remove(fadeBackground) ;
    }
}

function resizeContentHero(){
    let contentHero = document.querySelector('.content-hero');
    let navContainer = document.querySelector('.nav-container');
    if(contentHero != undefined && navContainer != undefined){
        let navContainerBounds = navContainer.getBoundingClientRect();
        contentHero.style.paddingTop = `${Math.floor(navContainerBounds.height)}px`;
    }
}

function scrollToFirstSection(){
    let pageHeroButton = document.querySelector('.page-hero-button button');
    if(pageHeroButton != undefined){
        let sectionWrapper = document.querySelector('.solar-electrical-wrapper');
        pageHeroButton.addEventListener('click', () => {
            let sectionWrapperBounds = sectionWrapper.getBoundingClientRect();
            window.scrollTo({
                top: Math.floor(sectionWrapperBounds.top) - 80,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
}

let solarImageIndex = 0;
function animateSolarImages(){
    let solarImages = document.querySelectorAll('.solar-images > div');
    let currentImage = 'current-image';
    if(solarImages != undefined){

        setInterval(() => {

            if(solarImageIndex > solarImages.length - 1){
                solarImageIndex = 0;
            }

            for(let i = 0; i < solarImages.length; i++){
                solarImages[i].classList.remove(currentImage);
                solarImages[solarImageIndex].classList.add(currentImage);
            }

            solarImageIndex = solarImageIndex + 1;
        }, 3000);
    }
}

function animateOurServicesBgColor(){
    let articles = document.querySelectorAll('.our-services-content > article');
    if(articles != undefined){
        let ourServices = document.querySelector('.page-section.our-services');
        for(let i = 0; i < articles.length; i++){
            let article = articles[i];
            article.addEventListener('mouseover', () => {
                clearOurServicesSelector(ourServices);
                ourServices.classList.add(article.className);
            });

            article.addEventListener('mouseout', () => {
                clearOurServicesSelector(ourServices);
            });
        }
    }
}

function clearOurServicesSelector(selector){
    let pageSection = 'page-section';
    let ourServices = 'our-services';
    if(selector != undefined){
        selector.className = `${pageSection} ${ourServices}`;
    }
}

function accordion(){
    let accordionHeading = document.querySelectorAll('.accordion article h2');
    if(accordionHeading != undefined){
        accordionHeading.forEach((element) => {
            element.addEventListener('click', () => {
                element.classList.toggle('active-accordion-heading');
                let sibling = element.nextElementSibling;
                if(sibling.style.maxHeight){
                    sibling.style.maxHeight = null;
                }else{
                    sibling.style.maxHeight = `${sibling.scrollHeight}px`;
                }
            });
        });
    }
}

function animateOnScroll(){
    let dataAnimate = document.querySelectorAll('[data-animate]');
    if(dataAnimate != undefined){
        dataAnimate.forEach((element) => {
            let bounds = element.getBoundingClientRect();
            let elemTop = bounds.top;
            let elemBottom = bounds.bottom;

            try{
                let animateClass = element.getAttribute('data-animate');
    
                if(elemTop >= 0 && elemBottom <= window.innerHeight){
                    element.classList.add(animateClass);
                }
            }catch(error){}

        });
    }
}

function animateBackgroundImagePosition(){
    let contentHero = document.querySelector('.content-hero');
    if(contentHero != undefined){
        let winScroll = window.pageYOffset;
        contentHero.setAttribute('style',`background-position-y: -${Math.floor(winScroll * 0.1)}px`);
    }
}