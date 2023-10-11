"use strict";
const getMiki = document.getElementById('Miki');
const getChris = document.getElementById('Chris');
const getMomo = document.getElementById('Momo');
const changeMiki = () => {
    if (getMiki) {
        getMiki.src = "img/miki2.jpg";
    }
};
const changeChris = () => {
    if (getChris) {
        getChris.src = "img/Chris2.jpg";
    }
};
const changeMomo = () => {
    if (getMomo) {
        getMomo.src = "img/momo2.jpg";
    }
};
getMiki === null || getMiki === void 0 ? void 0 : getMiki.addEventListener("click", changeMiki);
getChris === null || getChris === void 0 ? void 0 : getChris.addEventListener("click", changeChris);
getMomo === null || getMomo === void 0 ? void 0 : getMomo.addEventListener("click", changeMomo);
