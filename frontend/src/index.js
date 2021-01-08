const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const FORTUNE_URL = `${BASE_URL}/fortunes`

document.addEventListener('DOMContentLoaded', (e) =>{
    fetchFortune();
});

function fetchFortune(){
    return fetch(FORTUNE_URL)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(() => console.log("can't get the DATA!"));
}