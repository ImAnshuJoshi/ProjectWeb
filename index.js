const body=document.querySelector('body');
const signbtn=document.querySelector('.sign-in-sign-up');
window.addEventListener('load',()=>{
    body.classList.add('visible');

    const token=localStorage.getItem('token');
    if(token){
        location.href='../dashboard/dashboard.html'
    }
})

signbtn.addEventListener('click',()=>{
    location.href='./pages/signInsignUp/authenticate.html';
})