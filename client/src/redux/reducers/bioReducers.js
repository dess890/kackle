import { ADD_BIO } from "./actions"

const defaultState = {
    bio: "",
}

export default function bioReducers(state = defaultState, action) {
    switch (action.type) {
        case ADD_BIO:
            return {
                ...state,
                bio: action.text
            }
        default:
            return state;
    }
}