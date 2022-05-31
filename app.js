const toggle = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click',function(){
   navLinks.parentElement.classList.toggle('active');
})