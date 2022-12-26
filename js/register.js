//select element from register.html using Dom  
let userName  = document.querySelector(".user-name")
let email  = document.querySelector(".email")
let password  = document.querySelector(".password")

let signUpButton = document.querySelector(".sign-up-btn")


signUpButton.addEventListener('click' , function(e){
    e.preventDefault()
    //Set element TO loocal storage
    if((userName.value && userName.value !== "")  &&  (email.value && email.value !== "") && (email.value && email.value !== "")){
        localStorage.setItem("userName" , userName.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
           // wait for 1.5 sec before going to home page
        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
})