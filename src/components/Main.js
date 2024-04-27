import React from "react";
import fullDate from '../functions/getCurrentDate'
import showIcon from '../functions/showIcon'



export default function Main(props) {
	

	return (
		<main className="main">
			{props.search}
			<div className="main__info">
			<p className="main__temp">{props.weather.temperature}</p>
			<div>
				<p className="main__city">{props.weather.city}</p>
				<p className="main__date">{fullDate}</p>
			</div>
			<svg className="main__icon">
  					<use href={`./image/sprite.svg#${showIcon(props.weather.id)}`}></use>
			</svg>
			</div>
		</main>
	)
}
