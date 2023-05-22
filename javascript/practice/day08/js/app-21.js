const sayac=document.querySelector(".sayac");
const giris=document.querySelector("#giris");
const resetbtn=document.querySelector("#sil");
const mesaj=document.querySelector(".msj");

giris.addEventListener("input",()=>{

    sayac.innerHTML=giris.value.length;
    mesaj.innerHTML="";
});

resetbtn.addEventListener("click",()=>{
    giris.focus();
    sayac.innerHTML=0;
    giris.value="";
    setTimeout(()=>{
        mesaj.innerHTML=`<b><i>Devam ET dostum</i></b>`
    },3000)
});


giris.addEventListener("keyup",(event)=>{
if (event.key==="Enter") {
    resetbtn.addEventListener("click",()=>{
        resetbtn.click();
    })
    
}
})

setTimeout(()=>{
    mesaj.innerHTML=`<b><i>Devam ET dostum</i></b>`
},3000)

giris.focus();