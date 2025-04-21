let box=document.querySelector('.tishi');
let btn=document.querySelector('.tishik');
let btn2=document.querySelector('.removeX')
let overlay = document.querySelector('.overlay');
btn.addEventListener('click',function(){
    box.style.display='block';
    overlay.style.display = 'block';
})
btn2.addEventListener('click',function(){
    box.style.display='none';
    overlay.style.display = 'none';
})