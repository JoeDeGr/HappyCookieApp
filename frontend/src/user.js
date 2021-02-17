class User{
    constructor(name, id){
        this.name = name
        this.id = id
        this.fortunes = Fortune.allInstances
        User.currentUser = this
    }
    addToPage(){
        hide(login);
        let greeting = `Welcome ${this.name}. We are glad you came here today.`;
        let div = document.createElement('div');
        let h2 = document.querySelector('h2');
        div.setAttribute('class', "info");
        div.id = this.id;
        h2.setAttribute('class', 'greeting');
        h2.innerHTML = greeting;
        changeBackground()    
    }
}

User.currentUser = []

function fetchUser(configObj){
    return fetch(USER_URL, configObj)
        .then(resp => resp.json())
        .then(json => loadUserPageInfo(json))
        .catch(function(error){
            alert(`Yaargh! I'm Not Working!`);
            console.log(error.message);
        })
}

function submitUserInfo(e){
    e.preventDefault();
    let formInfo = document.querySelector('#login-form');

    let formData = {
        user:{
            name: formInfo[0].value,
            email: formInfo[1].value,
            password: formInfo[2].value,
            // password_confirmation: formInfo[2].value
        }
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

function loadUserPageInfo(json){
    let userJSON = JSON.parse(json.user)
    let user = new User(userJSON.name, userJSON.id);
    user.addToPage()
    loadFortuneField();
    if (json.fortunes) {
        appendFortunes(json);
    }
}