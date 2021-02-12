import {Component} from 'react'
import {get, post} from "../api"

class TodoList extends Component {
    // get("/test")
    // .then(resp => {

    // }).catch(err => {

    // })

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <form name="TodoForm">
                    <input type="text" name="todo" id="name" placeholder="Enter task" />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default TodoList