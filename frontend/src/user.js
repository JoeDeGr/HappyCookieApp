

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
    hide(login);
    let greeting = `Welcome ${json.name}. We are glad you came here today.`
    let body = document.querySelector('body')
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    div.setAttribute('class', "info")
    div.id = json.id
    h2.setAttribute('class', 'greeting')
    h2.innerHTML = greeting
    div.appendChild(h2)
    body.appendChild(div)
    // hide(div)
}