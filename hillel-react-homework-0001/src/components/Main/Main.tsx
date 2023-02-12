import s from './_Main.module.scss';
import { Component } from 'react';
import StudentsList from '../StudentsList/StudentsList';

class Main extends Component {
  constructor() {
    super();
  }
  state = {
    count: 5,
    age: 20,
    name: "",
    studensts: [
      {
        id: 1,
        age: 20,
        name: "Roma"
      },
      {
        id: 2,
        age: 20,
        name: "Andrey"
      },
      {
        id: 3,
        age: 20,
        name: "Dmitri"
      },
    ]
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  addStudent = (student) => {
    this.setState({
    students:[...this.state.studensts,student]})
  }


  render() {
    return (
      <div className={s.main}>
        <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        <p>hello{this.state.name}</p>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>0</button>
        <ul>{this.state.studensts.map(studnet => {
          return (
            <StudentsList studnet={ studnet} />
            )
        })}</ul>
      </div>
    );
  }
}

export default Main;
