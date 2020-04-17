import React, { useState, useEffect } from 'react'
import { parse } from '../services/parseRSS'

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const interval = setInterval(async() => {
      const data = parse()
      data.then((response) => {
        setWeatherData(response)
      })
    }, 60000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    weatherData && weatherData.length > 0 ?
    <React.Fragment>
      <h4>
        {weatherData[0].title}
      </h4>
      <div>
        <a href={weatherData[0].link}>{weatherData[0].link}</a>
      </div>
      <div>
        {weatherData[0].contentSnippet}
      </div>
    </React.Fragment>
    : <div />
  )
}

export default WeatherData
