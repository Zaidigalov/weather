function getCurrentDate(){
	const date = new Date()
	const weekDay = weekDays[date.getDay()]
	const day = date.getDate()
	let month = months[date.getMonth()+1]
	if(month < 10){
		month = '0'+ month
	}
	const fullDate = `${weekDay}, ${day} ${month}`
	return fullDate 
}

const months = {
	1: "Января",
	2: "Февраля",
	3: "Мара",
	4: "Апреля",
	5: "Мая",
	6: "Июня",
	7: "Июля",
	8: "Августа",
	9: "Сентября",
	10: "Октября",
	11: "Ноября",
	12: "Декабря",
}

const weekDays={
	1: "Понедельник",
	2: "Вторник",
	3: "Среда",
	4: "Четверг",
	5: "Пятница",
	6: "Суббота",
	0: "Воскресенье",
}

const fullDate = getCurrentDate()

export default fullDate