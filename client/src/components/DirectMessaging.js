import React, { useState } from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import chatcss from '../chatcss/chat.css'
import { MainContainer, Search, Sidebar, ChatContainer, Conversation, ConversationHeader, ConversationList, Message, MessageInput, MessageList, MessageSeparator, SendButton,} from '@chatscope/chat-ui-kit-react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/reducers/chatReducer';

function DirectMessaging() {
    const [messageInputValue, setMessageInputValue] = useState("");
    const [convoHeaderUsername, setConvoHeaderUsername] = useState("")
    const [convoHeaderInfo, setConvoHeaderInfo] = useState("")
    const [activeConvoUserId, setActiveConvoUserId] = useState(null)

    const messages = useSelector(state => state.chat.chat)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    if(!messages){dispatch(fetchMessages)}

    function handleParticipantClick(userId, username) {
        // setting the actively selected conversation, both for style and displaying the messages between user
        setActiveConvoUserId(userId)
        // the displayed name in the message header
        setConvoHeaderUsername(username)
    }
    
    const handleSubmit = () => {
        setMessageInputValue('')
        fetch('/chat/api/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fromUserId: user.id,
                toUserId: activeConvoUserId,
                content: messageInputValue,
            })
        })
            .then(result => result.json())
            .then(message => {
                // this is kinda dirty but it works to re-render the page
                dispatch(fetchMessages)
                //DO SOMETHING WITH SUCCESS MESSAGE
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div style={{
            height: "600px",
            position: "relative"
        }}>
            <MainContainer responsive>
                <Sidebar position="left" scrollable={false}>
                    <Search placeholder="Search..." />
                    <ConversationList>
                        {messages && messages.map((message) => {
                            return (
                                activeConvoUserId === message.user.id? (
                                <Conversation
                                    key={message.user.id}
                                    name={message.user.username}
                                    info={`UserId: ${message.user.id}, remove this later`}
                                    onClick={() => handleParticipantClick(message.user.id, message.user.username)}
                                    active
                                >
                                </Conversation>
                                ) : (
                                    <Conversation
                                    key={message.user.id}
                                    name={message.user.username}
                                    info={`UserId: ${message.user.id}, remove this later`}
                                    onClick={() => handleParticipantClick(message.user.id, message.user.username)}
                                >
                                </Conversation>
                                )
                                
                            )
                        })}

                    </ConversationList>
                </Sidebar>

                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Content userName={convoHeaderUsername} info={convoHeaderInfo} />
                    </ConversationHeader>
                    <MessageList>
                        <MessageSeparator content="MAYBE A GOOD IDEA TO PUT DATE HERE" />
                        {activeConvoUserId && messages
                            .filter((convo)=> convo.user.id === activeConvoUserId)[0].conversation
                            .map((message) => {
                                return (
                                    message.FromUser.id === user.id ? (
                                        <Message key={message.id} model={{
                                            message: message.content,
                                            direction: "outgoing",
                                            position: "normal"
                                        }}>
                                        </Message>
                                    ) : (
                                        <Message key={message.id} model={{
                                            message: message.content,
                                            direction: "incoming",
                                            position: "normal"
                                        }}>
                                        </Message>
                                    )
                                )
                            })
                        }     
                    </MessageList>
                    {activeConvoUserId != null? (
                        <MessageInput 
                        onSend={handleSubmit} 
                        placeholder="Type message here" 
                        value={messageInputValue} 
                        onChange={msg => setMessageInputValue(msg)}
                        attachButton={false}/>
                    ) : (
                        <></>
                    )}
                </ChatContainer>
            </MainContainer>
        </div >
    )
}

export default DirectMessaging