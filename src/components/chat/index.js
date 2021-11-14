import React from 'react'
import ChatContainer from './ChatContainer';
import SendMessage from './SendMessage';

const ChatController = ({ joinRoomDetails, sendMessageDetails, msgStore }) => {
    // console.log('ChatController', joinRoomDetails)
    return (
        <div className="col-5 mx-auto mt-3 rounded" style={{backgroundColor : "#59bfff"}}>
            <div className="pt-4 mb-3 p-5 shadow rounded ">
                <div>
                    <h2 className="bg-primary rounded text-white text-center p-2">
                        WelCome Chat {joinRoomDetails.room}
                    </h2>
                </div>
                <div className="pb-3">
                    <ChatContainer msgStore={msgStore} />
                </div>
                <div>
                    <SendMessage sendMessageDetails={sendMessageDetails} />
                </div>
            </div>

        </div>
    )
}

export default ChatController