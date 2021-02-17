import {Component} from 'react'
import {get} from "../api"
import ItemsList from './ItemsList'
import axios from 'axios'; 

/**
 * Takes payload and urlencodes it to ensure request is properly sent 
 * @param   {any} data request payload
 * @returns {any} urlencoded payload
 */
function urlEncode(data) {
    var urlEncodedString = "";
    Object.keys(data).forEach(function(key) {
        urlEncodedString += key + "=" + encodeURIComponent(data[key]) + "&";
    });
    return urlEncodedString.slice(0, -1); //remove the trailing '&'
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            items: [],
            indicies: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getLatestTodos = this.getLatestTodos.bind(this);
    }

    getLatestTodos() {
        get("http://localhost:4000/")
        .then(resp => {
            resp.forEach((item, index) => {
                this.setState({
                    items: [...this.state.items, item.todo],
                    indicies: [...this.state.indicies, item._id]
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getLatestTodos()
    }

    onChange = (event) => {
        this.setState({item: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        let payload = {todo: this.state.item}
        this.setState({
            item: '',
            items: [...this.state.items, this.state.item]
        });
        axios.post("http://localhost:4000/", payload, {headers:{"Content-Type" : "application/json"}})
        .then(resp => {
            console.log(resp.data)
            this.setState({
                indicies: [...this.state.indicies, resp.data]
            }, () => {
                console.log(this.state.indicies)
            })
        }).catch(err => {
            console.log(err) 
        })
    }

    deleteItem = (index) => {
        let payload = {_id: this.state.indicies[index]}
        this.setState({
            items: this.state.items.filter((_, i) => i !== index)
        })
        axios.delete("http://localhost:4000", {
            headers: {
                "Content-Type" : "application/json"
            },
            data: payload
          })
        .then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>Hack4Impact To-Do List</h1>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.item} onChange={this.onChange} type="text" name="todo" id="name" placeholder="Enter task" />
                    <button type="submit">Add</button>
                </form>
                <ItemsList items={this.state.items} deleteItem={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList