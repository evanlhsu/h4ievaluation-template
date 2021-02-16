import {Component} from 'react'

class TodoItem extends Component {
  render() {
    return (
      <li key={this.props.index}>
        {this.props.item}
        <div class="divider"/>
        <button type="submit">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem;