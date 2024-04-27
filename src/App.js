import {weatherObj, getCurrentWeather} from './functions/getCurrentWeather'
import getCoordinatesFromLocation from './functions/getCoordinatesFromLocation'
import {forecastData, getForecast} from './functions/getForecast'

import React, { useState } from 'react'
import Background from "./components/Background";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Search from './components/Search';


function App() {

  let [weather, setWeather] = useState(weatherObj)
  let [forecast, setForecast] = useState(forecastData)
  let mainSearch
  let asideSearch

  if(forecast===undefined) {
    forecast = 0
  }

  async function getNewCityHandler(e){
		if(e.keyCode !== 13 && e.target.nodeName !== 'use'&& e.target.nodeName !== 'svg') return
    let input
    let city
  
    

    if (e.keyCode === 13){
		  input = e.target
		  city = input.value
    } 
    
    else if(e.target.nodeName === 'use'){
      input = e.target.parentNode.nextSibling
      city = input.value
    }
    
		const [coordinates, newCity] = await getCoordinatesFromLocation(city)

    if(coordinates === "error") {
      return
    }

		let newWeater = await getCurrentWeather(coordinates.lat, coordinates.lng)
    let newForecast = await getForecast(coordinates.lat, coordinates.lng, newWeater.timezone)
		newWeater.city = newCity
		setWeather(
			weather = newWeater
		)

    setForecast(
      forecast = newForecast
    )
    input.value = ""
    input.blur()

	}

  function getMyCityHandler(){
    setWeather(
			weather = weatherObj
		)

    setForecast(
      forecast = forecastData
    )
  }

  if(document.documentElement.clientWidth > 650){
    asideSearch = <Search getNewCityHandler = {getNewCityHandler} getMyCityHandler={getMyCityHandler}/>
  } else mainSearch = <Search getNewCityHandler = {getNewCityHandler} getMyCityHandler={getMyCityHandler}/>

  return (
    <div className="App">
      <Background weather={weather.id}></Background>
      <Main weather={weather} search={mainSearch}></Main>
      <Aside weather={weather} dailyForecast={forecast[0]} nearForecast={forecast[1]} search = {asideSearch} ></Aside>
    </div>
  );
}

export default App;
