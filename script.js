const apiKey = "933cc632626a501506be3dfd6e26f221";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=rotterdam";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)
}

checkWeather();