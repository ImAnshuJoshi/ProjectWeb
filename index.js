const body=document.querySelector('body');
const signbtn=document.querySelector('.sign-in-sign-up');
window.addEventListener('load',()=>{
    body.classList.add('visible');
})

signbtn.addEventListener('click',()=>{
    location.href='./pages/signInsignUp/authenticate.html';
})