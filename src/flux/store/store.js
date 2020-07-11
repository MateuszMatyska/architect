import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Counter} from '../reducers/reducers';

const appReducers = combineReducers({
  counter: Counter,
});

export const createAppStore = createStore(appReducers, applyMiddleware(thunk));
