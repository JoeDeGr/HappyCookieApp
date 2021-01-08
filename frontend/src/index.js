const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const FORTUNE_URL = `${BASE_URL}/fortunes`

document.addEventListener('DOMContentLoaded', (e) =>{
    fetchFortune();
    fetchUser();
});

function fetchFortune(){
    return fetch(FORTUNE_URL)
        .then(resp => resp.json())
        .then(json => console.log(json.parse))
        .catch(function(error){ 
            alert("NOOOOOO!");
            console.log(error.message);
        })
}

function fetchUser(){
    return fetch(USER_URL)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(function(error){
            alert("Yaargh! I'm Not Working!");
            console.log(error.message);
        })

}

function buildPage(){
    
}