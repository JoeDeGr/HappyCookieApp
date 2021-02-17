class Yodafi {
    constructor(id, resource_id, yodish, user_id) {
        this.id = id;
        this.resource_id = resource_id;
        this.yodish = yodish;
        this.user_id = user_id;
        Fortune.allInstances.push(this)
    }
}
Yodafi.allInstances
const YODISH_URL = 'http://yoda-api.appspot.com/api/v1/yodish'
function fetchYodish(URL, configObj){
    return fetch(URL, configObj)
        .then(resp => resp.json())
        .then(json => displayFortune(json))
        .catch(function(error){ 
            alert("NOOOOOO!");
            console.log(error.message);
        })
}

function fetchNewYodish(e){
    e.preventDefault();
    const URL = `${YODISH_URL} + text=${encodeURIcomponent(txt)}`
    console.log(URL)
    let txt = e.target.innerText
    let a = document.querySelector(".new-fortune")
    let mainContainer = document.querySelector('div.fortune-container')
    
    let formInfo = e.target

    let formData = {
        user_id: formInfo.id
    }

    let configObj = {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    if (a){
        mainContainer.removeChild(a)
    }
    return fetchYodish(URL, configObj)
}