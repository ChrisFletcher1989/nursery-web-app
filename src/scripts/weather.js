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
//////////////BOXES ON CLICK/////////////////////
const getEngStyle = document.getElementById('engStyle');
const getEngBox = document.getElementById('engBox');
const getElegantBox = document.getElementById('elegantBox');
const getElegantText = document.getElementById('elegantText');
const getPeaceBox = document.getElementById('peaceBox');
const getPeaceText = document.getElementById('peaceText');
const getInOutBox = document.getElementById('inOutBox');
const getInOutText = document.getElementById('inOutText');
const getSecurityBox = document.getElementById('securityBox');
const getSecurityText = document.getElementById('securityText');
let isToggled = false;
const changeEngStyle = () => {
    if (getEngBox) {
        if (isToggled && getEngStyle != null) {
            getEngStyle.innerHTML = "More info here";
        }
        else if (getEngStyle != null) {
            getEngStyle.innerHTML = "当園のカリキュラムは、免許を持つ保育士である梅田美貴子と経験豊富なイギリス人教師クリス・フレッチャーによって作成されました。英国とスコットランドの専門家パネルの指導を受け、ブリティッシュスタイルの学びと日本の質をバランスよく取り入れたカリキュラムです.";
        }
        isToggled = !isToggled;
    }
};
const changeElegantText = () => {
    if (getElegantBox) {
        if (isToggled && getElegantText != null) {
            getElegantText.innerHTML = "More info here";
        }
        else if (getElegantText != null) {
            getElegantText.innerHTML = "Elegant & Politeここでは、お子さま同士が礼儀正しく接することや、良いマナーを身につけること、上品な日本語で話すことを奨励しています。それぞれが 'The King's English' と上品な日本語を組み合わせた、丁寧で気品あるコミュニケーションを目指しています.";
        }
        isToggled = !isToggled;
    }
};
const changePeaceText = () => {
    if (getPeaceBox) {
        if (isToggled && getPeaceText != null) {
            getPeaceText.innerHTML = "More info here";
        }
        else if (getPeaceText != null) {
            getPeaceText.innerHTML = "DECIDE";
        }
        isToggled = !isToggled;
    }
};
const changeInOutText = () => {
    if (getInOutBox) {
        if (isToggled && getInOutText != null) {
            getInOutText.innerHTML = "More info here";
        }
        else if (getInOutText != null) {
            getInOutText.innerHTML = "DECIDE";
        }
        isToggled = !isToggled;
    }
};
const changeSecurityText = () => {
    if (getSecurityBox) {
        if (isToggled && getSecurityText != null) {
            getSecurityText.innerHTML = "More info here";
        }
        else if (getSecurityText != null) {
            getSecurityText.innerHTML = "DECIDE";
        }
        isToggled = !isToggled;
    }
};
getEngBox === null || getEngBox === void 0 ? void 0 : getEngBox.addEventListener("click", changeEngStyle);
getElegantBox === null || getElegantBox === void 0 ? void 0 : getElegantBox.addEventListener("click", changeElegantText);
getPeaceBox === null || getPeaceBox === void 0 ? void 0 : getPeaceBox.addEventListener("click", changePeaceText);
getInOutBox === null || getInOutBox === void 0 ? void 0 : getInOutBox.addEventListener("click", changeInOutText);
getSecurityBox === null || getSecurityBox === void 0 ? void 0 : getSecurityBox.addEventListener("click", changeSecurityText);
