// import { useEffect, useRef } from "react";
import ChatBot from "./Chatbot";
import {showMessenger, hideMessenger, showDialog, hideDialog } from 'react-messenger-chat-plugin';

const App = () => {
    return (
        <>
            <div id="fb-root"></div>
            <div className="App">
              <button onClick={() => {showMessenger(true)}}>show messenger</button>
              <button onClick={() => {hideMessenger()}}>hide messenger</button>
              <button onClick={() => {showDialog()}}>show dialog</button>
              <button onClick={() => {hideDialog()}}>hide dialog</button>
              {/* <button onclick={() => {setMessengerBottomSpacing(100)}}>set chat 100px in bottom spacing<button> */}

              {/* <MessengerChat pageId='123456789101112' /> */}
            </div>
            <ChatBot />
            {/* <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div> */}
        </>
    );
    }; 
export default App;