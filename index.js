let input= document.getElementsByClassName("text")[0];
let btn= document.getElementsByClassName("btn-primary")[0];
let output= document.getElementsByClassName("output")[0];

function translate(){
    let txt=input.value;
    let url=`https://api.funtranslations.com/translate/pirate.json?text=${txt}`;
    fetch(url).then(Response => Response.json()).then(
        json => output.innerText= json.contents.translated);
}

btn.addEventListener("click",translate);