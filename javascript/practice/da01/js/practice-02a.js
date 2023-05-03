let piSayisi=3.14;

console.log(typeof(piSayisi));//number

const str ="satranç oynamayı severim";
console.log(typeof(str));//string

let a=null;
let b=undefined;

console.log(Boolean(a));//false
console.log(Boolean(b));//false

let name1="ali";
let name2="Oya";
let name3="Can";
let name4=null;
let name5="";
let name6=undefined;

console.log(name1 && name2 && name3); //Can  false arar yoksa sondaki neyse onu yazar
console.log(name1 && name2 && name4 && name3); //null
console.log(name4 || name5 ||  name2 || name6); // Oya true arar yoksa ensona doğru arar undefine almaz
console.log(name4 || name5 || false || name6); // undefined true ara yoksa sona doğru gider

//== değeri kontrol eder

//=== değerle birlikte  type de kontrol eder

let x=40;

let y="30";

console.log(x=="40");// true

console.log(y===30);// false

console.log(y!==30); //true

console.log(x>y+10 );//false

