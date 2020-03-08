import React from 'react';

import store from './redux/store';

import Header from './components/Header';
import BodyApp from './components/BodyApp';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ store }>
  <div className="App container-fluid">
    <Header />
    <BodyApp />
  </div>
   </Provider>
  );
}

export default App;
