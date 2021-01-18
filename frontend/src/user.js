class User{
    constructor(name, id){
        this.name = name
        this.id = id
    }
}

function fetchUser(configObj){
    return fetch(USER_URL, configObj)
        .then(resp => resp.json())
        .then(json => addUserToPage(json))
        .catch(function(error){
            alert("Yaargh! I'm Not Working!");
            console.log(error.message);
        })
}

function submitUserInfo(e){
    e.preventDefault();
    let formInfo = document.querySelector('#login-form');

    let formData = {
        name: formInfo[0].value,
        email: formInfo[1].value,
        password: formInfo[2].value
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetchUser(configObj)
}

function addUserToPage(json){
    console.log(json)
    createUser(json);
    loadFortuneField();
    if(json.fortunes){
        appendFortunes(json);
    }
}

function createUser(json){
    user = new User(json.user.name, json.user.id);
    console.log(user);
    hide(login);
    let greeting = `Welcome ${user.name}. We are glad you came here today.`;
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    div.setAttribute('class', "info");
    div.id = user.id;
    h2.setAttribute('class', 'greeting');
    h2.innerHTML = greeting;
    div.appendChild(h2);
    body.appendChild(div);
    changeBackground()
}