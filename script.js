const apiKey = import.meta.env.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherInfo = document.querySelector(".weather-info");
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            alert("City not found. Please enter a valid city name.");
            weatherInfo.classList.remove("show");
            return;
        }
        const data = await response.json();

        document.getElementById("city-name").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("weather-description").innerHTML = data.weather[0].description;
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind-speed").innerHTML = data.wind.speed + " km/h";
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherInfo.classList.add("show");

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching weather data. Please try again later.");
        weatherInfo.classList.remove("show");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});