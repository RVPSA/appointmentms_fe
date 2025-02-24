import { call, put, takeLatest } from "redux-saga/effects";
import { USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from "../actions";
import { loginService } from "../../services/loginService";
import { AxiosResponse } from "axios";

function* userLogIn(value: sagaInputType) {
  const { data } = value;

  try {
    const response: AxiosResponse = yield call(loginService, data);

    let receivedData: backendResponseGeneral = response.data;
    console.log("Response in login saga,,receiveddata " +receivedData);
    console.log("Response in login saga,,response " +response.data)

    if (receivedData.statusCode == 200) {
      //TODO Local Storage item
      yield put({
        type: USER_LOGIN_SUCCESS,
        data: response.data.data,
      });
    } else {
      yield put({
        type: USER_LOGIN_FAIL,
        data: response.data.message,
      });
    }
  } catch (error) {
    yield put({
      type: USER_LOGIN_FAIL,
      data: "User signin fail.",
    });
  }
}

export function* watchUserLogIn() {
  yield takeLatest(USER_LOGIN, userLogIn);
}
