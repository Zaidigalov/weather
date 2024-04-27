import React from 'react'

export default function DailyForecast(props) {

	
	return (
		<div className="daily__forecast">
				<p className="daily-forecast__weekday">{props.info.weekDay}</p>
				<p className="daily-forecast__temp">{props.info.dayTemp}/<span className='night-temp'>{props.info.nightTemp}</span></p>
				<p className="daily-forecast__calendar-day">{props.info.calendarDay}</p>

		</div>
	)
}