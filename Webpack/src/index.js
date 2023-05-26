import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap";


document.getElementById("btnSayHello").addEventListener("click", ()=>{
    alert("Hello Webpack");
    setItem("token", "234234-56465-234234-1233123-4545454");
})