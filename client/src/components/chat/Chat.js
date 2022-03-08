import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import Messages from './Messages';
import MessageInput from './MessageInput';


export default function Chat() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(`http://${window.location.hostname}:3000`);
        setSocket(newSocket);
        return () => newSocket.close();
    }, [setSocket]);

    if(socket){ console.log(socket)}
    return (
        <div>
            {socket ? (
                <div className="chat-container">
                    <Messages socket={socket} />
                    <MessageInput socket={socket} />
                </div>
            ) : (
                <div>Not Connected</div>
            )}
        </div>
    );
}
