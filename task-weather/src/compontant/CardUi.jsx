import React from 'react'

function CardUi({data}) {

    const {weather ,wind,name} = data
  return (
    <div className="weather-card">
    <div className="weather-icon">
  
    </div>
    <div className="weather-details">
        <h2>{name} <span>{wind.deg}°C</span></h2>
        <p>Wind speed : {wind.speed} km</p>

        <p>{weather[0].description}</p>
    </div>
</div>

  )
}

export default CardUi