const body=document.querySelector('body');
const apiUrl = "http://localhost:8000";

window.addEventListener("load",()=>{
    body.classList.add("visible");
});

const signInform=document.querySelector('.signin-form');

signInform.addEventListener('submit',(event)=>{
    event.preventDefault();

    const signInEmail=document.querySelector(".signin-email");
    const signInPassword=document.querySelector('.signin-password');    

    const email=signInEmail.value;
    const password=signInPassword.value;

    fetch(`${apiUrl}/auth/signin`,{
      method:'POST',
      headers:{
      "Content-Type":"application/json",
      },
      body:JSON.stringify({email,password}),
  })
  .then((res)=>res.json())
  .then((data)=>{
      const {token}=data;
      if(token){
        localStorage.setItem("jwt",token);
        location.href='../dashboard/dashboard.html'
      }
      else{
        alert('Sign In again');
      }
      // console.log(data);
  })
  .catch((err)=>{
      alert('Error signing In , please try again!')
      console.log(err);
  })
})

const signUpform=document.querySelector('.signup-form');
signUpform.addEventListener('submit',(event)=>{
    event.preventDefault();
    
  const email = document.querySelector(".signup-email").value;
  const name = document.querySelector(".signup-name").value;
  const password = document.querySelector(".signup-password").value;
  const retypedPassword = document.querySelector(
    ".signup-retyped-password"
  ).value;

  if (password !== retypedPassword) {
    alert("Passwords don't match");
    return;
  }

  fetch(`${apiUrl}/auth/signup`,{
      method:'POST',
      headers:{
      "Content-Type":"application/json",
      },
      body:JSON.stringify({name,email,password}),
  })
  .then((res)=>res.json())
  .then((data)=>{
      const {token}=data;
      if(token){
        localStorage.setItem("jwt",token);
        location.href='../dashboard/dashboard.html'
      }
      else{
        alert('Sign Up again');
      }
      // console.log(data);
  })
  .catch((err)=>{
      alert('Error signing up , please try again!')
      console.log(err);
  })
})
