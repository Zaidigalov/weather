import React from 'react'

export default function NearForecast(props) {
	return (
		<div className="near__forecast">
				<svg className="near-forecast__icon">
  					<use href={`./image/sprite.svg#${props.icon}`}></use>
				</svg>
				<p className="near-forecast__time">{props.info.time}</p>
				<p className="near-forecast__description">{props.info.description}</p>
				<p className="near-forecast__temp">{props.info.temp}</p>
		</div>
	)
}
