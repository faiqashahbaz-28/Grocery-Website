let login_btn = document.querySelector("#login");
let form_display = document.querySelector(".login_display");
let signup_display = document.querySelector(".signup_form") ;
let click_btn = document.querySelector(".click_me"); 
let login_display = document.querySelector(".login_form");
let click_btn2 = document.querySelector(".click_me2");

form_display.classList.add("display_hidden");
signup_display.classList.add("signup_hidden");
login_display.classList.add("login_hidden");


//clicking the login button//
login_btn.addEventListener("click",()=>{
    form_display.classList.remove("display_hidden");
    login_display.classList.remove("login_hidden");

});

click_btn.addEventListener("click" ,()=>{
    signup_display.classList.remove("signup_hidden");
});

click_btn2.addEventListener("click" ,()=>{
    login_display.classList.remove("login_hidden");
    signup_display.classList.add("signup_hidden");
});