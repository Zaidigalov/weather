import React from 'react'
import showIcon from '../functions/showIcon'

import NearForecast from './NearForecast'
import DailyForecast from './DailyForecast'



export default function Aside(props) {

	return (
		<aside className='aside'>
			
				{props.search}

			<p className="aside__descriptions">{props.weather.description}</p>
			<div className="aside__details">
				<div className="details__wind detail-container">
					<p className="wind__title detail-title">Ветер</p>
					<p className="wind__quantity">{props.weather.wind}</p>
					<svg className="icon">
  					<use href="./image/sprite.svg#wind"></use>
					</svg>
				</div>
				<div className="details__pressure detail-container">
					<p className="pressure__title detail-title">Давление</p>
					<p className="pressure__quantity">{props.weather.pressure}</p>
					<svg className="icon">
  					<use href="./image/sprite.svg#pressure"></use>
					</svg>
				</div>
				<div className="details__clouds detail-container">
					<p className="clouds__title detail-title">Облачность</p>
					<p className="clouds__quantity">{props.weather.clouds}</p>
					<svg className="icon">
  					<use href="./image/sprite.svg#cloudy"></use>
					</svg>
				</div>	
				<div className="details__humadity detail-container">			
					<p className="humadity__title detail-title">Влажность</p>
					<p className="humadity__quantity">{props.weather.humidity}</p>
					<svg className="icon">
  					<use href="./image/sprite.svg#humidity"></use>
					</svg>
				</div>	
				<div className="details__sunrise detail-container">
					<p className="sunrise__title detail-title">Рассвет</p>
					<p className="sunrise__quantity">{props.weather.sunrise}</p>
					<svg className="icon sun">
  					<use href="./image/sprite.svg#sunset"></use>
					</svg>
				</div>	
				<div className="details__sunset detail-container">
					<p className="sunset__title detail-title">Закат</p>
					<p className="sunset__quantity">{props.weather.sunset}</p>
					<svg className="icon sun">
  					<use href="./image/sprite.svg#sunrise"></use>
					</svg>
				</div>	

			</div>

			<div className="aside__near">
				<p className="near__title">Прогноз на ближайшее время</p>
				<NearForecast info={props.nearForecast[0]} icon={showIcon(props.nearForecast[0].id)}></NearForecast>
				<NearForecast info={props.nearForecast[1]} icon={showIcon(props.nearForecast[1].id)}></NearForecast>
				<NearForecast info={props.nearForecast[2]} icon={showIcon(props.nearForecast[2].id)}></NearForecast>
				<NearForecast info={props.nearForecast[3]} icon={showIcon(props.nearForecast[3].id)}></NearForecast>
			</div>	

			<div className="aside__daily">
				<p className="daily__title">Прогноз на 4 дня</p>
				<DailyForecast info={props.dailyForecast[0]} ></DailyForecast>
				<DailyForecast info={props.dailyForecast[1]} ></DailyForecast>
				<DailyForecast info={props.dailyForecast[2]} ></DailyForecast>
				<DailyForecast info={props.dailyForecast[3]} ></DailyForecast>
			</div>			
		</aside>
	)
}
