import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers ({
    chat: chatReducer,
    user: userReducer,
    auth: authReducer
})

export default rootReducer