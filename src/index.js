/* eslint-disable no-console */
/* eslint-disable no-alert */
function handleErrors() {
  console.log('error');
  alert('Please try again!');
}

async function defaultApi() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=ddc8fb6879ccbfc5d2782d6a632b1b65', { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (err) { handleErrors(); }
}

defaultApi();

console.log('test');
