function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
  
function fetchWeatherForecastData(location) {
    const apiKey = '2ed76626b4e5f9735df0eba669822045'; // Actual API key
    const startDate = addDays(new Date(), 5); // Get date after adding 5 days
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&start_date=${startDate.toISOString()}`)
      .then(response => response.json())
      .then(data => {
        // Process the weather forecast data
        console.log(data);
        // Update your website's UI with the weather forecast data
        // Example: Display forecasted temperature, humidity, and wind speed
        const forecastData = data.list;
        const forecastContainer = document.getElementById('forecastData');
        forecastContainer.innerHTML = ''; // Clear previous forecast data
        forecastData.forEach(forecast => {
          const forecastDate = new Date(forecast.dt * 1000); // Convert timestamp to date object
          const forecastTemperatureKelvin = forecast.main.temp;
          const forecastTemperatureCelsius = forecastTemperatureKelvin - 273.15;
          const forecastHumidity = forecast.main.humidity;
          const forecastWindSpeed = forecast.wind.speed;
          const forecastElement = document.createElement('div');
          forecastElement.innerHTML = `
            <p>Date: ${forecastDate.toLocaleDateString()}</p>
            <p>Temperature: ${forecastTemperatureCelsius.toFixed(2)}°C</p>
            <p>Humidity: ${forecastHumidity}%</p>
            <p>Wind Speed: ${forecastWindSpeed} m/s</p>
          `;
          forecastContainer.appendChild(forecastElement);
        });
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }
  
  
