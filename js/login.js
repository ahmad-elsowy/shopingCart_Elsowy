//select element from login.html using Dom  

let signInButton = document.querySelector(".sign-in-btn")
let userName = document.querySelector(".user-name")
let password = document.querySelector(".password")

//get element from loocal storage
userNameFromLocalStorage  = localStorage.getItem("userName")
passwordFromLocalStorage  = localStorage.getItem("password")


signInButton.addEventListener('click' , function(e){
    e.preventDefault()
    //check if entered value  ias equal to data in local storage or not
    if((userName.value && userName.value === userNameFromLocalStorage) && (password.value && password.value === passwordFromLocalStorage)){
        
        // wait for 1.5 sec before going to home page
        setTimeout(() => {
            window.location = "index.html"
        }, 1500);
       
    }

})