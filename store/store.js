import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import startReducer from './../reducers/index.js';
import throttle from 'lodash/throttle';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('events');
    if (serializedState === null) {
      return undefined;
    }
    const state = {
        events:JSON.parse(serializedState),
    }
    return state;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.events);
    localStorage.setItem('events', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const store = createStore(
		startReducer,
		loadState(),
		applyMiddleware( thunk.withExtraArgument() )
);

store.subscribe (throttle (()=> {
	saveState (store.getState())
}));

export default store;
