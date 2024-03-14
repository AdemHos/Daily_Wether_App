const apiKey = '4b3432dc75fed2cb2e35a68898a46f76';
const apiURL = 'https://api.openweathermap.org/data/2.5/';
const search = document.getElementById('search');

const setQuery = (e) => {
  
    if(e.keyCode == '13') {
        getResult(search.value)
    }
}

const getResult = (cityName) => {
  let query = `${apiURL}weather?q=${cityName}&appid=${apiKey}&unit=metric&lang=tr`;
  fetch(query)
  .then(weather => {
    return weather.json();
  })
  .then(displayData)
}

const displayData = (result) => {

    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`;

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)/10}°C`;

    let desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`;
    

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)/10}°C / ${Math.round(result.main.temp_max)/10}°C`
}

search.addEventListener('keypress',setQuery)