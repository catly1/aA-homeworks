import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  // const addLoggingToDispatch = store => {
  //   return function (next) {
  //     return function (action){
  //       // let som = store.dispatch
  //       console.log(store.getState());
  //       console.log(action);
  //       // som(action);
  //       next(action);
  //       console.log(store.getState());
  //     };
  //   };
  // }

  // const applyMiddleWares = (store, middleWares) => {
  //   let dispatch = store.dispatch
  //   middleWares.forEach((middleWare,i) => {
  //     dispatch = middleWare(store)(dispatch)
  //   })
  //   return Object.assign({}, store, {dispatch})
  // }

  // store.dispatch = addLoggingToDispatch(store)
  // store = applyMiddleWares(store, [addLoggingToDispatch])

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
