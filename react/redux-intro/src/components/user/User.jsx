import React, {useState, useEffect} from 'react'

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(function(){
        async function fetchData(){

            try {
                setLoading(true)
                const resp = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
                const data = await resp.json();
                setUser(data);
                
            } catch(err) {
                console.log("catch called")
                setError(true)
            } finally {
                setLoading(false);

            }
        }

        fetchData();

    }, [])
    const headingEl =   <h3>User</h3>;

    if(loading) {
        return <>
        {headingEl}
        <h4>Loading...</h4>
        </>
    }
    
    if(error){
        return <>
        {headingEl}
        <h4>Something went wrong...</h4>
        </>
    }
  return (
    <div>
        {headingEl}
      <h4>Name: {user.username} </h4>
      <h4>Email: {user.email} </h4>
    </div>
  )
}

export default User
