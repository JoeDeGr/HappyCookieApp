

function fetchUser(){
    return fetch(USER_URL)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(function(error){
            alert("Yaargh! I'm Not Working!");
            console.log(error.message);
        })

}