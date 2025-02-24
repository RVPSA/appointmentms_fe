import { USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "../actions";

type stateType = {
  isUserLogIn: boolean; //<> While forwarding the request
  isUserLoginSuccess: boolean; //<> If login process is success
  isUserLoginFail: boolean; //<> If login process is fail
  userDetails: { userName?: string; password?: string }; //<> If login process success, response data
  error: string; //<> If there is an error of request
};

const intialState: stateType = {
  isUserLogIn: false,
  isUserLoginSuccess: false,
  isUserLoginFail: false,
  userDetails: {},
  error: "",
};

export const loginReducer = (
  state: stateType = intialState,
  action: actionType
): stateType => {
  switch (action.type) {
    case USER_LOGIN:
      console.log("Inside the user login reducer");
      return {
        ...state,
        isUserLogIn: true,
      };
    case USER_LOGIN_SUCCESS:
      let loginData = action.data;
      return {
        ...state,
        isUserLogIn: false,
        isUserLoginSuccess: true,
        userDetails: loginData,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isUserLogIn: false,
        isUserLoginSuccess: false,
        isUserLoginFail: true,
      };
    default:
      return state;
  }
};
