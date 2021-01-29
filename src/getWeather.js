/*
function getWeather (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3ea0f850bb5508c08514a8d1e9523f48`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
    .then(function(response) {
       if(response.message == "city not found") {
       alert(response.message); };
      })
    .catch(error =>  console.log(error));
    }
          Switched to do it with async await. 
    */
   
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
   }

    export { getWeather }