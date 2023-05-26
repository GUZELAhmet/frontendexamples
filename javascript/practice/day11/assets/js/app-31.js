

let gorunenil = "ankara";
document.getElementById("changeLocation").addEventListener("click", () => {
    document.getElementById("ilGoster").style.display = "block";
});
document.getElementById("iller").addEventListener("change", (e) => {
    gorunenil = e.target.value;
    console.log(gorunenil);
    document.getElementById("ilGoster").style.display = "none";
    fetchData();
});
const kartaYaz = (data) => {
    let date = new Date(data.current_observation.pubDate * 1000);
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById("gunumuz").innerText = daysOfWeek[date.getDay()];
    document.getElementById("tarih").innerText = date.toLocaleDateString("en-US", options);
    document.getElementById("sicaklik").innerText = data.current_observation.condition.temperature + `\xB0 C`;
    document.getElementById("durumYazi").innerText = data.current_observation.condition.text;
    document.getElementById("yerimiz").innerText = data.location.city + ', TR';
    document.getElementById("durum").innerHTML = durumResmi(data.current_observation.condition.code);
    document.getElementById("durum1").innerHTML = durumResmi(data.forecasts[1].code);
    document.getElementById("durum2").innerHTML = durumResmi(data.forecasts[2].code);
    document.getElementById("durum3").innerHTML = durumResmi(data.forecasts[3].code);
    document.getElementById("durum4").innerHTML = durumResmi(data.forecasts[4].code);
};
const durumResmi = (code) => {
    if (code == 3 || code == 4) return '<i class="fa-solid fa-cloud-bolt"></i>'
    if (code == 11 || code == 12) return '<i class="fa-solid fa-cloud-rain"></i>'
    if (code == 26 || code == 28 || code == 30) return '<i class="fa-solid fa-cloud"></i>'
    return '<i class="fa-solid fa-sun"></i>'
 };




const fetchData =async()=>{
    //const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Bursa&format=json&u=c';
    const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=${gorunenil}&format=json&u=c';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5c92897d37msh2eda45fae0479cbp1a0356jsn0a3c71245ff5',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        kartaYaz(data);




    } catch (error) {
        console.error(error);
    }
}
fetchData();
