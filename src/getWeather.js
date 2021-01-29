import { getGif } from './getGif'

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

    export { getWeather }