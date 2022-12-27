const navIcon=document.querySelector('.navIcon');
const navLinks=document.querySelector('.navLinks')
navIcon.addEventListener('click',() => {
    navIcon.classList.toggle('active')
    navLinks.classList.toggle('active')
})