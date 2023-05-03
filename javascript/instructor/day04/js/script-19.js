function setMode(){
const isDark= document.querySelector("body").classList.contains("dark");
const btnToggle=document.querySelector(".toggle-btn");


if(isDark){
    document.querySelector("body").classList.remove("dark");
     btnToggle.innerHTML='<i class="fas fa-moon"></i>';
     
}else{
    document.querySelector("body").classList.add("dark");
    btnToggle.innerHTML='<i class="fas fa-sun"></i>';
    
}

    
}