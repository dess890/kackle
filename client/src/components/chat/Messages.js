import React, { useEffect, useState } from 'react';
import './Messages.css';

function Messages({ socket }) {
	const [messages, setMessages] = useState({});

	useEffect(() => {
		//create prevMessages
		const messageListener = (message) => {
			setMessages((prevMessages) => {
				const newMessages = { ...prevMessages };
				newMessages[message.id] = message;
				return newMessages;
			});
		};

		const deleteMessageListener = (messageID) => {
			setMessages((prevMessages) => {
				const newMessages = { ...prevMessages };
				delete newMessages[messageID];
				return newMessages;
			});
		};

		socket.on('message', messageListener);
		socket.on('deleteMessage', deleteMessageListener);
		socket.emit('getMessages');

		return () => {
			socket.off('message', messageListener);
			socket.off('deleteMessage', deleteMessageListener);
		};
	}, [socket]);

	//this loops over messages, adds a time stamp to the div title?, a username, message content, and timestamp
	// so we have message.id = chat.id,
	// user = user.username (or the FromUser.username of chat message)
	// and message = chat.content
	return (
		<div className="message-list">
			{[...Object.values(messages)]
				.sort((a, b) => a.time - b.time)
				.map((message) => (
					<div
						key={message.id}
						className="message-container"
						title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
					>
						<span className="user">{message.user.name}:</span>
						<span className="message">{message.value}</span>
						<span className="date">{new Date(message.time).toLocaleTimeString()}</span>
					</div>
				))
			}
		</div>
	);
}

export default Messages;