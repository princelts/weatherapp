const apiKey = "933cc632626a501506be3dfd6e26f221";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function checkWeather(cityName) {
    try {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    let data = await response.json();

    console.log(data)

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed.toFixed(1) + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.innerHTML = 
        '<path d="M 19.5 8 C 14.43 8 10.274672 11.993 10.013672 17 L 10 17 C 6.14 17 3 20.14 3 24 C 3 26.092 3.9267188 27.967953 5.3867188 29.251953 C 5.6887187 28.198953 6.1615312 27.217891 6.7695312 26.337891 C 6.2905313 25.677891 6 24.875 6 24 C 6 21.794 7.794 20 10 20 L 11.5 20 C 12.329 20 13 19.329 13 18.5 L 13 17.5 C 13 13.916 15.916 11 19.5 11 C 20.948 11 22.283234 11.481156 23.365234 12.285156 C 24.220234 12.105156 25.099 12 26 12 C 26.433 12 26.861156 12.027312 27.285156 12.070312 C 25.566156 9.6123125 22.72 8 19.5 8 z M 26 14 C 20.296828 14 15.735257 18.432004 15.203125 24 L 15 24 C 10.599415 24 7 27.599415 7 32 C 7 36.400585 10.599415 40 15 40 L 37 40 C 41.400585 40 45 36.400585 45 32 C 45 27.599415 41.400585 24 37 24 L 36.796875 24 C 36.264743 18.432004 31.703172 14 26 14 z M 26 17 C 30.436442 17 34 20.563558 34 25 L 34 25.5 A 1.50015 1.50015 0 0 0 35.5 27 L 37 27 C 39.779415 27 42 29.220585 42 32 C 42 34.779415 39.779415 37 37 37 L 15 37 C 12.220585 37 10 34.779415 10 32 C 10 29.220585 12.220585 27 15 27 L 16.5 27 A 1.50015 1.50015 0 0 0 18 25.5 L 18 25 C 18 20.563558 21.563558 17 26 17 z"></path>';
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.innerHTML = 
        '<path d="M 23.976562 3.9785156 A 1.50015 1.50015 0 0 0 22.5 5.5 L 22.5 8.5 A 1.50015 1.50015 0 1 0 25.5 8.5 L 25.5 5.5 A 1.50015 1.50015 0 0 0 23.976562 3.9785156 z M 10.902344 9.4042969 A 1.50015 1.50015 0 0 0 9.8574219 11.980469 L 11.978516 14.101562 A 1.5012202 1.5012202 0 0 0 14.101562 11.978516 L 11.980469 9.8574219 A 1.50015 1.50015 0 0 0 10.902344 9.4042969 z M 37.050781 9.4042969 A 1.50015 1.50015 0 0 0 36.019531 9.8574219 L 33.898438 11.978516 A 1.5012202 1.5012202 0 0 0 36.021484 14.101562 L 38.142578 11.980469 A 1.50015 1.50015 0 0 0 37.050781 9.4042969 z M 24 13 C 17.942632 13 13 17.942636 13 24 C 13 30.057364 17.942632 35 24 35 C 30.057368 35 35 30.057364 35 24 C 35 17.942636 30.057368 13 24 13 z M 24 16 C 28.436049 16 32 19.563954 32 24 C 32 28.436046 28.436049 32 24 32 C 19.563951 32 16 28.436046 16 24 C 16 19.563954 19.563951 16 24 16 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 8.5 25.5 A 1.50015 1.50015 0 1 0 8.5 22.5 L 5.5 22.5 z M 39.5 22.5 A 1.50015 1.50015 0 1 0 39.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 39.5 22.5 z M 13.009766 33.445312 A 1.50015 1.50015 0 0 0 11.978516 33.898438 L 9.8574219 36.019531 A 1.501221 1.501221 0 1 0 11.980469 38.142578 L 14.101562 36.021484 A 1.50015 1.50015 0 0 0 13.009766 33.445312 z M 34.943359 33.445312 A 1.50015 1.50015 0 0 0 33.898438 36.021484 L 36.019531 38.142578 A 1.5012209 1.5012209 0 1 0 38.142578 36.019531 L 36.021484 33.898438 A 1.50015 1.50015 0 0 0 34.943359 33.445312 z M 23.976562 37.978516 A 1.50015 1.50015 0 0 0 22.5 39.5 L 22.5 42.5 A 1.50015 1.50015 0 1 0 25.5 42.5 L 25.5 39.5 A 1.50015 1.50015 0 0 0 23.976562 37.978516 z"></path>';
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.innerHTML = 
        '<path d="M 24 6 C 17.74466 6 12.738712 10.879721 12.203125 17 L 11.5 17 C 6.823343 17 3 20.823343 3 25.5 C 3 30.176657 6.823343 34 11.5 34 L 11.650391 34 L 8.2128906 39.728516 A 1.5006124 1.5006124 0 1 0 10.787109 41.271484 L 15.148438 34 L 22.650391 34 L 19.212891 39.728516 A 1.5006123 1.5006123 0 1 0 21.787109 41.271484 L 26.148438 34 L 33.650391 34 L 30.212891 39.728516 A 1.5006123 1.5006123 0 1 0 32.787109 41.271484 L 37.169922 33.964844 C 41.53505 33.619324 45 29.950339 45 25.5 C 45 20.823343 41.176657 17 36.5 17 L 35.796875 17 C 35.261288 10.879721 30.25534 6 24 6 z M 24 9 C 28.988343 9 33 13.011657 33 18 L 33 18.5 A 1.50015 1.50015 0 0 0 34.5 20 L 36.5 20 C 39.555343 20 42 22.444657 42 25.5 C 42 28.546741 39.568689 30.984335 36.525391 30.998047 A 1.50015 1.50015 0 0 0 36.349609 30.982422 A 1.50015 1.50015 0 0 0 36.083984 31 L 25.53125 31 A 1.50015 1.50015 0 0 0 25.349609 30.982422 A 1.50015 1.50015 0 0 0 25.083984 31 L 14.53125 31 A 1.50015 1.50015 0 0 0 14.349609 30.982422 A 1.50015 1.50015 0 0 0 14.083984 31 L 11.5 31 C 8.444657 31 6 28.555343 6 25.5 C 6 22.444657 8.444657 20 11.5 20 L 13.5 20 A 1.50015 1.50015 0 0 0 15 18.5 L 15 18 C 15 13.011657 19.011657 9 24 9 z"></path>';
    } 
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.innerHTML = 
        '<path d="M 24 6 C 17.74466 6 12.738712 10.879721 12.203125 17 L 11.5 17 C 6.823343 17 3 20.823343 3 25.5 C 3 30.176657 6.823343 34 11.5 34 L 36.5 34 C 41.176657 34 45 30.176657 45 25.5 C 45 20.823343 41.176657 17 36.5 17 L 35.796875 17 C 35.261288 10.879721 30.25534 6 24 6 z M 24 9 C 28.988343 9 33 13.011657 33 18 L 33 18.5 A 1.50015 1.50015 0 0 0 34.5 20 L 36.5 20 C 39.555343 20 42 22.444657 42 25.5 C 42 28.555343 39.555343 31 36.5 31 L 11.5 31 C 8.444657 31 6 28.555343 6 25.5 C 6 22.444657 8.444657 20 11.5 20 L 13.5 20 A 1.50015 1.50015 0 0 0 15 18.5 L 15 18 C 15 13.011657 19.011657 9 24 9 z M 23.976562 35.978516 A 1.50015 1.50015 0 0 0 22.5 37.5 L 22.5 39.5 A 1.50015 1.50015 0 1 0 25.5 39.5 L 25.5 37.5 A 1.50015 1.50015 0 0 0 23.976562 35.978516 z M 35.976562 35.978516 A 1.50015 1.50015 0 0 0 34.5 37.5 L 34.5 39.5 A 1.50015 1.50015 0 1 0 37.5 39.5 L 37.5 37.5 A 1.50015 1.50015 0 0 0 35.976562 35.978516 z M 29.976562 38.978516 A 1.50015 1.50015 0 0 0 28.5 40.5 L 28.5 42.5 A 1.50015 1.50015 0 1 0 31.5 42.5 L 31.5 40.5 A 1.50015 1.50015 0 0 0 29.976562 38.978516 z"></path>';
    } 
    else if (data.weather[0].main == "Mist") {
        weatherIcon.innerHTML = 
        '<path d="M 24 6 C 18.827227 6 14.68712 10.016099 14.189453 15.0625 C 10.215542 15.235802 7 18.485416 7 22.5 C 7 26.624501 10.375499 30 14.5 30 L 33.5 30 C 37.624501 30 41 26.624501 41 22.5 C 41 18.485416 37.784458 15.235802 33.810547 15.0625 C 33.31288 10.016099 29.172773 6 24 6 z M 24 9 C 27.883178 9 31 12.116822 31 16 L 31 16.5 A 1.50015 1.50015 0 0 0 32.5 18 L 33.5 18 C 36.003499 18 38 19.996501 38 22.5 C 38 25.003499 36.003499 27 33.5 27 L 14.5 27 C 11.996501 27 10 25.003499 10 22.5 C 10 19.996501 11.996501 18 14.5 18 L 15.5 18 A 1.50015 1.50015 0 0 0 17 16.5 L 17 16 C 17 12.116822 20.116822 9 24 9 z M 9.5 33 A 1.50015 1.50015 0 1 0 9.5 36 L 38.5 36 A 1.50015 1.50015 0 1 0 38.5 33 L 9.5 33 z M 15.5 39 A 1.50015 1.50015 0 1 0 15.5 42 L 32.5 42 A 1.50015 1.50015 0 1 0 32.5 39 L 15.5 39 z"></path>';
    }



    } catch (error) {
        console.error("Error fetching weather data:", error);
        city.innerHTML = "City not found";
        temp.innerHTML = "N/A";
        humidity.innerHTML = "N/A";
        wind.innerHTML = "N/A";
    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && searchBox.value.trim() !== "") {
        checkWeather(searchBox.value.trim());
    }
});

checkWeather("Amsterdam");
