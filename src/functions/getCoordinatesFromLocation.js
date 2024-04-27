export default async function getCoordinatesFromLocation(cityArg){
	try{
		const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityArg}&key=dc47578e9688491695790517ae85bd99`)
		const data = await response.json()
		const coordinates =  data.results[0].geometry
		const cityName = getCity(data, cityArg)
		return [coordinates, cityName]

	}catch{
		alert("Некорректное название города")
		return ["error"]
	}
}

function getCity(data, cityArg){

	let answer
	let i = 0
	
	while((data.results[i].formatted)[0]!==cityArg[0]){
		i++
	}
	
	answer = data.results[i].formatted
	let index = answer.indexOf(',')
	let city = answer.slice(0, index)

	return city
}