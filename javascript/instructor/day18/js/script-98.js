import showAlert, { showConfirm } from "./message.js"

document.getElementById("btnAlert").addEventListener("click" ,()=>{
    showAlert("hello modüle")
});


document.getElementById("btnConfirm").addEventListener("click" , ()=>{
showConfirm
});