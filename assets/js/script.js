function fetchWeatherForecastData(location) {
    const apiKey = '2ed76626b4e5f9735df0eba669822045'; // Replace with your actual API key
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Process the weather forecast data
            console.log(data);
            // Update your website's UI with the weather forecast data
            // Example: Display forecasted temperature, humidity, and wind speed
            const forecastDataContainer = document.getElementById('forecastData');
forecastDataContainer.innerHTML = '';
const forecastsByDay = {};
for (let i = 0; i < data.list.length; i++) {
    const forecast = data.list[i];
    const forecastDateTime = new Date(forecast.dt * 1000); // Convert timestamp to Date object
    const forecastDate = forecastDateTime.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}); // Format date as "Weekday, Month Day, Year"
    const forecastTime = forecastDateTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}); // Format time as "hh:mm AM/PM"
    const forecastTemperatureKelvin = forecast.main.temp;
    const forecastTemperatureCelsius = forecastTemperatureKelvin - 273.15;
    const forecastHumidity = forecast.main.humidity;
    const forecastWindSpeed = forecast.wind.speed;
    // Create a new weather box for each day, but limit it to 5 weather boxes
    if (!forecastsByDay[forecastDate] && Object.keys(forecastsByDay).length < 5) {
        forecastsByDay[forecastDate] = document.createElement('div'); 
        forecastsByDay[forecastDate].className = 'weather-container';
        // Append the weather box to the appropriate day's container
        forecastDataContainer.appendChild(forecastsByDay[forecastDate]);
    }
    const weatherBox = document.createElement('div');
    weatherBox.className = 'weather-box';
    // Add icons based on weather condition
    let weatherIcon = '';
    if (forecast.weather[0].main === 'Clear') {
        weatherIcon = '<i class="fas fa-sun"></i>'; // Sun icon for clear weather
    } else if (forecast.weather[0].main === 'Clouds') {
        weatherIcon = '<i class="fas fa-cloud"></i>'; // Cloud icon for cloudy weather
    } else if (forecast.weather[0].main === 'Rain') {
        weatherIcon = '<i class="fas fa-cloud-rain"></i>'; // Cloud with rain icon for rainy weather
    } else if (forecast.weather[0].main === 'Snow') {
        weatherIcon = '<i class="fas fa-snowflake"></i>'; // Snowflake icon for snowy weather
    }
    weatherBox.innerHTML = `
        ${weatherIcon} <!-- Add the weather icon here -->
        <p>Date/Time: ${forecastDate} ${forecastTime}</p>
        <p>Temperature: ${forecastTemperatureCelsius.toFixed(2)}°C</p>
        <p>Humidity: ${forecastHumidity}%</p>
        <p>Wind Speed: ${forecastWindSpeed} m/s</p>
    `;
    forecastsByDay[forecastDate].appendChild(weatherBox);

            }
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}



