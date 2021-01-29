/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/getGif.js
function getGif (weather, t0) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=00ibi7jgk4Tkog3u9VTqyvTJQYt3Zfa0&s=${weather}`, {mode: 'cors'})
    .then(function(response) {
        if(!response.ok) {
            throw "Gif error!";
        }
        return response.json();
    })
    .then(function(response) {
        let img = document.querySelector("#gif");
        let displayT = document.querySelector("#gif-time");
        let t1, t;

        img.src = response.data.images.original.url;
        t1 = performance.now();
        t = t1 - t0;
        displayT.innerText = `Time it took to get gif: ${t / 1000}s`;
    })
    .catch((err) => {
        console.error(err);
        alert("Gif error occurred.");
    });
}


;// CONCATENATED MODULE: ./src/getWeather.js


   async function getWeather(city, temp, t0) {
     let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}${temp}&APPID=3ea0f850bb5508c08514a8d1e9523f48`, {mode: 'cors'});
     let weather = await response.json();
     let displayT = document.querySelector("#weather-time");
     let t1, t;

     if (weather.message == "city not found") {
      alert("City not found.");
      return
     }
     else if(!response.ok) {
       alert("Weather error occurred!");
       console.error("Weather error.");
       return;
     }

     fillTemplate (weather, temp, t0);
     t1 = performance.now();
     t = t1 - t0;
     displayT.innerText = `Time it took to get weather info: ${t /1000}s`;
   }

   function fillTemplate (weather, temp, t0) {
      let container = document.querySelector(".container");
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
      container.style.display = "grid";
      getGif(weather.weather[0].main, t0);
   }

    
;// CONCATENATED MODULE: ./src/index.js


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
/******/ })()
;