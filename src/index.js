import { getWeather } from './getWeather'

let searchBtn = document.querySelector("#search");
let tempSelect = document.querySelector("#select-temp");

searchBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        //keyCode for enter
    getWeather(searchBtn.value, tempSelect.value);
    searchBtn.value = "";
    };
});