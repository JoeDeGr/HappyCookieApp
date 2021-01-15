
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
    h3.innerHTML = "Travel through the deppest depths and widest expanses of time and space and see what your future holds! "
    button.addEventListener('click', (e) => console.log(e))
    button.setAttribute('class', 'fortune-button')
    button.innerHTML = "Push Me!"

    div2.setAttribute('class', 'fortunes-list')
    subH.setAttribute('class', 'fortune-sub-heading')
    subH.innerHTML = "Your Previous Fortunes"
    button2.setAttribute('class', 'hide-previous-fortunes-button');
    button2.innerHTML = "Show Previous Fortunes"
    button2.addEventListener('click', (e) => showOrHideFortunes(e));
    ul.setAttribute('class', 'fortune-list')

    div2.appendChild(button2)
    div2.appendChild(subh)
    subh.appendChild(ul)

    div.appendChild(h3)
    div.appendChild(button)
    div.appendChild(div2)
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

