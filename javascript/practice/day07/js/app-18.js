const data = [
    {
        ad: "Serdar Konyalı",
        yas: 35,
        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "The Boos",
    },
    {
        ad: "Ceren Yurt",
        yas: 29,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Product Owner",
    },
    {
        ad: "Cenk Aslan",
        yas: 31,
        img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Automation Engineer",
    },
    {
        ad: "Cankan Sarı",
        yas: 25,
        img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Intern",
    },
    {
        ad: "Suzan Yapıcı",
        yas: 27,
        img: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Web Developer",
    },
    {
        ad: "Ayberk Gök",
        yas: 32,
        img: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        meslek: "Web Designer",
    }
];


const  isimEl=document.querySelector("#baslik");
const  yasEl=document.querySelector("#yas");
const  meslekEl=document.querySelector("#meslek");
const  resimEl=document.querySelector("#resim");


const  geriEl=document.querySelector("#geri");
const  ileriEl=document.querySelector("#ileri");
 const gosterButonu=document.querySelector("#btn");
let kaldigimksi=0;
let goster=true;

gosterButonu.addEventListener("click",()=>{


    if(goster){
    document.querySelector(".alt").style.display="inline-block";
} else{
    document.querySelector(".alt").style.display="none";
}
goster=!goster;

})

const kisigetir=(index) =>{
    let al=data[index];
    isimEl.textContent=al.ad;
    yasEl.textContent=al.yas;
    meslekEl.textContent=al.meslek;
    resimEl.src=al.img;
 } ;
 ileriEl.addEventListener("click",()=>{
    kaldigimksi++;
    if(kaldigimksi>data.length){
        kaldigimksi=0;
    }
kisigetir(kaldigimksi);


 });

geriEl.addEventListener("click",()=>{
    kaldigimksi--;
    if(kaldigimksi<0){
        kaldigimksi=data.length;
    }
kisigetir(kaldigimksi);


 });
 kisigetir(0);










