import React, {useEffect, useState} from "react";

import {
Routes,
  Route,
  Link,
  Navigate,
  useParams
} from "react-router-dom"; 

function About(){
    return <h2>I m about</h2>
}

function Jobs(){
    return <h2>I m jobs page</h2>
    
}

function PageNotFound(){
    return <h2>Page not found</h2>
}

function Users(){
    const [user, setUser] = useState(null)
    const params = useParams();
    console.log(params)
    const userId = params.id;


    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`);
            const data = await resp.json();
            console.log(data)
            setUser(data);
        }

        fetchData()
    }, [])

    return (
        !user ? <h3>Loading...</h3> : <>
            <h5>User name: {user.name}</h5>
            <p>User email: {user.email}</p>

        </>
    )


}

function RouteComponent(){
    return (
    <>
            <h1>Routing example...</h1>
            <nav>
            <ul>
                <li>
                 <Link to={'/about'}>
                 About
                 </Link>   
                </li>
                <li>
                 <Link to={'/jobs'}>
                 Jobs
                 </Link>   
                 </li>
            </ul>
            </nav>

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/jobs" element={<Jobs />} />

                <Route path="/careers"  element={<Navigate to='/jobs' />} />

                {/* dynamic / template routing */}
                <Route path="/users/:id" element={<Users />} />

                {/* wildcard */}
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
    </>
    )
}

export default RouteComponent;