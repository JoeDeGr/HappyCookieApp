const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const FORTUNE_URL = `${BASE_URL}/fortunes`
let login = document.querySelector("body > div.login")
let loginButton = document.querySelector("#login-form > input[type=button]")


document.addEventListener('DOMContentLoaded', (e) =>{
    buildPage()
});


function buildPage(){
    loginButton.addEventListener('click', (e) => submitUserInfo(e))
}

function hide(obj){
    if (obj.style.display === "none"){
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}