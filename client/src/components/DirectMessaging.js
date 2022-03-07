import React, { useState } from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import chatcss from '../chatcss/chat.css'
import { MainContainer, Search, Sidebar, ChatContainer, Conversation, ConversationHeader, ConversationList, EllipsisButton, Message, MessageInput, MessageList, MessageSeparator, TypingIndicator, VideoCallButton, VoiceCallButton } from '@chatscope/chat-ui-kit-react'

function DirectMessaging() {
    const [messageInputValue, setMessageInputValue] = useState("");
    return (
        <div style={{
            height: "600px",
            position: "relative"
        }}>
            <MainContainer responsive>
                <Sidebar position="left" scrollable={false}>
                    <Search placeholder="Search..." />
                    <ConversationList>
                        <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
                        </Conversation>

                        <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
                        </Conversation>

                        <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you" unreadCnt={3}>
                        </Conversation>

                        <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
                        </Conversation>

                        <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
                        </Conversation>

                        <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
                        </Conversation>

                        <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
                        </Conversation>

                        <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
                        </Conversation>
                    </ConversationList>
                </Sidebar>

                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
                        <ConversationHeader.Actions>
                            <VoiceCallButton />
                            <VideoCallButton />
                            <EllipsisButton orientation="vertical" />
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
                        <MessageSeparator content="Saturday, 30 November 2019" />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "single"
                        }}>
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "single"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "normal"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                        </Message>
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "first"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "normal"
                        }} />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Patrik",
                            direction: "outgoing",
                            position: "last"
                        }} />

                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "first"
                        }} avatarSpacer />
                        <Message model={{
                            message: "Hello my friend",
                            sentTime: "15 mins ago",
                            sender: "Zoe",
                            direction: "incoming",
                            position: "last"
                        }}>
                        </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div >
    )
}

export default DirectMessaging