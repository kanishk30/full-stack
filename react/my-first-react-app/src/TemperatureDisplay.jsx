import React, { useState } from 'react'

const TemperatureDisplay = ({temperature}) => {
  

  const fahrenheit = (temperature * 9/5) + 32;

  return (
    <div>
      <p>Temperature in celsius: {temperature}</p>
      <p>Temperature in fahrenheit: {fahrenheit} </p>
    </div>
  )
}

export default TemperatureDisplay
