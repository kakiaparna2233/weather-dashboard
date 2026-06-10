const weatherData = {
    hyderabad: {
        temperature: 34,
        humidity: 60,
        windSpeed: 10
    },

    vijayawada: {
        temperature: 32,
        humidity: 70,
        windSpeed: 12
    },

    delhi: {
        temperature: 38,
        humidity: 50,
        windSpeed: 15
    },

    mumbai: {
        temperature: 30,
        humidity: 80,
        windSpeed: 8
    }
};

const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {

    const city =
        document.getElementById("cityInput")
        .value
        .toLowerCase();

    if(city === ""){
        result.innerHTML =
        "<p>Please enter a city name.</p>";
        return;
    }

    if(weatherData[city]){

        const data = weatherData[city];

        result.innerHTML = `
            <h2>${city.toUpperCase()}</h2>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.windSpeed} km/h</p>
        `;
    }
    else{
        result.innerHTML =
        "<p>City not found.</p>";
    }

});