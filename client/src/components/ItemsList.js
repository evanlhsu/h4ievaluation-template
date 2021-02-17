import {Component} from 'react'
import TodoItem from './TodoItem'

class ItemsList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => <TodoItem item={item} index={index} deleteItem={this.props.deleteItem}/>)}
      </ul>
    )
  }
}

export default ItemsList;