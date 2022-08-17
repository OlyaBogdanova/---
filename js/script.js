"use strict";
/*Открыть меню "контакты"*/
const contactsContainer = document.querySelector(".contacts__container");

document.addEventListener("click", function (event) {

if(event.target.closest('.contacts__title')){
    contactsContainer.classList.toggle('_active');
}
if (!event.target.closest('.contacts__contacts')) {
    contactsContainer.classList.add('_active');
}
});
/*Открыть меню "соцсети"*/
const socialContainer = document.querySelector(".social__container");

document.addEventListener("click", function (event) {

if(event.target.closest('.social__title')){
    socialContainer.classList.toggle('_active');
}
if (!event.target.closest('.contacts__social ')) {
    socialContainer.classList.add('_active');
}
});

/*Открыть меню "скиллс"*/
const skillsContainer = document.querySelector(".skills__container");

document.addEventListener("click", function (event) {

if(event.target.closest('.skills__title')){
    skillsContainer.classList.toggle('_active');
}
if (!event.target.closest('.aside__skills')) {
    skillsContainer.classList.add('_active');
}
});

