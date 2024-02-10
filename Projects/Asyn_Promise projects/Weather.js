async function getWeatherUpdate (){
    const apiKey = "e82ec99f85971c33a7caf756a6d7af05"
    const city = "London"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;



    try {

        const response = await fetch(apiUrl);

        const data = await response.json();


        if(response.ok){
            const WeatherUpdate = data.weather[0].description;
            const tempreture = (data.main.temp - 273.15).toFixed(2)

            const weatherFinalUpdate = `Weather in ${city}: ${WeatherUpdate}, Tempreture: ${tempreture} °C`
            document.getElementById("weather-info").innerText = weatherFinalUpdate
        } else {
            throw new Error(`Failed to fetch weather data: ${data.message}`);
        }
     } 
     
     catch (error) {
        // Handle any errors that occur during the fetch operation
        document.getElementById('weather-info').innerText = `Error: ${error.message}`;
      }
}




getWeatherUpdate()