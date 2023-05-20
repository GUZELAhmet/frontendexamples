const showAlert=(msg)=>{
    alert(msg);
}

const showConfirm=(msg)=>{
    return confirm(msg);
}
export default showAlert;
export {showAlert ,showConfirm};