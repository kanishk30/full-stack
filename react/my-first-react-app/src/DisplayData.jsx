import React from 'react'

const DisplayData = (props) => {
  const {fruits, person} = props;
  console.log({fruits, person})
  return (
    <div>
      
{/* 
      <p>{fruits[0]}</p>
      <p>{fruits[1]}</p>
      <p>{fruits[2]}</p> */}
      
      {/* {fruits.length> 0 ? <>
        <h3>Fruits info:</h3>
        {fruits.map((fruit, index) => {
          return (
            <div>
              <b>{index + 1}: </b>
              <span key={index}> {fruit.toUpperCase()}</span>
            </div>
          )
        })}
      </> 
      : null} */}
  {/* PROBLEM BELOW */}
      {fruits.length  && <>
        <h3>Fruits info:</h3>
        {fruits.map((fruit, index) => {
          return (
            <div>
              <b>{index + 1}: </b>
              <span key={index}> {fruit.toUpperCase()}</span>
            </div>
          )
        })}
      </> 
      }

      <h3>Person info:</h3>
      <p>Name: {person.name} </p>
      <p>Age: {person.age} </p>
      
    </div>
  )
}

export default DisplayData
