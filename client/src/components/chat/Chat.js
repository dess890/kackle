import React, { useEffect, useState } from 'react'

function Chat() {
    const [chat, setChat] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        // fetch(`/auth/logout`, {
        //     method: 'POST'
        // })
        fetch(`/auth/local/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'forlaenu',
                password: 'password'
            })
        })
            .then(res => {
                setUser(res)
            })

        fetch(`/chat/api/getMessages/2`)
            .then(res => res.json())
            .then(data => {
                setChat(data)
            })
    }, [])

    if (Object.keys(chat).length) {
        //if true
        return (
            <div style={{ "width": "200px", "height": "800px", "border": "1px solid black" }}>Chat
                <div>{chat.error ? chat.error : chat.map((chatItems, i) => {
                    return <p key={i}>From {chatItems.fromUserId}: {chatItems.content}</p>
                })}</div>
            </div>
        )
    }
    else {
        //if false
        return (
            <div style={{ "width": "200px", "height": "800px", "border": "1px solid black" }}>Chat - loading</div>
        )
    }
}
export default Chat