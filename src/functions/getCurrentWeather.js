import {getCurrentLocation} from "./getCurrentLocation"

const coordinates = await getCurrentLocation()

async function getCurrentWeather(latitude=coordinates.latitude, longitude=coordinates.longitude) {

  const weatherObject = {}
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=d97b92b3713b208bd4f0efebb1ff2604`);
    const data = await response.json()
    makeWeatherObject(data, weatherObject)
    //console.log(data.dt)
    //console.log(new Date(data.dt)/* .getHours() */)
  }
  catch{
    console.log(ErrorEvent)
    alert("Не удалось загрузить данные. Попробуте позже или перезагрузите станицу")
  }

  return weatherObject
}

function makeWeatherObject(data, weatherObject){
  weatherObject.timezone = data.timezone
  weatherObject.id = data.weather[0].icon
  weatherObject.description = data.weather[0].description;
  weatherObject.temperature = Math.round(data.main.temp) +"°"; 
  weatherObject.pressure = Math.round(data.main.pressure*0.750064); 
  weatherObject.humidity = data.main.humidity +'%'; 
  weatherObject.city = data.name;
  weatherObject.sunrise = convertTime(data.sys.sunrise+data.timezone);
  weatherObject.sunset = convertTime(data.sys.sunset+data.timezone); 
  weatherObject.wind = data.wind.speed +" м/с";
  weatherObject.clouds = data.clouds.all + "%";
}

function convertTime(time){
  let UTCTime = new Date(time * 1000) // получение timestamp из unix;
  let hours = UTCTime.getUTCHours();
  let minuties = UTCTime.getUTCMinutes();

  if (hours < 10){
    hours = `0${hours}`
  }

  if (minuties < 10){
    minuties = `0${minuties}`
  }
  
  return `${hours}:${minuties}`
}

let weatherObj = await getCurrentWeather()
//console.log(weatherObject)

export {weatherObj, getCurrentWeather} 