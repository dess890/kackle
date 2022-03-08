const defaultState = []


const SET_CHAT = "SET_CHAT"

export function setChatMessages(chatArray) {
    return {
        type: SET_CHAT,
        chatArray
    }
}

export function fetchMessages(dispatch, getState) {
    const state = getState()
    if (!state.user.user) {
        return
    }
    const user = state.user.user
    fetch('/chat/api/getMessages/all')
        .then(res => res.json())
        .then(data => {
            let messages = data
            let uniqueParticipants = [];
            let chatObject = []
            for (var i = 0; i < messages.length; i++) {
                //if its from the current user, look at the toUserId
                if (user.id === messages[i].fromUserId) {
                    // check if its in our uniqueParts array
                    if (!uniqueParticipants.includes(messages[i].toUserId)) {
                        //add to array
                        uniqueParticipants.push(messages[i].toUserId)
                        chatObject.push({ "user": { "id": messages[i].toUserId, "username": messages[i].ToUser.username }, conversation: [messages[i]] })
                    }
                    else {
                        chatObject[uniqueParticipants.indexOf(messages[i].toUserId)].conversation.push(messages[i])
                    }
                }
                // its to our current user, look at the fromUserId
                else {
                    // check if its in our uniqueParts array
                    if (!uniqueParticipants.includes(messages[i].fromUserId)) {
                        //add to array
                        uniqueParticipants.push(messages[i].fromUserId)
                        chatObject.push({ "user": { "id": messages[i].fromUserId, "username": messages[i].FromUser.username }, conversation: [messages[i]] })
                    }
                    else {
                        chatObject[uniqueParticipants.indexOf(messages[i].fromUserId)].conversation.push(messages[i])
                    }
                }
            }
            dispatch(setChatMessages(chatObject))
        })
}
function chatReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CHAT:
            return {
                ...state,
                chat: action.chatArray
            }
        default:
            return state
    }
}

export default chatReducer;
