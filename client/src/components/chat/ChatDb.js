import React from 'react'
import { useSelector } from 'react-redux'

function ChatDb() {
    // grab messages from redux
    // sort them? we want messages to go from older to newest, top to bottom
    // return a ChatMessage <div> thingy
    const messages = useSelector(state => state.chat.chat)
    // we should have an array of objects such that 
    // messages[0] = { user : {id: id, username: username}, conversation: [{message1}, {message2}]}
    const user = useSelector(state => state.user.user)

    //WE NEED PARTICIPANT USER ID
    const TO_USER_ID = 5;
    
    const handleParticipantClick = (userId) => {
        console.log("chat click, userid: ", userId)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        //get value from state - chat message to send to db
        const VALUE_FROM_STATE = ""
        //and id of chat participant
        fetch('/chat/api/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fromUserId: user.id,
                toUserId: TO_USER_ID,
                content: VALUE_FROM_STATE,
            })
        })
        .then(result => result.json())
        .then(message => {
            console.log(message)
            //DO SOMETHING WITH SUCCESS MESSAGE
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    if (messages) {
        return (
            <div style={{ display: "flex", flexDirection: "column", width: "50%", gap: "5px" }}>
                {messages.map((message) => {
                    return (
                        <div key={message.user.id} style={{ border: "1px solid black", padding: "10px" }}>User: {message.user.username} - id: {message.user.id}
                            {message.conversation
                            .sort((a,b)=> a.id - b.id)
                            .map((convo) => {
                                return <div style={{ marginLeft: "50px", display: "flex", justifyContent: "space-between" }}>
                                    {convo.FromUser.id === user.id ? (
                                        <div style={{ marginLeft: "100px", backgroundColor: "lightblue", display: "flex", justifyContent: "space-between", flexGrow: "1" }}>
                                            {convo.content} - 
                                            <span style={{ fontSize: ".7em", display: "flex" }}>{new Date(convo.createdAt).toLocaleTimeString()}
                                            </span>
                                        </div>
                                    ) : (
                                        <div style={{ backgroundColor: "lightpink", display: "flex", justifyContent: "space-between", flexGrow: "1" }}>
                                            {convo.content} -
                                            <span style={{ fontSize: ".7em", display: "flex" }}>{new Date(convo.createdAt).toLocaleTimeString()}
                                            </span>
                                        </div>
                                    )}</div>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
    return "Chat Loading"

}

export default ChatDb