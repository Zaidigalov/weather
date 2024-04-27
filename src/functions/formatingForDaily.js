export default function formatingForDaily(data, timezone){
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

	const filteredData = data.list.filter(byHours)

	const setDays = new Set()
	filteredData.forEach((item)=>{
		setDays.add(new Date(item.dt*1000).getDate())
	})

	const days = Array.from(setDays)

	const mapDays = new Map()
	for (const day of setDays) {
		mapDays.set(day, []);
	}

	

	filteredData.forEach((item)=>{
		let itemDay = new Date(item.dt*1000).getDate()
		mapDays.set(itemDay, [...mapDays.get(itemDay), item])

	})

	console.log(mapDays)
		
	for(let item of mapDays.values()){ // перебор дней
		let nightTemp = []
		let dayTemp = []
		let date

		item.forEach((data)=>{ // перебор 3х-часовых прогнозов
			date = new Date(data.dt*1000)

			let time = date.getUTCHours() + timezone/3600
			if(time>24){
				time = time-24
			}

			if(time < 6){
				nightTemp.push(data.main.temp)
			}else if(time > 10 && time < 20){
				dayTemp.push(data.main.temp)
			} 				
			
		})

		const weekDays={
			1: "Понедельник",
			2: "Вторник",
			3: "Среда",
			4: "Четверг",
			5: "Пятница",
			6: "Суббота",
			0: "Воскресенье",
		}

		let month;
		if((date.getMonth()+1) < 10){
			month = '0'+(date.getMonth()+1)
		}
		let info = {
			calendarDay: date.getDate() + "." + month,
			weekDay: weekDays[(new Date(item[0].dt*1000).getDay())],
			nightTemp: Math.round(nightTemp.reduce((sum, current) => sum + current, 0)/nightTemp.length)+"°",
			dayTemp: Math.round(dayTemp.reduce((sum, current) => sum + current, 0)/dayTemp.length)+"°",
		}
		forecast.push(info)			
	}

	function byHours(data){
		let today = new Date().getDate();
		let forecastDay = new Date(data.dt*1000)
		
		if(forecastDay.getDate()===today){			
			return false
		}		
		else {
			return true}
	}

	return forecast
}