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
            listItem.classList.add('weather');
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
            listItem.classList.add('weather');
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
            getEngStyle.innerHTML = "当園のカリキュラムは、免許を持つ保育士である梅田みき子と経験豊富なイギリス人教師クリス・フレッチャーによって作成されました。英国とスコットランドの専門家パネルの指導を受け、ブリティッシュスタイルの学びと日本の質をバランスよく取り入れたカリキュラムです.";
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
            getPeaceText.innerHTML = "お子さまは皆さまの人生で最も大切な存在です。安心してお預けいただける場所であることをご理解いたします。梅田先生は免許を持つプロフェッショナルであり、お子さまの安全とセキュリティを最優先に考えています。安全を確保しながらお子さまをお預かりし、お迎えになる前に希望であればお風呂に入れて、ご飯を食べさせることも可能です。どうぞ安心してお子さまをお預けください.";
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
            getInOutText.innerHTML = "英語を学ぶ際、情報入力(Input)と自然なアウトプット(Output)の両方が成功への秘訣です。単に聞くだけや、意味を持たないフレーズの反復だけでは、以前に得た情報に基づいて自分自身で英文を作ることほど脳内の活性化につながりません。そのため、Merry Kidsではお子さまがプレッシャーやジャッジメントなしに間違いを恐れずに英語を話し、そこから学べる環境を提供しています。また、アートや自己表現などの遊びのすべてにも同じ考えが適用されます。";
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
            getSecurityText.innerHTML = "私たちはすべての取り組みにおいてセキュリティを最優先としています。経験豊かなプロフェッショナルにお子さまをお預けいただくことで、お子さまと関連するデータを含め、万全の注意でお預かりし、保護していることを保証いたします。";
        }
        isToggled = !isToggled;
    }
};
getEngBox === null || getEngBox === void 0 ? void 0 : getEngBox.addEventListener("click", changeEngStyle);
getElegantBox === null || getElegantBox === void 0 ? void 0 : getElegantBox.addEventListener("click", changeElegantText);
getPeaceBox === null || getPeaceBox === void 0 ? void 0 : getPeaceBox.addEventListener("click", changePeaceText);
getInOutBox === null || getInOutBox === void 0 ? void 0 : getInOutBox.addEventListener("click", changeInOutText);
getSecurityBox === null || getSecurityBox === void 0 ? void 0 : getSecurityBox.addEventListener("click", changeSecurityText);
