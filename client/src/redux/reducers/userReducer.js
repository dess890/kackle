import { fetchMessages } from "./chatReducer"

const defaultState = {
    user: null
}

const USER_SET_CURRENT = "USER_SET_CURRENT"

export function setCurrentUser(userObject) {
    return {
        type: USER_SET_CURRENT,
        user: userObject
    }
}

export function fetchCurrentUser(dispatch, getState) {
    fetch('/users/api/current')
        .then(res => res.json())
        .then(data => {
            dispatch(setCurrentUser(data))
            dispatch(fetchMessages)
        })
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case USER_SET_CURRENT:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}
