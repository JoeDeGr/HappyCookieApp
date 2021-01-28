class Fortune {
    constructor(id, resource_id, posVibes, user_id) {
        this.id = id;
        this.resource_id = resource_id;
        this.posVibes = posVibes;
        this.user_id = user_id;
    }
    build (location, atr, type){
        let li = document.createElement(type);
        let button = document.createElement('button')
        li.setAttribute('class', atr);
        li.id = thisFortune.id;
        li.innerText = thisFortune.posVibes;
        location.appendChild(li)
    }
}




function fetchFortune(configObj){
    return fetch(FORTUNE_URL, configObj)
        .then(resp => resp.json())
        .then(json => displayFortune(json))
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
    button.addEventListener('click', (e) => fetchNewFortune(e))
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
        // console.log("I've been hit!");
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

    if (fortunes == ""){
        let li = document.createElement('li');
        li.setAttribute('class', 'default-message');
        li.id = "0"
        li.innerText = fortuneDefaultMessage;
        ul.appendChild(li)
    }else{

        for (let fortune of fortunes) {
            thisFortune = new Fortune(fortune.id, fortune.resource_id, fortune.posVibes, fortune.user_id);
            thisFortune.build(ul, 'fortunes', 'li')
        }
    }
}

function fetchNewFortune(e){
    e.preventDefault();
    let a = document.querySelector(".new-fortune")
    let mainContainer = document.querySelector('body > div.fortune-container')
    
    let formInfo = e.target

    let formData = {
        user_id: formInfo.id
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    if (a){
        mainContainer.removeChild(a)
    }
    return fetchFortune(configObj)
}

function displayFortune(json){
    console.log(json)
    let mainContainer = document.querySelector('body > div.fortune-container')
    let ul = document.querySelector("body > div.fortunes-list > ul")
    let defaultMessage = document.querySelector(".default-message")
    if (defaultMessage){
        ul.removeChild(defaultMessage)
    }
    thisFortune = new Fortune(json.id, json.resource_id, json.posVibes, json.user_id);
    thisFortune.build(ul, 'fortunes', 'li')
    thisFortune.build(mainContainer, 'new-fortune', 'a')
}