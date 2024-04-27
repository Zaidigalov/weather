
let decoding = new Map()

decoding = {
	"01d": "clear",
	"01n": "clear-n",
	"02d": "few-clouds",
	"02n": "few-clouds-n",
	"03d": "cloudy",
	"03n": "cloudy",
	"04d": "cloudy",
	"04n": "cloudy",
	"09d": "rain",
	"09n": "rain",
	"10d": "rain",
	"10n": "rain",
	"11d": "thunderstorm",
	"11n": "thunderstorm",
	"13d": "snow",
	"13n": "snow",
	"50d": "fog",
	"50n": "fog",
}

function showIcon(id){
	const icon = decoding[id]
	return icon	
}


export default showIcon