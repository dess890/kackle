import { combineReducers } from "redux";
import bioReducers from "./bioReducers";
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer,
    bio: bioReducers
})

export default rootReducer