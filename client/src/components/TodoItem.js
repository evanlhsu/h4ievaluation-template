import {Component} from 'react'

class TodoItem extends Component {
  render() {
    return (
      <li key={this.props.index}>
        {this.props.item}
      </li>
    )
  }
}

export default TodoItem;