import {combineReducers} from "redux";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers(
    {
        loginReducer :loginReducer
    }
)

const reducer = ()=>{
    return rootReducer;
}

export default reducer;