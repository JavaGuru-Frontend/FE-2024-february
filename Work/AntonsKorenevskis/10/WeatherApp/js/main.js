

// fetch metod
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  // inputval.value === введённый город
  // apik = "3045dd712ffe6e702e3245525ac7fa38"

// on btn click
  // addEventListener
  // fetch
  // response
  // теспература отображаеться в кельвинах но нам надо перевести в градусы цельсия
      // необходимо от введёной температуры отнять 273 и тогда мы получим градусы цельсия

  // ответ с сервера
  //   {
  //     "coord": {
  //         "lon": 23.7128,
  //         "lat": 56.65
  //     },
  //     "weather": [
  //         {
  //             "id": 802,
  //             "main": "Clouds",
  //             "description": "scattered clouds",
  //             "icon": "03d"
  //         }
  //     ],
  //     "base": "stations",
  //     "main": {
  //         "temp": 293.17,
  //         "feels_like": 292.48,
  //         "temp_min": 293.17,
  //         "temp_max": 293.17,
  //         "pressure": 1014,
  //         "humidity": 48,
  //         "sea_level": 1014,
  //         "grnd_level": 1014
  //     },
  //     "visibility": 10000,
  //     "wind": {
  //         "speed": 4.6,
  //         "deg": 299,
  //         "gust": 8.75
  //     },
  //     "clouds": {
  //         "all": 46
  //     },
  //     "dt": 1655294073,
  //     "sys": {
  //         "type": 1,
  //         "id": 1876,
  //         "country": "LV",
  //         "sunrise": 1655256795,
  //         "sunset": 1655320681
  //     },
  //     "timezone": 10800,
  //     "id": 459279,
  //     "name": "Jelgava",
  //     "cod": 200
  // }

let apik = "3045dd712ffe6e702e3245525ac7fa38";
const mySearches = document.querySelector('.mySearches');
let cityList = JSON.parse(localStorage.getItem('cityList')) || [];

loadFromLocalStorage();

myBtn.addEventListener("click", buttonPressed);

function buttonPressed() {
    let text = `https://api.openweathermap.org/data/2.5/weather?q=` + document.getElementById("cityinput").value + `&appid=` + apik;
    getWeather(text);
}


document.addEventListener('keydown', (event) => { 
    if (event.keyCode === 13) {
        buttonPressed();
    } 
}) 


let getWeather = (text) => {
    fetch(text)
        .then(response => response.json())
        .then(data => {
            cityoutput.innerHTML = '&#127757;' + data.name;
            description.innerHTML = 'Weather: ' + (JSON.stringify(data.weather[0].main).slice(1, -1)); 
            temp.innerHTML = 'Temperature: ' + Math.trunc(data.main.temp - 273) + ' °C';
            wind.innerHTML = 'Wind speed: ' + data.wind.speed + ' m/s';
            saveToLocalStorage(data.name);
            loadFromLocalStorage();
        })
        .catch(error => {
            console.log(error);
            cityoutput.innerHTML = 'Incorrect city name';
        });
    
}

function saveToLocalStorage(cityName) {
    if (!cityList.includes(cityName)) {
        cityList.push(cityName);
       localStorage.setItem('cityList', JSON.stringify(cityList));
    }
}

function loadFromLocalStorage() {
    let cityList = JSON.parse(localStorage.getItem('cityList')) || [];
    const mySearches = document.getElementById('mySearches');
    mySearches.innerHTML = '';
    cityList.forEach(cityName => {
        mySearches.innerHTML += `<li>${cityName}</li>`;
    });
}


let renderForecast = (data) => {
    document.querySelector('.cityoutput').innerHTML = data.name;
    document.querySelector('.description').innerHTML = data;
}

function checkInput() {
    let text = document.getElementById("cityinput").value;
    document.getElementById("description").innerHTML = "Hello World"; + text;
    getWeather;
}


