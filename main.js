/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/getGif.js
function getGif (weather) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=00ibi7jgk4Tkog3u9VTqyvTJQYt3Zfa0&s=${weather}`, {mode: 'cors'})
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        let img = document.querySelector("#gif");
        img.src = response.data.images.original.url;
    });
}


;// CONCATENATED MODULE: ./src/getWeather.js


   async function getWeather(city, temp) {
     let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${temp}&APPID=3ea0f850bb5508c08514a8d1e9523f48`, {mode: 'cors'});
     let weather = await response.json();
     // !!response.ok do error later

     console.log("asy");
     fillTemplate (weather, temp);
     console.log(weather);
   }
   console.log("this weather");

   function fillTemplate (weather, temp) {
      let city = document.querySelector("#city");
      let country = document.querySelector("#country");
      let weatherDesc = document.querySelector("#weather");
      let temperature = document.querySelector("#temperature");
      let humidity = document.querySelector("#humidity");

      let deg = " °K";
      if (temp == "&units=metric") {
        deg = " °C";
      }
      else if (temp == "&units=imperial") {
        deg = " °F";
      }

      city.innerText = `${weather.name}, `;
      country.innerText = `${weather.sys.country}`;
      weatherDesc.innerText = `${weather.weather[0].description}`;
      temperature.innerText = `${weather.main.temp}${deg}`;
      humidity.innerText = `${weather.main.humidity} %`;
      getGif(weather.weather[0].main);
   }

    
;// CONCATENATED MODULE: ./src/index.js


let searchBtn = document.querySelector("#search");
let tempSelect = document.querySelector("#select-temp");

searchBtn.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        //keyCode for enter
    getWeather(searchBtn.value, tempSelect.value);
    searchBtn.value = "";
    };
});
/******/ })()
;