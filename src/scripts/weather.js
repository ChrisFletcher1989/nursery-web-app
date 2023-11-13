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
        const currentTemperature = data.current_weather.temperature;
        const weatherList = document.getElementById('weatherList');
        if (weatherList !== null) {
            const listItem = document.createElement('li');
            listItem.textContent = `足立: ${currentTemperature}°C`;
            weatherList.appendChild(listItem);
            listItem.classList.add('home');
        }
    })
        .catch(error => {
        console.error('Error fetching data:', error);
    });
});
window.addEventListener('load', function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        const currentTemperature = data.current_weather.temperature;
        const weatherList = document.getElementById('weatherList');
        if (weatherList !== null) {
            const listItem = document.createElement('li');
            listItem.textContent = `ロンドン: ${currentTemperature}°C`;
            weatherList.appendChild(listItem);
            listItem.classList.add('home');
        }
    })
        .catch(error => {
        console.error('Error fetching data:', error);
    });
});
const getEngStyle = document.getElementById('engStyle');
let isToggled = false;
const changeEngStyle = () => {
    if (getEngStyle) {
        if (isToggled) {
            getEngStyle.innerHTML = "more info";
        }
        else {
            getEngStyle.innerHTML = "当園のカリキュラムは、免許を持つ保育士である梅田美貴子と経験豊富なイギリス人教師クリス・フレッチャーによって作成されました。英国とスコットランドの専門家パネルの指導を受け、ブリティッシュスタイルの学びと日本の質をバランスよく取り入れたカリキュラムです.";
        }
        isToggled = !isToggled;
    }
};
getEngStyle === null || getEngStyle === void 0 ? void 0 : getEngStyle.addEventListener("click", changeEngStyle);
