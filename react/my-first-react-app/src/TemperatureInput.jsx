import React, { useState } from 'react'

const TemperatureInput = ({temperature, handleTemperature}) => {

  return (
    <div>
      <label>Enter temperature</label>
      <input 
        type='number'
        value={temperature}
        onChange={handleTemperature}
      />
    </div>
  )
}

export default TemperatureInput
