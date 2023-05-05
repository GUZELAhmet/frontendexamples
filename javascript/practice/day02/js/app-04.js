function hesapla(){

    const tabanEl=document.querySelector("#taban").value;
    const ustEl=document.querySelector("#us").value;
    const sonuc=Number(tabanEl**ustEl);

    const msgSonuc=document.querySelector(".sonuc");

    msgSonuc.classList.add("ekle");

    msgSonuc.innerHTML=`<b>${tabanEl}<sup>${ustEl}</sup> = ${sonuc}</b>`;

}