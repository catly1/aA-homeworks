import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, cantThinkOfAnything));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

  const addLoggingToDispatch = store => {
    return function (next) {
      return function (action){
        // let som = store.dispatch
        console.log(store.getState());
        console.log(action);
        // som(action);
        next(action);
        console.log(store.getState());
      };
    };
  }

  const cantThinkOfAnything = (store) => {
    return function (next) {
      return function (action) {
        console.log("AY LMAO")
        next(action)
      }
    }
  }

export default configureStore;
