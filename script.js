document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeather(city) {
    const apiKey = '2017c4eba65d8cd353e94e00b6d0cebc'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}
