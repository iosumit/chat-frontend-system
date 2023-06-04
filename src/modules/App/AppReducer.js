import {LOGIN_USER, STATE_LIST, CITY_LIST} from './AppActionType';

const initialState = {
  user: {
    email: 'ant@gmail.com',
    password: '123456',
  },
  stateList: {
    stateListData: [],
    cityListDate: [],
  },
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case STATE_LIST: {
      return {
        ...state,
        stateList: {
          ...state.stateList,
          stateListData: action?.payload,
        },
      };
    }
    case CITY_LIST: {
      return {
        ...state,
        stateList: {
          ...state.stateList,
          cityListDate: action?.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
