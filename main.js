const menu = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-icon');


menu.addEventListener('click', ()=>{
    overlay.style.display ="block"    
})

close.addEventListener('click', ()=>{
    overlay.style.display ="none"    
})