
// verilen 3 basamaklı sayının rakamları toplamını veren program

const sayi=254;

let birlerbas=sayi%10;

let onlarbas=Math.floor(sayi/10)%10;

let yuzlerbas=Math.floor(sayi/100);

let toplam=birlerbas+onlarbas+yuzlerbas;

console.log(`${sayi} sayısının  rakamları toplamı= ${toplam}`);

//Math.floor() (küsüratlı sayının küsaratını atar virgülden sonrasını siler)

//Math.ceiling() virgüllüsayıyı yukarıya yuvarlar


let a=5;

let b=--a;

let c=b++;

console.log(a,b,c);

