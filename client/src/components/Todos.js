import {Component} from 'react'

class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )
  }
}

export default Todos;