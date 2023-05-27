import { setItem } from "./utils/storage";
import "./index.scss";
document.getElementById("btnSayHello").addEventListener("click", ()=>{
    alert("Hello Webpack");
    const arr = [123,56,893,23,65,87,3];
    console.log(getArray([...arr]));
    setItem("token", "5449234-56341235-234234-1233123-4545454");
})
const getArray = (arr)=> {
    return arr.filter( (x)=>x>100).reduce( (t,x)=> t+x, 0);
}
