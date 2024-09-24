import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  // Correctly importing as default

import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)  // Apply middleware here
);

export default store;
