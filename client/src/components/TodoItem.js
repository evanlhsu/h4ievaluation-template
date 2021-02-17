import {Component} from 'react'
import axios from 'axios'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  onClick = (event) => {
    event.preventDefault();
    this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <li key={this.props.index}>
        {this.props.item}
        <div className="divider"/>
        <button onClick={this.onClick} type="submit" value="submit">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem;