const sayac = document.querySelector(".sayac");
const gun = document.querySelector("#gun");
const saat = document.querySelector("#saat");
const dakika = document.querySelector("#dakika");
const saniye = document.querySelector("#saniye");
const birthday = "25 May 2023";
const gerisayim = () => {
    const newBirthday = new Date(birthday);
    console.log(birthday);
    console.log(newBirthday);
    const today = new Date();
    console.log(today);
    const totalSeconds = Math.floor((newBirthday - today) / 1000);
    console.log(totalSeconds);
    const day = Math.floor(totalSeconds / 60 / 60 / 24);
    console.log(day);
    const hour = Math.floor(totalSeconds / 60 / 60 % 24);
    console.log(hour);
    const minute = Math.floor(totalSeconds / 60 % 60);
    console.log(minute);
    const second = Math.floor(totalSeconds % 60);
    console.log(second);
    gun.innerHTML = formatTime(day);
    saat.innerHTML = formatTime(hour);
    dakika.innerHTML = formatTime(minute);
    saniye.innerHTML = formatTime(second);
};
setInterval(() => {
    gerisayim();
    if (sayac.style.background == "antiquewhite") {
        sayac.style.background = "yellow";
    } else {
        sayac.style.background = "antiquewhite"
    }
}, 1000);
const formatTime = (time) => {
    return time == 0 ? "00" : time < 10 ? `0${time}` : time;
};
gerisayim();