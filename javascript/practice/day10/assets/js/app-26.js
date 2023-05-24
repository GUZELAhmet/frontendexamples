const tempSecim=document.querySelector("#sayi_deger");
const numberTemp=document.querySelector("#deger");
const hesaplaEl=document.querySelector("#hesapla");
const sonucEl=document.querySelector(".sonuc");

hesaplaEl.addEventListener("click", ()=>{
    let result =0;
    if (tempSecim.value==1) {
        result=fahrBul(numberTemp.value);
        sonucEl.innerHTML=result;
    }else{
        result=celciusBul(numberTemp.value);
        sonucEl.innerHTML=result;

    }
});

const fahrBul=()=>{
    let result=numberTemp.value*9/5+32;
    return Math.round(result);
}

const celciusBul=()=>{
    let result=(numberTemp.value-32)/1.8;
    return Math.round(result);
  
}