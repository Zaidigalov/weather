export default function formatingForNear(data, timezone=0){
	const forecast = [] 
	
	
	if(data===undefined){
		for(let i=0; i<5; i++ ){
			let info = {
				time: "-",
				temp: "-",
				description: "-",
				id: "-"
			}
	
			forecast.push(info)
		}
		return forecast
	}

	const croppedData = data.list.slice(0, 4)

	croppedData.forEach((item)=>{
		let minutes
		if(Number.isInteger(timezone/3600)){
			minutes = "00"
		}	else{
			minutes = ("0."+((timezone/3600).toString()).split(".")[1])*60
		}

		let time = (new Date(item.dt*1000).getUTCHours() + timezone/3600).toString().split(".")[0]
		if(time>24){
			time = time-24
		}		
		let info = {
			time: `${time}:${minutes}`,
			temp: Math.round(item.main.temp)+"°",
			description: item.weather[0].description,
			id: item.weather[0].icon
		}
		forecast.push(info)
	})

	
	return forecast
}