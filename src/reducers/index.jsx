import { combineReducers } from "redux";

import userReducer from '../reducers/userReducer.jsx';

const rootReducers = combineReducers({
    userState : userReducer,
})


export default rootReducers