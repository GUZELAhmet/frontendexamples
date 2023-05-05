const renk1=document.querySelector(".red");
const renk2=document.querySelector(".white");
const renk3=document.querySelector(".blue");
const renk4=document.querySelector(".black");
const renk5=document.querySelector(".green");

const yanlisDurum=document.querySelector("#yanlis");

renk1.innerText="kırmızı";
renk2.innerText="beyaz";
renk3.innerText="mavi";
renk4.innerText="siyah";
renk5.innerText="yeşil";

let yanlisHali=` 

<div class="red">Siyah</div>
<div class="white">Kirimizi</div>
<div class="blue">Yeşil</div>
<div class="black">Mavi</div>
<div class="green">Beyaz</div>

`;
yanlisDurum.innerHTML=`<h1 STYLE=color:red; text-align:center >YANLIS RENLER</h1>  +${yanlisHali}`;