import { Component } from 'react';
import './_App.scss';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Left />
        <Main />
      </>
    );
  }
}

export default App;
