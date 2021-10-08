import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/rootReducer'
import thunk from 'redux-thunk'

console.log(typeof process.env.REACT_APP_REDUX_DEVTOOLS)
console.log(process.env.REACT_APP_REDUX_DEVTOOLS_PRODUCTION)

// const store = createStore(rootReducer, compose(
//   applyMiddleware(
//     thunk
//   ),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ))

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
