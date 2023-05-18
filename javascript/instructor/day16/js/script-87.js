const hourEl = document.querySelector("#clock li:nth-child(1)");
const secondEl = document.querySelector("#clock li:nth-child(5)");
const minuteEl = document.querySelector("#clock li:nth-child(3)");
const hourHand = document.querySelector("#saat");

setInterval(() => {
    const dateTime = new Date();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();
    hourEl.innerHTML = hour<10 ? `0${hour}` : hour;
    minuteEl.innerHTML = minute<10 ? `0${minute}` : minute;
    secondEl.innerHTML = second<10? `0${second}` : second;
    secondEl.classList.toggle("hidden");
    
}, 10);

function formatZaman(zaman) {
    return zaman < 10 ? "0" + zaman : zaman;
  }
  
  function otomatikZamanGoster() {
    var tarih = new Date();
    var saat = formatZaman(tarih.getHours());
    var dakika = formatZaman(tarih.getMinutes());
    var saniye = formatZaman(tarih.getSeconds());
  
    var zaman = saat + ":" + dakika + ":" + saniye;
    document.getElementById("saat").textContent = zaman;
  }
  
hourHand.innerHTML= `<h1> ${setInterval(otomatikZamanGoster, 1000)}</h1>`;