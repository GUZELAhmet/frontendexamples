const menumuzEl=document.querySelector(".menumuz");
/* console.log(menumuzEl.innerHTML)
console.log(menumuzEl)
console.log(menumuzEl.innerHTML) */

const yemeklerimizEl=document.querySelectorAll(".yemeklerimiz");
console.log(yemeklerimizEl);

menumuzEl.addEventListener("click",(e)=>{
//console.log(e.target);

if(e.target.classList.contains("urun")){
    menumuzEl.querySelector(".text-danger").classList.remove("text-danger");
    e.target.classList.add("text-danger");

    let listelenen=e.target.getAttribute("data-menulerim");
    console.log(listelenen);

  

    yemeklerimizEl.forEach((item) => {
        console.log(item)
        if(listelenen=="hepsi"  || item.classList.contains(listelenen)){
            item.classList.remove("d-none");
        }else{
            item.classList.add("d-none");
        }



        
    });
}

})