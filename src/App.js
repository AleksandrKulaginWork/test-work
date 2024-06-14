import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Watch from './components/Watch/index';
import LanguageSelector from './components/LanguageSelector/index';
import ReviewsList from './components/ReviewsList/index';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          привет мир
        </div>
        <div>
        <Watch />
        <LanguageSelector />
        
        <ReviewsList/>

        </div>
      </Provider>
    );
  }
}

export default App;