const apiKey = '91668a315eae4ea892424820241310';
const city = 'Sao Paulo';

fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
  .then(response => response.json())
  .then(data => {
    const weatherBlock = document.getElementById('block_weather');
    weatherBlock.innerHTML = `
      <h3>Weather in ${data.location.name} </h3><hr>
      <p> Temperature: ${data.current.temp_c}°C </p><hr>
      <p> ${data.current.condition.text} </p>
    `;
  });


// Function to update the weather block with the fetched data
function updateWeatherBlock(data) {
    const weatherBlock = document.getElementById('block2');
    weatherBlock.innerHTML = `
        <h3>Weather in ${data.location.name}</h3>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>${data.current.condition.text}</p>
    `;
}

// Function to display an error message in case of failure
function displayError() {
    const weatherBlock = document.getElementById('block2');
    weatherBlock.innerHTML = `<p>Unable to fetch weather data.</p>`;
}


// Set up automatic updates every 1 hour (3600000 ms)
setInterval(fetchWeather, 3600000); // 1 hour = 3600000 milliseconds



