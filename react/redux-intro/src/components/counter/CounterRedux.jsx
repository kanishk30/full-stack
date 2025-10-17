import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from './counterSlice';


function CounterRedux() {
  const actions = counterSlice.actions

   const count = useSelector((store) => store.counterState.value)
  const dispatch = useDispatch();
      function handleIncr(){
        // incr
        dispatch(actions.increment())
        
      }
      
      function handleDecr(){
        
        dispatch(actions.decrement())
      }

  return (
    <>
      <h3>Redux Counter example</h3>
      <div>
        <button onClick={handleDecr}> - </button>
        <span>{count}</span>
        <button onClick={handleIncr}> + </button>
    </div>
    </>
  )
}

export default CounterRedux;
