/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import './style.css';

const searchField = document.getElementById('searchField');
const searchB = document.getElementById('searchB');
const weatherContainer = [];

class weatherC {
  constructor(temp, feelsLike, weatherDesc, windSpeed, name) {
    this.name = name;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.windSpeed = windSpeed;
    this.weatherDesc = weatherDesc;
  }
}

function handleErrors() {
  console.log('error');
  alert('Please try again!');
}

async function defaultApi() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65&units=imperial', { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.main.temp);
    const weatherFinal = {
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      weatherDesc: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
      name: weatherData.name,
    };
  } catch (err) { handleErrors(); }
}

defaultApi();

function weatherMake() {
  const nuWeather = new weatherC();
  weatherC.name = weatherData.name;
  weatherC.temp = weatherData.main.temp;
  weatherC.feelsLike = weatherData.main.feels_like;
  weatherC.weatherDesc = weatherData.weather[0].description;
  weatherC.windSpeed = weatherData.wind.windSpeed;
  console.log(nuWeather);
}

async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField.value}&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65&units=imperial`, { mode: 'cors' });
    const weatherData = await response.json();
    const newWeather = await weatherData.weatherMake();
  } catch (err) { handleErrors(); }
}

searchB.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather();
});
