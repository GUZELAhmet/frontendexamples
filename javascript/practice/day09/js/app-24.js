const valueEl=document.getElementById("value");
const butonlarEl=document.querySelectorAll(".btn");

let count=0;
butonlarEl.forEach((btn) => {
    btn.addEventListener("clic",(e)=>{
        console.log(e.target.innerText);

        if(e.target.innerText=="DECREASE") count++;
        else if(e.target.innerText=="INCREASE") count--;
        else  count=0;
        valueEl.innerText=count;

        if(count<0) valueEl.style.color="red";
        else if(count>0) valueEl.style.color="green";
        else valueEl.style.color="black";


    })
});