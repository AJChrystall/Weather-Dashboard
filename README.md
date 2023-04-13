# Weather Dashboard
This is a simple web application that displays weather forecast data for a specific city using the OpenWeatherMap API. The application is built using HTML, CSS, and JavaScript.

Getting Started:
To use this weather dashboard, follow these steps:
Clone or download the repository to your local machine.
Open the index.html file in your web browser.
Enter the name of a city in the input field with the placeholder "Enter city".
Click the "Get Weather" button or press Enter to submit the form.
The application will fetch weather forecast data for the specified city and display it on the page.

HTML Structure:
The HTML structure of the weather dashboard is as follows:
<!DOCTYPE html>: This declaration defines the document type and version of HTML being used.
<html>: This is the root element of the HTML document.
<head>: This section contains meta-information about the HTML document, such as the title of the page and external stylesheets.
<title>: This element specifies the title of the HTML document, which is displayed in the title bar of the web browser.
<link rel="stylesheet">: This element is used to link an external CSS file to the HTML document for styling.
<body>: This section contains the body content of the HTML document, including the form for input, the forecast data container, and the JavaScript code.
<form>: This element represents a form that contains input fields and buttons for user interaction.
<input type="text">: This element is used to create a text input field for the user to enter a city name.
<button type="submit">: This element represents a submit button that the user can click to submit the form.
<div>: This element is used to create a container for the forecast data.
<ul>: This element represents an unordered list that will contain the forecast data.
<li>: This element represents a list item that will contain the weather forecast information for a specific day.


JavaScript Functionality:
The JavaScript code in the <script> tag is responsible for fetching weather forecast data from the OpenWeatherMap API and updating the UI with the retrieved data. The following functionality is implemented:
Event listener for form submit: An event listener is added to the form submit event, which prevents the default form submission behavior and calls the fetchWeatherForecastData() function with the city name entered by the user.
fetchWeatherForecastData() function: This function takes a city name as a parameter and fetches weather forecast data for that city using the OpenWeatherMap API. The retrieved data is then processed and displayed on the UI.
Displaying weather forecast data: The fetchWeatherForecastData() function retrieves weather forecast data in JSON format from the API response. The data is then processed to extract relevant information such as date/time, weather description, temperature, humidity, wind speed, and weather icon. This information is then dynamically added to the forecast list in the HTML using DOM manipulation methods.
Error handling: If there is an error while fetching weather forecast data, the fetchWeatherForecastData() function catches the error and displays it in the console.

CSS Styling:
The CSS styling for the weather dashboard is defined in an external stylesheet (style.css) and linked to the HTML document using the <link> tag in the <head> section. The styling includes basic layout and design for the form, forecast data container, and weather forecast list items.
Weather-Dashboard using API's

Dependencies:
This application uses the OpenWeatherMap API to fetch weather forecast data. You need to replace the API key with your own key in the fetchWeatherForecastData() function in the script.js file. You can obtain an API key by signing up for a free account on the OpenWeatherMap website.
The application also uses a CSS file style.css located in the assets/styling/ directory for styling purposes.

Credits:
This application was created by Alexander as a personal project or as part of a web development course.
The weather forecast data is retrieved from the OpenWeatherMap API (https://openweathermap.org/) which provides free weather data and forecast APIs for developers.

License:
This application is open source and free to use. You can modify and distribute it as per your requirements. Please refer to the license file for more information.

Support:
If you encounter any issues or have any questions or suggestions, please feel free to contact [Alexander] at [sorryicantgiveyouit@gmail.com].

Live Url: https://ajchrystall.github.io/Weather-Dashboard/ 
HTTPS: https://github.com/AJChrystall/Weather-Dashboard.git
SSH: git@github.com:AJChrystall/Weather-Dashboard.git 
GitHubClone: gh repo clone AJChrystall/Weather-Dashboard