let body=document.querySelector("body");

let colorName=document.querySelector("#color");

let buttonEl=document.querySelector("#btn");
const colors=["Red","Green","Yellow","Purple", "Aqua","Black", "Cornflowerblue", "Orange", "White"];

let index;
const colorChange=()=>{

    index=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[index]
    buttonEl.innerHTML=colors[index]
    colorName.innerHTML=colors[index]


}
buttonEl.addEventListener("click",()=>{colorChange()});