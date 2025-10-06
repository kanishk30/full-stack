import React, { use, useEffect, useState } from 'react'

const FetchData = () => {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
    const getData = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            setData(result)
            setLoading(false)
    
        } catch (error) {
            setError(true)
            setLoading(false)

        }
        
    }
    getData()
}, [])

if(loading) {
    return <h2>loading....</h2>
}

if(error) {
    return <h5>something went wrong....</h5>

}

  return (
    <div>
      <h2>Fetch data example</h2>
       <pre>Data loaded: {JSON.stringify(data)}</pre> 
    </div>
  )
}

export default FetchData
