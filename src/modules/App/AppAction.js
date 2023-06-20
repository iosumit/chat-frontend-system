import {
  SIGNUP_USER,SIGNUP_USER_SUCCESS,SIGNUP_USER_FAILURE
  } from './AppActionType';
import callApi from '../../util/apiCaller';
import { toast } from 'react-toastify';

  
  export const signupUser = user => async dispatch => {
    console.log(user)
    try {
      dispatch({
        type: SIGNUP_USER,
        isSignup:true
      });
      const res = await callApi(`user/new`,'post', {...user});
      if(res?.data === "User already exists"){
        toast.success(res?.data)
      }
      if (res.status === 'Success') {
        toast.success(res?.message)
        window.localStorage.setItem("token",res?.data?.token)
        dispatch({
          type: SIGNUP_USER_SUCCESS,
          isSignup:true
        });
      }
    } catch (error) {
      dispatch({
        type: SIGNUP_USER_FAILURE,
        isSignup:false
      });
      console.log('signup error', error);
    }
  };

  