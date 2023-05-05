let mesaj=document.querySelector("#msg");


function hesapla(){


    let vize=document.querySelector("#vize").value;
    let final=document.querySelector("#final").value;

   

    let ortalama=Number(vize*0.4+final*0.6);

    let not="";
    switch(true){
        case ortalama >= 90 && ortalama <= 100:
            not = "AA";
            break;
          case ortalama >= 80 && ortalama <= 89:
            not = "BA";
            break;
          case ortalama >= 70 && ortalama <= 79:
            not = "BB";
            break;
          case ortalama >= 60 && ortalama <= 69:
            not = "CB";
            break;
          case ortalama >= 50 && ortalama <= 59:
            not = "CC";
            break;
          case ortalama >= 40 && ortalama <= 49:
            not = "DC";
            break;
          case ortalama >= 30 && ortalama <= 39:
            not = "DD";
            break;
          case ortalama >= 0 && ortalama <= 29:
              not="FD"
              break;
          default:
              not="FF";
              break;
    }
    mesaj.classList.remove("d-none");
    mesaj.classList.add("mesaj");
    mesaj.innerHTML=`Ortalamanız: ${ortalama} notunuz ${not}`;
}

function sil(){
    mesaj.innerText="";
    document.querySelector("#msg").classList.add("d-none"),

}