import React from 'react'


export default function Search(props) {

	return (
		<div className="location">

		<div className="location__search">
			<svg className="search-icon" onClick={props.getNewCityHandler}>
				<use href="./image/sprite.svg#search"></use>
			</svg>
			<input 
			type="text" 
			className="search__input" 
			placeholder='Выбрать город...' 
			onKeyDown={props.getNewCityHandler} 
			onFocus={(e)=>{e.target.removeAttribute('placeholder')}}
			onBlur={(e)=>{e.target.setAttribute('placeholder', 'Выбрать город...')}}/>
		</div>

			<svg className="location__geo-icon" onClick={props.getMyCityHandler}>
				<use href="./image/sprite.svg#geo"></use>
			</svg>
		</div>
	)
}
