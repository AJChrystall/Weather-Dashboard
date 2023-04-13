const apiKey = '2ed76626b4e5f9735df0eba669822045'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // URL for current weather API endpoint

// Fetch weather data for a specific location
function fetchWeatherData(location) {
  fetch(`${apiUrl}?q=${location}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Process the weather data
      console.log(data);
      // Update your website's UI with the weather data
      // Example: Display current temperature
      const temperature = data.main.temp;
      document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}
