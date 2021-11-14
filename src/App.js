// import Userchat from './components/Userchat'
// import Chatbox from './components/Chatbox';


import './App.scss';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useState } from 'react';
import JoinChatRoom from './components/join-room/index';
import ChatController from './components/chat';


function App() {
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [joinRoomDetails, setJoinRoomDetails] = useState({});

  const [msgStore, setMsgStore] = useState([])

  const joinChatRom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl('https://localhost:5001/hubs/chat')
        .configureLogging(LogLevel.Information)
        .build()

      connection.on("ReceiveMessage",(message) => {
        console.log(message);
      })
      await connection.start()
      await connection.invoke("JoinRoom",{user , room })
    } catch (error) {
      console.log(error)
    }

    setJoinRoomDetails({ ...joinRoomDetails, user, room })
    setShowChatRoom(!showChatRoom);
  }

  const sendMessageDetails = (msg) => {
    setMsgStore([...msgStore, msg])
    console.log(msgStore)
  }

  // const storeChat = (chatbody) =>{
  //   setChatdetails( [...chatDetails , chatbody])
  //   console.log(chatDetails)
  // } 
  return (
    <div className="" >
      {(!showChatRoom) ? <JoinChatRoom joinChatRom={joinChatRom} /> :
        <ChatController
          joinRoomDetails={joinRoomDetails}
          sendMessageDetails={sendMessageDetails}
          msgStore={msgStore}
        />}
    </div>
  );
}

export default App;
