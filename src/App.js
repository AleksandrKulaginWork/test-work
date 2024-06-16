import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header/index'
import Main from './components/Main/index'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header/>
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;