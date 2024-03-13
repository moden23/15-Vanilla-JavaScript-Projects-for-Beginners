const changeColorBtn = document.querySelector("button");
const content = document.querySelector("#main-content-wrapper");
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const backgroundColor = document.querySelector("p");


function makeRandomHex() {
    let randomHex = [];
    for(let i=0;i<6;i++)
    {
        randomHex.push(hex[Math.floor(Math.random() * hex.length)]);
    }
    return randomHex.toString();
}

changeColorBtn.addEventListener("click",function() {
    let RandomColor=makeRandomHex();
    let RandomColorWithoutComma = RandomColor.replaceAll(',', ' ').split(" ").join("");
    content.style.backgroundColor = "#"+RandomColorWithoutComma;
    backgroundColor.innerText="BACKGROUND COLOR:#"+RandomColorWithoutComma;
})