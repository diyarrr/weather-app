
const input = document.getElementById("place");
const search = document.querySelector("span");

// To get the specific url, I will combine the api key and cityname

let key = "604d1a8210fda7da28563a0d092e553c";

let cityName = "izmir";


gettingData(cityName).then(function(data) {
    manipulateHtml(data);
})

// In case search icon clicked

search.addEventListener("click", () => {

    cityName = input.value;

    gettingData(cityName).then(function(data) {
        manipulateHtml(data);
        
    })
    input.value = "";

})

// In case user type "enter"

window.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        cityName = input.value;
        gettingData(cityName).then(function(data) {
            manipulateHtml(data);
            
        });
        input.value = "";

    }
})




async function gettingData(cityName) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key;

    try {
        const response = await fetch(url, {mode: "cors"});
        if(!response.ok) {
            throw new Error("City " + cityName +  " not found");
        }
        const weatherData = await response.json();
        return weatherData;

    } catch(err) {
        alert(err);
    }

}



// Altering the hmtl info with the chosen city weather info

function manipulateHtml(data) {
    const city = document.getElementById("city");
    const condition = document.getElementById("condition");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feels-like");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");


    city.textContent = data.name;
    condition.textContent = data.weather[0].description;
    temperature.textContent = convertKelToCel(data.main.temp) + " °C";
    let fL = convertKelToCel(data.main.feels_like);
    feelsLike.textContent = "Feels like: " + fL + " °C";
    humidity.textContent = "Humidity: " +data.main.humidity + " %";
    wind.textContent = "Wind: " + data.wind.speed + " km\\h";

}


// Converting given Kelvin temperature to Celcius

function convertKelToCel(temperature) {
    return parseFloat(temperature - 273.15).toFixed(2);

}