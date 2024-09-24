import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signInAPI } from '../actions/index';
import { useNavigate } from 'react-router-dom';
import Hero from '../assets/login-hero.svg'
import Google from '../assets/google.svg'
import Logo from '../assets/login-logo.svg'

function Login(props) {
  const navigate = useNavigate();

  // Redirect to the home page if the user is authenticated
  useEffect(() => {
    if (props.user) {
      navigate('/home'); // Redirect to home
    }
  }, [props.user, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    props.signIn(); // Call signIn action
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-center items-center flex-col">
        <header className="flex w-full sm:w-11/12 justify-between items-center p-3">
          <div className="brand">
            <h1 className="text-2xl capitalize" >linkedin</h1>
            <img className="text-2xl capitalize" src={Logo}/>
          </div>
          <div className="buttons flex gap-2 capitalize">
            <button className="font-bold text-gray-500 p-2">Join Now</button>
            <button className="font-bold text-blue-500 border-blue-500 rounded-3xl border-2 p-2"> 
              Sign Up
            </button>
          </div>
        </header>

        <div className="flex w-full h-max items-center justify-center">
          <div className="inner-container p-4 items-center justify-center sm:flex-row flex-col flex sm:justify-between w-full">
            <div className="flex flex-col gap-3 sm:m-10">
              <div className="flex p-3">
                    <h1 className="font-semibold capitalize text-3xl text-blue-500 text-center">
                    Welcome to our professional community
                    </h1>
                    
              </div>
              <img src={Hero} alt=""  className='sm:hidden'/>
              <form onSubmit={handleSignIn}>
                <button
                  type="submit"
                  className="sign-in p-4 border-2 border-gray-400 rounded-full text-center text-gray-600 text-lg capitalize flex gap-2"
                ><img src={Google} alt="" />
                Sign in with Google
                </button>
              </form>
            </div>

            <img src={Hero}  className='sm:flex hidden w-5/12'/>
            
          </div>
        </div>
      </div>
    </div>
  );
}



// Map the dispatch action to props
const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()), // Dispatch the signInAPI action
});




// Map state to props to access user state
// const mapStateToProps = (state) => ({
//     user: state.auth.user, // Adjust according to your actual Redux state structure
// });

const mapStateToProps = (state) => {
    return {
        user: state.auth ? state.auth.user : null, // Safe access to user
        isFetching: state.auth ? state.auth.isFetching : false,
        error: state.auth ? state.auth.error : null,
        errorMessage: state.auth ? state.auth.errorMessage : null,
        isAuthenticated: state.auth ? state.auth.isAuthenticated : false,
        token: state.auth ? state.auth.token : null,
        isLoading: state.auth ? state.auth.isLoading : false,
        isError: state.auth ? state.auth.isError : false,
        isSuccess: state.auth ? state.auth.isSuccess : false,
        isRedirected: state.auth ? state.auth.isRedirected : false,
        redirectUrl: state.auth ? state.auth.redirectUrl : null,
        isSignedIn: state.auth ? state.auth.isSignedIn : false,
        isSignedOut: state.auth ? state.auth.isSignedOut : false,
        isProfileUpdated: state.auth ? state.auth.isProfileUpdated : false,
        isProfileUpdatedError: state.auth ? state.auth.isProfileUpdatedError : false,
        isProfileUpdatedSuccess: state.auth ? state.auth.isProfileUpdatedSuccess : false,
        isProfileUpdatedRedirected: state.auth ? state.auth.isProfileUpdatedRedirected : false,
        profileUpdated: state.auth ? state.auth.profileUpdated : null
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
