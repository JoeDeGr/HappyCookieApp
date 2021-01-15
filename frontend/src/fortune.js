
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

