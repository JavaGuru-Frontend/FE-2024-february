document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('cityinput');
    const submitButton = document.getElementById('add');
    const cityOutput = document.getElementById('cityoutput');
    const description = document.getElementById('description');
    const temp = document.getElementById('temp');
    const wind = document.getElementById('wind');
    const apiKey = '3045dd712ffe6e702e3245525ac7fa38';

    submitButton.addEventListener('click', () => {
        const cityName = input.value.trim();

        if (cityName) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    return response.json();
                })
                .then(data => {
                    cityOutput.textContent = data.name;
                    description.textContent = data.weather[0].description;
                    
                  
                    const kelvinTemp = data.main.temp;
                    const celsiusTemp = kelvinTemp - 273.15;
                    temp.textContent = `Temperature: ${celsiusTemp.toFixed(1)}°C`;

                    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                })
                .catch(error => {
                    console.error('Error fetching weather:', error);
                    cityOutput.textContent = 'City not found';
                    description.textContent = '';
                    temp.textContent = '';
                    wind.textContent = '';
                });
        } else {
            alert('Please enter a city name');
        }
    });
});