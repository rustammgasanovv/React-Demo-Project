import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';
import './style/style.css'
let store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
