const apiKey = "933cc632626a501506be3dfd6e26f221";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")


let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    let data = await response.json();

    console.log(data)

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed.toFixed(1) + " km/h";
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather("Amsterdam");
