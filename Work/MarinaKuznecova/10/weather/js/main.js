

// fetch metod
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  // inputval.value === введённый город
  // apik = "3045dd712ffe6e702e3245525ac7fa38"

// on btn click
  // addEventListener
  // fetch
  // response
  // температура отображаеться в кельвинах но нам надо перевести в градусы цельсия
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

  const apik = "3045dd712ffe6e702e3245525ac7fa38";

let inputCity = document.querySelector('#cityInput');
let btn = document.querySelector('#add');
let city = document.querySelector('#cityOutput');
let descrip = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');

function toCelcius(value) {                          // кельвины в цельсии
  return (value - 273).toFixed(2);
}

function meterPerSecond(value) {                    // км/ч в м/с
  return (value * 1000 / 3600).toFixed(2);     
}

btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=' + apik)
    .then(response => response.json())
    .then(data => {
      let nameCity = data['name'];
      let descrip = data['weather']['0']['description'];
      let tempature = data['main']['temp'];
      let wndspd = data['wind']['speed'];
      let country = data['sys']['country'];
      city.innerHTML = `Weather of <span>${nameCity},${country}<span>`;
      temp.innerHTML = `Temperature: <span>${toCelcius(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h (${meterPerSecond(wndspd)} m/c)<span>`;
    })

    .catch(err => alert('You entered Wrong city name'));
})
