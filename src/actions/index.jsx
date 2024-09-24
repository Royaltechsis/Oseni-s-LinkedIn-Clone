// import {auth,provider} from '../firebase'

// export function signInAPI(){
//     return (dispatch) =>{
//         auth.signInWithPopup(provider).then((payload) =>{
//             console.log(payload)
//         }).catch((error) => alert(error.message))
//     }
// }

import { auth, provider } from '../firebase'; 
import { signInWithPopup } from 'firebase/auth'; // Correctly import signInWithPopup

// Define the async action
export function signInAPI() {
    return (dispatch) => {
        // Dispatch a login request action to show loading state
        dispatch({ type: 'LOGIN_REQUEST' });

        // Use the signInWithPopup method correctly
        signInWithPopup(auth, provider)  // Call signInWithPopup with auth and provider
            .then((payload) => {
                console.log(payload);

                // Dispatch success action once sign-in is successful
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: payload.user, // Assuming you want to save user info in the state
                });
            })
            .catch((error) => {
                // Dispatch a failure action in case of error
                dispatch({
                    type: 'LOGIN_FAILURE',
                    error: error.message,
                });
                alert(error.message); // Optionally show the error to the user
            });
    };
}
