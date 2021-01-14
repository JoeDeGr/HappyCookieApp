

function fetchUser(configObj){
    return fetch(USER_URL, configObj)
        .then(resp => resp.json())
        .then(json => console.log(json))
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
    console.log(formData)

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