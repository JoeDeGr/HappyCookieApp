const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/users`
const FORTUNE_URL = `${BASE_URL}/fortunes`

document.addEventListener('DOMContentLoaded', (e) =>{
    fetchFortune();
    fetchUser();
});


function buildPage(){
    
}