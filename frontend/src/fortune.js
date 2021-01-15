
class Fortune {
    constructor(id, name, posVibes, user_id) {
        this.id = id;
        this.name = name;
        this.posVives = posVibes;
        this.user_id = user_id;
    }
}

function fetchFortune(){
    return fetch(FORTUNE_URL)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(function(error){ 
            alert("NOOOOOO!");
            console.log(error.message);
        })
}

function loadFortuneField(){
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let button = document.createElement('button')
    let div2 = document.createElement('div')
    let ul = document.createElement('ul')
    let button2 = document.createElement('button')
    let subH = document.createElement('h3')

    div.setAttribute('class', 'fortune-container')
    h3.setAttribute('class', 'fortune-heading')
    button.addEventListener('click', (e) => console.log(e))
    button.setAttribute('class', 'fortune-button')
    button.innerHTML = "Push Me!"
    button2.addEventListener('click', (e) => showOrHideFortunes(e));
    button2.setAttribute('class', 'hide-previous-fortunes');
    button2.innerHTML = "Show Previous Fortunes"

    div2.setAttribute('class', 'fortunes-list')
    ul.setAttribute('class', 'fortune-list')
    div.appendChild(h3)
    div.appendChild(button)
    body.appendChild(div)

    function showOrHideFortunes(e){
        console.log("I've been hit!");
        console.log(e);
        if(button2.innerHTML==="Show Previous Fortunes"){
            hide(ul);
            button2.innerHTML = "Hide Previous Fortunes"
        }else{
            hide(ul);
            button2.innerHTML = "Hide Previous Fortunes"
        }
    }
}

