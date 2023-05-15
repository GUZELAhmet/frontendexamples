//!1- Bir dizideki pozitif ve çift sayıların toplamını ve adedini bulun.

const arr=[-5,6,3,-5,-7,4,12,-58,72];

let toplam=0;

let adet=0;


/*for(let i=0;i<arr.length;i++){
    if(arr[i]>0 && arr[i]%2==0){
        toplam+=arr[i]
        adet++;


}
}*/

for (const x of arr) {
    if (x>0 && x%2==0){
        toplam+=x
        adet++;
    }
  }
console.log(`${adet} sayinin toplamı ${toplam}`);