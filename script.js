const  apiKey = "59515668db324a1040e33b01bf4d69a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " m/s";
    document.querySelector(".visibility").innerHTML = Math.decimal(data.visibility/1000) + " km";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = cloud.png;
    }
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});
