import axios from 'axios'

const API_KEY = '0a295293c4b804ada9dd363a2980c3f7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},TW`
  const request = axios.get(url);

  console.log('***** In action creators *****');
  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request // promise
  }
}
