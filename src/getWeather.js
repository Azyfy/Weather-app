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
   
   async function getWeather(city) {
     let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3ea0f850bb5508c08514a8d1e9523f48`, {mode: 'cors'});
     let weather = await response.json();
     // !!response.ok do error later

     console.log("asy");
     fillTemplate (weather);
     console.log(weather);
   }
   console.log("this weather");

   function fillTemplate (weather) {
      let city = document.querySelector("#city");
      let country = document.querySelector("#country");
      let weatherDesc = document.querySelector("#weather");
      let temperature = document.querySelector("#temperature");
      let humidity = document.querySelector("#humidity");

      city.innerText = `${weather.name}, `;
      country.innerText = `${weather.sys.country}`;
      weatherDesc.innerText = `${weather.weather[0].description}`;
      temperature.innerText = `${weather.main.temp}`;
      humidity.innerText = `${weather.main.humidity}`;
   }

    export { getWeather }