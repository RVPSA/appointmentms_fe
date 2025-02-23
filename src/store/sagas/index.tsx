import {all} from "redux-saga/effects"
import { watchUserLogIn } from "./loginSaga";

export default function* rootSaga(){
    yield all([watchUserLogIn()]);
}