import {Component} from 'react'
import {get, post} from "../api"
import Todos from './Todos'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            items: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div>
                <h1>Hack4Impact To-Do List</h1>
                <form onSubmit={this.onSubmit} name="TodoForm">
                    <input value={this.state.term} onChange={this.onChange} type="text" name="todo" id="name" placeholder="Enter task" />
                    <button type="submit">Add</button>
                </form>
                <Todos items={this.state.items} />
            </div>
        )
    }
}

export default TodoList