import { getWeather } from './getWeather'

let searchBtn = document.querySelector("#search");
console.log(searchBtn);
searchBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        //keyCode for enter
    getWeather(searchBtn.value);
    searchBtn.value = "";
    };
});
