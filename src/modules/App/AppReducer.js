import {SIGNUP_USER_SUCCESS} from './AppActionType';

const initialState = {
 signupUser:{
  isSignup:false
 }
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        signupUser: {
          isSignup: action?.isSignup,
        },
      };
    }
  
    default:
      return state;
  }
};

export default AppReducer;
