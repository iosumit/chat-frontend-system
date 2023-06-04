import {
    LOGIN_USER,
    SIGNUP_DETAILS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    STORAGE_DETAILS,
    STORAGE_SUCCESS,
    STORAGE_FAILURES,
    ADDRESS_DETAILS,
    ADDRESS_SUCCESS,
    ADDRESS_FAILURES,
    STATE_LIST,
    LIST_FAILURES,
    CITY_LIST,
    CITY_FAILURES,
  } from './AppActionType';
  import {callApi, autoCallApi} from '../../util/apiCaller';
  export const userLogin = body => async dispatch => {
    try {
      dispatch({
        type: LOGIN_USER,
      });
      const res = await callApi({
        endpoint: `user/login/`,
        method: 'post',
        body: {
          body,
        },
      });
      console.log('res==>', res);
    } catch (err) {
      console.log('err', err);
    }
  };
  
  export const signupUser = user => async dispatch => {
    try {
      dispatch({
        type: SIGNUP_DETAILS,
      });
      const res = await callApi('/user/signup/', 'post', {
        user: {
          ...user,
        },
      });
      console.log('res 1', res);
      if (res.status === 'success') {
        console.log('two testing', res);
        dispatch({
          type: SIGNUP_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
      });
      console.log('signup error', error);
    }
  };
  
  export const storageDetails = body => async dispatch => {
    console.log('body', body);
    try {
      dispatch({
        type: STORAGE_DETAILS,
        isActiveStorage: true,
      });
      const res = await callApi('/user/user-requests/', 'post', {
        // user: {
        //   ...user,
        // },
        // user: 1,
        // description: 'veggies 1',
        // transaction_type: 'Storage',
        // storage_entity: '',
        // storage_duration: '8',
        // storage_duration_type: 'Months',
        ...body,
      });
      console.log('res 1', res);
      if (res.status === 'Success') {
        console.log('res 2', res);
        dispatch({
          type: STORAGE_SUCCESS,
          isActiveStorage: false,
        });
      }
    } catch (error) {
      dispatch({
        type: STORAGE_FAILURES,
        isActiveStorage: false,
      });
    }
  };
  export const addressDetails = body => async dispatch => {
    console.log('body', body);
    try {
      dispatch({
        type: ADDRESS_DETAILS,
        isActiveStorage: true,
      });
      const res = await autoCallApi('/user/farms/create/', 'post', {
        // location: 'ranchi',
        // address_id: 'test alt',
        // latitude: '37.123000',
        // longitude: '122.120000',
        // pincode: '834002',
        // city_name: 'Ranchi',
        // state_name: 'Jharkhand',
        // is_default: false,
        ...body,
      });
  
      if (res.status === 'success') {
        console.log('res 2', res);
        dispatch({
          type: ADDRESS_SUCCESS,
          isActiveStorage: false,
        });
      }
    } catch (error) {
      console.log('res 5', error);
      dispatch({
        type: ADDRESS_FAILURES,
        isActiveStorage: false,
      });
    }
  };
  // export const addressDetails = body => async dispatch => {
  //   // console.log('res 1', body);
  //   try {
  //     dispatch({
  //       type: ADDRESS_DETAILS,
  //       isActiveAddress: true,
  //     });
  //     let res = await callApi('/user/farms/create/', 'post', {
  //       ...body,
  // location: 'test up',
  // address_id: 'test101',
  // latitude: '0.000000',
  // longitude: '0.000000',
  // city_name: 'Ranchi',
  // state_name: 'Jharkhand',
  // pincode: '273001',
  // is_default: false,
  //     });
  //     if (res.status == 'success') {
  //       console.log('res 4', res);
  //       dispatch({
  //         type: ADDRESS_SUCCESS,
  //         isActiveAddress: false,
  //       });
  //     }
  //   } catch (error) {
  //     console.log('res 5', error);
  //     dispatch({
  //       type: ADDRESS_FAILURES,
  //       isActiveAddress: false,
  //     });
  //   }
  // };
  
  export const stateList = () => async dispatch => {
    try {
      callApi('/user/states', 'get').then(res => {
        if (res?.status === 'Success') {
          dispatch({
            type: STATE_LIST,
            payload: res?.data?.States_list,
          });
        }
      });
    } catch {
      dispatch({
        type: LIST_FAILURES,
      });
    }
  };
  
  export const cityList = () => async dispatch => {
    // console.log('city 1');
    try {
      await callApi('/user/cities', 'get').then(res => {
        // console.log('city 3', res);
        if (res?.status === 'Success') {
          // console.log('state 4', res?.data?.Cities_list);
          dispatch({
            type: CITY_LIST,
            payload: res?.data?.Cities_list,
          });
        }
      });
    } catch (err) {
      console.log('state 5', err);
      dispatch({
        type: CITY_FAILURES,
      });
    }
  };
  