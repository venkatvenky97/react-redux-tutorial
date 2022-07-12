import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./Components/Store"

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>

