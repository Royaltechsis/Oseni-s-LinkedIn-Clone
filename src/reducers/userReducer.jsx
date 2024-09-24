// import { combineReducers } from "redux";

// import userReducer from '../reducers/userReducer.jsx';

// const rootReducers = combineReducers({
//     userState : userReducer,
// })


// export default rootReducers

// userReducer.jsx

// Initial state
const initialState = {
    user: null,
    loading: false,
    error: null,
};

// User reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};

// Export the reducer
export default userReducer;
