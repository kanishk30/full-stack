import React, { useEffect, useState } from 'react'

const TodoFunctional = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTodos(["eat", "walk"])
        }, 1500)

        return () => {
            console.log("cleanup");
            clearTimeout(timerId)
        }
        
    }, [])

    useEffect(() => {
        console.log("updated todos - ", todos)
    }, [todos])
  
    
    const handleInputChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = () => {
        setTodos(((prev) => [...prev, newTodo]))
        setNewTodo("");
    }



    return (
            <div>
                <h3>Todo list</h3>
                <input 
                    type='text' 
                    placeholder='Enter todos' 
                    value={newTodo} 
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTodo}>Add todo</button>
                <ul>
                    {todos.map((todo, i) => (
                        <li key={i}>{todo}</li>
                    ))}
                </ul>
            </div>
        )
}

export default TodoFunctional
