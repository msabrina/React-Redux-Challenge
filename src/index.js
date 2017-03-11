import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store"

// const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.querySelector('#root-container')
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// // import ReduxPromise from 'redux-promise';
// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
// import reducer from './reducers'

// // Code acquired from redux.js.org documentation
// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )

// // mount our App at #root-container
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector('#root-container')
// );

