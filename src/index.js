/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import './style.css';

const searchField = document.getElementById('searchField');
const searchB = document.getElementById('searchB');
let newWeather = {};

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
  console.log(newWeather);
}

async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField.value}&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65&units=imperial`, { mode: 'cors' });
    const weatherData = await response.json();
    /* const newWeather = await weatherData.weatherMake(); */
    const newWeather = {
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      weatherDesc: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
      name: weatherData.name,
    };
    console.log(newWeather);
    const weatherM = await newWeather.weatherMake();
  } catch (err) { handleErrors(); }
}

searchB.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather();
});
