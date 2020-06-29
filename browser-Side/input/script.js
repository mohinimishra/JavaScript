// console.log(window.prompt("Enter Your Age"))
let age = window.prompt("Enter your age")
let byId = document.getElementById('text');
if (age >=18) {
   

    byId.innerText = "Welcome ! You are allowed to this Page"
    byId.style.backgroundColor = "green"
}
else{
    
    byId.innerText = "OOPS ! You are not allowed on this page"
    byId.style.backgroundColor = "red"
}

