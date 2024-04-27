import React from 'react'

export default function Background(props) {
	return (
		<div className='background'>
			<img src={`./image/background/${props.weather}.jpg`} alt="" />
		</div>
	)
}
