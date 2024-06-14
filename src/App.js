import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Watch from './components/Watch/index';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          привет мир
        </div>
        <div>
        <Watch />
        </div>
      </Provider>
    );
  }
}

export default App;