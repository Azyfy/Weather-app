import { getWeather } from './getWeather'

let searchBtn = document.querySelector("#search");
let tempSelect = document.querySelector("#select-temp");
let toggleBtn = document.querySelector("#toggle-background");
let t0;

searchBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        //keyCode for enter

        if (searchBtn.value == "") {
            return;
        };
        t0 = performance.now();
        getWeather(searchBtn.value, tempSelect.value, t0);
        searchBtn.value = "";
    };
});