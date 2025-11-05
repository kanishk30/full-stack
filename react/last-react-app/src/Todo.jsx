import React, { Component } from 'react'

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        }
        console.log("constructor called...")
    }

    componentDidMount(){
        console.log("componentDidMount called...")
        // simulate api call...

        setTimeout(() => {
            this.setState({
                todos: ["eat", "walk"]
            })
        }, 1500)

    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate called...")

        console.log("prevState", prevState)
        console.log("this.state", this.state)
        // console.log("prevProps", prevProps)

        if(prevState.todos !== this.state.todos){
            console.log("updated todos - ", this.state.todos)
        }
    }

    componentWillUnmount() {
      
    }

    handleInputChange = (event) => {
        this.setState({newTodo: event.target.value})
    }

    handleAddTodo = () => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, prevState.newTodo],
            newTodo: ''
        }))
    }
    

    render(){
        console.log("render caled...");
        return (
            <div>
                <h3>Todo list</h3>
                <input 
                    type='text' 
                    placeholder='Enter todos' 
                    value={this.state.newTodo} 
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTodo}>Add todo</button>
                <ul>
                    {this.state.todos.map((todo, i) => (
                        <li key={i}>{todo}</li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Todolist;