const apiKey = "59515668db324a1040e33b01bf4d69a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
            alert("City not found! Please try again.");
            return;
        }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure-value").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".wind-speed-value").innerHTML = data.wind.speed + " m/s";
    document.querySelector(".visibility-value").innerHTML = (data.visibility / 1000).toFixed(1) + " km";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "/images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "/images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "/images/mist.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "/images/rain.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "/images/snow.png";
    }

}
window.addEventListener("load", ()=>{
    checkWeather("Delhi");
});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
