import { Component, ReactNode } from 'react';
class StudentsList extends Component {
  constructor() {
    super();
  }


  // state = {
  //   count: 5,
  //   age: 20,
  //   name: "",
  //   studensts: [
  //     {
  //       id: 1,
  //       age: 20,
  //       name: "Roma"
  //     },
  //     {
  //       id: 2,
  //       age: 20,
  //       name: "Andrey"
  //     },
  //     {
  //       id: 3,
  //       age: 20,
  //       name: "Dmitri"
  //     },
  //   ]
  // };
  render(): ReactNode {
    return (<>
            <li key={this.props.studnet.id}>{this.props.studnet.name} is {this.props.studnet.age }</li>
    </>);
  }
}
export default StudentsList;
