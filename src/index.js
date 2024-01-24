import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.';
import { Random } from './pages';
import store from './pages/store';
import { Provider } from 'react-redux';
import GuesGame from './pages/GuesGame/GuesGame';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
    <Random/>
    <GuesGame/>
  </Provider>
    
);

