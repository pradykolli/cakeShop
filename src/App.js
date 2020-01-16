import React from 'react';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import store from './Redux/store'
import HookContainer from './Components/HookContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import CoffeeContainer from './Components/CoffeeContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <hr></hr>
        <HookContainer />
        <hr></hr>
        <IceCreamContainer />
        <hr></hr>
        <CoffeeContainer />
        <hr></hr>
        <hr></hr>
      </div>
    </Provider>
  );
}

export default App;
