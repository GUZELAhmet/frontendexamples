const ulkeler = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  const baskentler = [
    "Ankara",
    "Berlin",
    "Paris",
    "Amsterdam",
    "Roma",
    "Madrid",
    "Lizbon",
  ];

  //! 2- Ülke ve başkentlerin yazılı olduğu dizilerinde eşleşen indis elemanlarını
  //! birleştirerek ayrı bir diziye atın.

  let newArr=[];

  for (let i in ulkeler) {
    newArr.push(ulkeler[i]+ "-"+ baskentler[i])
   
  }
  console.log(newArr);

  //!3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli olarak
// değiştirip alfabetik hale getirip yazdırın.
let ulkeler2 = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  let newArr2=[];
  ulkeler2= ulkeler2.sort((a,b)=>a.localeCompare(b))
  for(let item of ulkeler2){
 //newArr2.push(item.substring(0,3).toLocaleUpperCase())
 item=item.substring(0,3).toLocaleUpperCase()
 newArr2.push(item)
  }
console.log(newArr2) 


let arr=[-5,6,3,-5,-7,4,12,-58,72];

let newArrr=[];

arr.forEach((item,index)=>{
    newArrr[index]=Math.abs(2*item)
;});
newArr=newArr.sort((a,b)=>b-a)
console.log(newArr)



