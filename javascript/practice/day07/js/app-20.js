const numLabelEl=document.getElementById("numLabel");
const numberEl=document.getElementById("sayi");
const btnKaydetEl=document.getElementById("btnKaydet");
const btnGeneratetEl=document.getElementById("btnGenerate");
const displayNumbersEl=document.querySelector("#displayNumbers");
const displayRandomNumbersEl=document.querySelector("#displayRandomNumbers")
const sonucEl=document.querySelector("#sonuc");

let say=1;
let userArray=[];
let randomArray=[];
btnGeneratetEl.addEventListener("click",()=>{


    while (randomArray.length < 6) {
        var randomNumber = Math.floor(Math.random() * 10);
        if (randomArray.indexOf(randomNumber) === -1) {
            randomArray.push(randomNumber);
        }
        randomArray=randomArray.sort();
      }
    
    userArray=userArray.map((x)=>{
        parseInt(x);
    })
        const toplamArray=userArray.concat(randomArray);
        console.log(toplamArray);
       const setArray=[...new Set(userArray.concat(randomArray))];
       console.log(setArray);
       const ayni=toplamArray.length-setArray.length;
       console.log(ayni);
       if (ayni>0) {
        sonucEl.innerHTML=`${randomArray} <br>  ${ayni} sayıyı tutturdunuz tebrikleri!`;
       } else {
        sonucEl.innerHTML=`${randomArray} <br>  hiç sayı bilemediniz bir dahaki sefere inşallah` ;
       }


})

btnKaydetEl.addEventListener("click",()=>{
    if(numberEl.value>=1 && numberEl.value<=99){

        if(!userArray.includes(numberEl.value)){
            userArray.push(numberEl.value);
            userArray.sort((a,b)=>a-b);
            displayNumbersEl.innerHTML=userArray;
            if (userArray.length<6) {
                numLabelEl.innerHTML=`${++say} sayıyı giriniz `;

                
            }else{
                btnKaydetEl.classList.add("d-none");
                btnGeneratetEl.classList.remove("d-none");
               
            }

        }else{
            alert("Lütfen aynı sayıları girmeyin")
        }

    }else {
        alert("Lütfen geçerli bir sayı giriniz.1-99 dahil");
    }

 numberEl.value="";
 numberEl.focus();

})

