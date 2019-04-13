import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import configureStore from './store'

const store = configureStore();

// dispose as global variable to allow access from anywhere
window.reduxStore = store;

const Bootstrap = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Bootstrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
