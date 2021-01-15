
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
    //create my items
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let button = document.createElement('button')
    let div2 = document.createElement('div')
    let ul = document.createElement('ul')
    let button2 = document.createElement('button')
    let subH = document.createElement('lh')
    //create the main fortune 
    div.setAttribute('class', 'fortune-container')
    h3.setAttribute('class', 'fortune-heading')
    h3.innerHTML = "Travel through the deppest depths, the widest expanses of space and time to see what your future holds! "
    button.addEventListener('click', (e) => console.log(e.target.id))
    button.setAttribute('class', 'fortune-button')
    button.innerHTML = "Push Me!"
    button.id = user.id
    // create a place for old fortunes
    div2.setAttribute('class', 'fortunes-list')
    subH.setAttribute('class', 'fortune-sub-heading')
    subH.innerHTML = "Your Previous Fortunes"
    button2.setAttribute('class', 'hide-previous-fortunes-button');
    button2.innerHTML = "Show Previous Fortunes"
    button2.addEventListener('click', (e) => showOrHideFortunes(e));
    ul.setAttribute('class', 'fortune-list')
    hide(ul) //hide the list until its called
    //add my previous fortunes
    ul.appendChild(subH)
    div2.appendChild(button2)
    div2.appendChild(ul)
    //add it all to the body
    div.appendChild(h3)
    div.appendChild(button)
    body.appendChild(div)
    body.appendChild(div2)

    function showOrHideFortunes(e){
        console.log("I've been hit!");
        console.log(e);
        if(button2.innerHTML==="Show Previous Fortunes"){
            hide(ul);
            button2.innerHTML = "Hide Previous Fortunes"
        }else{
            hide(ul);
            button2.innerHTML = "Show Previous Fortunes"
        }
    }
}

function appendFortunes(json){
    let ul = document.querySelector("body > div.fortunes-list > ul")
    let fortunes = json.fortunes
    debugger
    for (let fortune of fortunes) {
        fortune = new Fortune(fortune.id, fortune.name, fortune.posVibes, fortune.user_id);
        let li = document.createElement('li');
        li.setAttribute('class', 'fortunes');
        li.id = fortune.id;
        li.innerText = fortune.posVibes;
        ul.appendChild(li)
    }
}