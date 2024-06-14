import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

// function App() {
//   return (
//     <div className="App">
//       привет мир
//     </div>
//   );
// }

// export default App;



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
        </div>
      </Provider>
    );
  }
}

export default App;