"use strict";
window.addEventListener('load', function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.76&longitude=139.81&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        console.log(data.current_weather.temperature);
        const currentTemperature = data.current_weather.temperature;
        const weatherList = document.getElementById('weatherList');
        if (weatherList !== null) {
            const listItem = document.createElement('li');
            listItem.textContent = `足立: ${currentTemperature}°C`;
            weatherList.appendChild(listItem);
            listItem.classList.add('home');
            console.log(currentTemperature);
        }
    })
        .catch(error => {
        console.error('Error fetching data:', error);
    });
});
