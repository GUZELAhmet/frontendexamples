const setItem = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  const getItem = (key) => {
    localStorage.getItem(key);
  };
  
  export { setItem, getItem };