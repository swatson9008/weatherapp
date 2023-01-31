/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-useless-concat */
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
const mainContainer = document.getElementById('mainContainer');
let weatherContainer = document.getElementById('weatherContainer');
/* let newWeather = {}; */

searchField.defaultValue = 'Tokyo';

function handleErrors() {
  console.log('error');
  alert('Please try again!');
}

async function defaultApi() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65&units=imperial', { mode: 'cors' });
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

async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField.value}&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65&units=imperial`, { mode: 'cors' });
    const weatherData = await response.json();
    let newWeather = {
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      weatherDesc: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
      name: weatherData.name,
      icon: weatherData.weather[0].icon,
    };
    return newWeather;
  } catch (err) { handleErrors(); }
}

async function getCWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchField.value}&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65&units=metric`, { mode: 'cors' });
    const weatherData = await response.json();
    let newWeather = {
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      weatherDesc: weatherData.weather[0].description,
      windSpeed: weatherData.wind.speed,
      name: weatherData.name,
      icon: weatherData.weather[0].icon,
    };
    return newWeather;
  } catch (err) { handleErrors(); }
}

async function makeCtFbtn() {
  let FtC = document.createElement('div');
  FtC.id = 'FtoC';
  FtC.innerHTML = '<button>F ⇄ C</button>';
  FtC.addEventListener('click', (e) => {
    e.preventDefault();
    weatherMaster();
  });
  return FtC;
}

async function weatherCMaster() {
  weatherContainer.innerHTML = "";
  const weatherObj = await getWeather();
  let weatherDiv = document.createElement('div');
  weatherDiv.id = 'weatherDiv';
  weatherContainer.appendChild(weatherDiv);
  let nameDiv = document.createElement('div');
  nameDiv.id = 'nameID';
  nameDiv.innerHTML = weatherObj.name;
  weatherDiv.appendChild(nameDiv);
  let iconDiv = document.createElement('div');
  iconDiv.id = 'iconID';
  weatherDiv.appendChild(iconDiv);
  let iconPic = document.createElement('img');
  iconPic.src = `http://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`;
  iconDiv.appendChild(iconPic);
  let tempDiv = document.createElement('div');
  tempDiv.id = 'tempID';
  tempDiv.innerHTML = weatherObj.temp + 'C';
  weatherDiv.appendChild(tempDiv);
  let feelDiv = document.createElement('div');
  feelDiv.id = 'feelID';
  feelDiv.innerHTML = 'Feels like ' + weatherObj.feelsLike + 'C';
  weatherDiv.appendChild(feelDiv);
  let WSDiv = document.createElement('div');
  WSDiv.id = 'WSID';
  WSDiv.innerHTML = weatherObj.windSpeed + ' KM';
  weatherDiv.appendChild(WSDiv);
  let WeatherDescDiv = document.createElement('div');
  WeatherDescDiv.id = 'WeatherDescDivID';
  WeatherDescDiv.innerHTML = weatherObj.weatherDesc;
  weatherDiv.appendChild(WeatherDescDiv);
  let CtoF = await makeCtFbtn();
  weatherDiv.appendChild(CtoF);
}

async function makeFtCbtn() {
  let FtC = document.createElement('div');
  FtC.id = 'FtoC';
  FtC.innerHTML = '<button id="FnC">F ⇄ C</button>';
  FtC.addEventListener('click', (e) => {
    e.preventDefault();
    weatherCMaster();
  });
  return FtC;
}

async function weatherMaster() {
  weatherContainer.innerHTML = "";
  const weatherObj = await getWeather();
  let weatherDiv = document.createElement('div');
  weatherDiv.id = 'weatherDiv';
  weatherContainer.appendChild(weatherDiv);
  let nameDiv = document.createElement('div');
  nameDiv.id = 'nameID';
  nameDiv.innerHTML = weatherObj.name;
  weatherDiv.appendChild(nameDiv);
  let iconDiv = document.createElement('div');
  iconDiv.id = 'iconID';
  weatherDiv.appendChild(iconDiv);
  let iconPic = document.createElement('img');
  iconPic.src = `http://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`;
  iconDiv.appendChild(iconPic);
  let tempDiv = document.createElement('div');
  tempDiv.id = 'tempID';
  tempDiv.innerHTML = weatherObj.temp + 'F';
  weatherDiv.appendChild(tempDiv);
  let feelDiv = document.createElement('div');
  feelDiv.id = 'feelID';
  feelDiv.innerHTML = 'Feels like ' + weatherObj.feelsLike + 'F';
  weatherDiv.appendChild(feelDiv);
  let WSDiv = document.createElement('div');
  WSDiv.id = 'WSID';
  WSDiv.innerHTML = weatherObj.windSpeed + ' MPH';
  weatherDiv.appendChild(WSDiv);
  let WeatherDescDiv = document.createElement('div');
  WeatherDescDiv.id = 'WeatherDescDivID';
  WeatherDescDiv.innerHTML = weatherObj.weatherDesc;
  weatherDiv.appendChild(WeatherDescDiv);
  let FtoC = await makeFtCbtn();
  FtoC.id = 'FtoC';
  weatherDiv.appendChild(FtoC);
}

searchB.addEventListener('click', (e) => {
  e.preventDefault();
  weatherMaster();
});

weatherMaster();
