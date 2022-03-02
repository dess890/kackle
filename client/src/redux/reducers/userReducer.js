const defaultState = {
    username: null,
    userId: null
}

const USER_SET_CURRENT = "USER_SET_CURRENT"

export function setCurrentUser(userObject) {
    return {
        type: USER_SET_CURRENT,
        username: userObject.username,
        userId: userObject.id
    }
}

export function fetchCurrentUser(dispatch, getState) {
    const state = getState()

    if(!state.user.username){
        return
    }
    fetch('/users/api/current')
    .then(res => res.json())
    .then(data => {
        dispatch(setCurrentUser(data))})
}

export default function userReducer(state=defaultState, action){
    switch(action.type){
        case USER_SET_CURRENT:
            return { ...state,
                username: action.username,
                userId: action.userId
            }
        default: 
            return state;
    }
}
