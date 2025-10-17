import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import todoSlice from './todoSlice'

const actions = todoSlice.actions
const TodoRedux = () => {
//    const todoList = useSelector((store) => store.todoState.todoList)
//    const value = useSelector((store) => store.todoState.value)

   // OR
   const {todoList, value} = useSelector((store) => store.todoState)

   const dispatch = useDispatch()

   function handleChange(ev){
    dispatch(actions.setValue(ev.target.value))
   }

   function handleAddTodo(){
    dispatch(actions.addTodo())
   }

  return (
    <div>
      <h3>Todo</h3>
      <div>
        <input type='text' placeholder='enter todo'
            value={value}
            onChange={handleChange}
        />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      <div className='list'>
        <ul>
            {todoList.map((task, i) => <li key={i}>{task}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default TodoRedux
