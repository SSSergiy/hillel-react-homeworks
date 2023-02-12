import { Component } from 'react';
import './_Todo.scss';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.item.title,
      id: props.item.id,
      done: props.item.done
    };
  }
  changeState = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    return (
      <>
        <div
          onClick={this.changeState}
          className={this.state.done ? 'disabled' : 'item'}
        >
          {this.state.title}
        </div>
      </>
    );
  }
}
export default Todo;
