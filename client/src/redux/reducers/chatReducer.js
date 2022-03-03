const defaultState = []

const SET_CHAT = "SET_CHAT"

export function setChatMessages(chatArray) {
    return {
        type: SET_CHAT,
        chatArray
    }
}

export function fetchMessages(dispatch, getState) {
    fetch('/chat/api/getMessages/all')
    .then(data => data.json())
    .then(messages => {
        console.log("fetchMessages, results:", messages)
        dispatch(setChatMessages(messages))
    })
}
function chatReducer(state = defaultState, action) {
    switch(action.type){
        default:
            return state
    }
}

export default chatReducer;
