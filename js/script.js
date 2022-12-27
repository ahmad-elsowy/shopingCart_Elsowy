//select element from index.html using Dom  
let userIn = document.querySelector(".header-section nav .user-in")
let userOut = document.querySelector(".header-section nav .user-out")
let userNameDom = document.querySelector(".header-section nav .user-in li .user")
let logOutDom = document.querySelector(".header-section nav .user-in li .log-out")

//get user name data from local storage 
let userName  = localStorage.getItem("userName")

//check if the is data available in local storage
if(userName){
    //display ul list that have user and logout 
    userIn.style.display = "flex"
    //hide the default ul list 
    userOut.style.display = "none"

    //inter the name from local storage to user li a
    userNameDom.innerHTML = userName


}

//when click on  log out 
logOutDom.addEventListener('click' , function(e){
    e.preventDefault()
    //clear all data stored in local storage 
    localStorage.clear()

    //return to the default page after 1.5 sec
    setTimeout(() => {
        userIn.style.display = "none"
        userOut.style.display = "flex"
    }, 1500);
    

})

let drowData; //variable to define the function
let products = productDB;  // set data basa from data.js file to variable "products"
let boxes = document.querySelector(".boxes") //catch the div to drow the page using function in it

//function to drow data in home page 
drowData = function(){
    let productItem =  products.map((item)=>{
        return`
        <div class="box">
            <img src="${item.imgURL}" alt="">
            <div class="details">
                <h2>${item.header}</h2>
                <p>${item.details} </p>
                <p>size : ${item.size}</p>
            </div>
            <div class="actions">
                <button id="${item.id}">Add To Cart</button>
                <i class="fa-solid fa-heart"></i>
            </div>
        </div>
        `
    })

    // we add join to delete " , " that appear in home page 
    //  due to the separation between objects in data.js file
    boxes.innerHTML = productItem.join('')

    //invoke function to run automatic with out call 
    //we set data from the variable  "products" using the default parameters method
}(products)


//catch all buttons "Add To Cart"
let addToCartBtn = document.querySelectorAll(".home-content .boxes .box .actions button")
let boxDom = document.querySelectorAll(".home-content .boxes .box")
//hold the badge span
let badge = document.querySelector(".header-section nav .user-in li .badge")


addToCartBtn.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        //check if user is login
        if(userName){
           //increase number at the top of cart icon 
            badge.innerHTML  = (+badge.innerHTML + 1);
            // set its value to local storage
            localStorage.setItem("badgeNum" ,  badge.innerHTML)

            //using map to select each element 
            //if we use for loop Error will appear that can not define id
            products.map(selItem=>{
                // check if id of clicked button is same to the id of product
                    //THEY ARE EQUAL IN VALUE NOT IN THE TYPE 
                    if( (e.target.id) == (selItem.id) ){
                        console.log(selItem.id)
                        //set choosen div to local storage and u must convert it to string 
                        localStorage.setItem("choosenItem" ,JSON.stringify(selItem))
                    }
            })
        }else{
            //if user is not log in 
            //redirect to register page
            window.location = "register.html"
        }
    })
    
})




