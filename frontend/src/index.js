const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const FORTUNE_URL = `${BASE_URL}/fortunes`
login = document.querySelector("body > div.login")

document.addEventListener('DOMContentLoaded', (e) =>{
    buildPage()
});


function buildPage(){
    let main = document.querySelector('main')
    let div = document.createElement('div')
    main.appendChild(div)


}

function hide(obj){
    if (obj.style.display === "none"){
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}