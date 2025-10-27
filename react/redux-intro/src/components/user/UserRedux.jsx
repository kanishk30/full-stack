import React, {useState, useEffect} from 'react'
import { fetchUserMiddleware } from '../../middlewares/userMiddleware';
import { useSelector, useDispatch} from 'react-redux';

const UserRedux = () => {
    const {loading, error, user} = useSelector((store) => store.userState)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUserMiddleware());
    }, [])
    
    const headingEl =   <h3>User Redux</h3>;

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

export default UserRedux
