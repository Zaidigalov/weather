import {getCurrentLocation} from "./getCurrentLocation"
import formatingForDaily from "./formatingForDaily"
import formatingForNear from "./formatingForNear"
import {weatherObj} from '../functions/getCurrentWeather'

const coordinates = await getCurrentLocation()

async function getForecast(latitude=coordinates.latitude, longitude=coordinates.longitude, timezone=weatherObj.timezone){
	try{
		const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=ru&appid=d97b92b3713b208bd4f0efebb1ff2604`)
		const data = await response.json()

		const dailyForecast = formatingForDaily(data, timezone)
		

		const nearForecast = formatingForNear(data, timezone)
		//console.log("timezone",timezone)
		//console.log(data.list[0])
		//console.log(nearForecast)
		

		return [dailyForecast, nearForecast]
	}catch{
		alert("Не удалось загрузить прогноз. Попробуте позже или перезагрузите станицу")
		const dailyForecast = formatingForDaily()
		const nearForecast = formatingForNear()
		return [dailyForecast, nearForecast]
	}
}
let forecastData = await getForecast()

export {forecastData, getForecast}