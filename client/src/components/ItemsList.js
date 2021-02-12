import {Component} from 'react'
import TodoItem from './TodoItem'

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      this.props.items.map((item, index) => <TodoItem item={item} index={index} />)
    )
  }
}

export default ItemsList;