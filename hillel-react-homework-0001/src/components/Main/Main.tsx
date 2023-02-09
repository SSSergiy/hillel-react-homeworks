import s from './_Main.module.scss';
import { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className={s.main}>
        <span>main</span>
      </div>
    );
  }
}

export default Main;
