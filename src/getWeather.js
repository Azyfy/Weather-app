function getWeather (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3ea0f850bb5508c08514a8d1e9523f48`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
    .then(function(response) {
        console.log(response);
       if(response.message == "city not found") {
       alert(response.message); };
       console.log(response.main.temp);
      })
    .catch(error =>  console.log(error));
    }

    export { getWeather }