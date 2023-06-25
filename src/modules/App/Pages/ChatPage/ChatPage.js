import React, { useEffect } from "react";
import ChatPdp from "./component/ChatPdp";
import "./ChatPage.css";
import ChatPlp from "./component/ChatPlp.js";

const ChatPage = () => {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token == "" || token == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div className="main-chat-body">
      <div className="chat-item">
         <div className="left-side">
         <ChatPlp />
         </div>
         <div className="message-box">
         <ChatPdp />
         </div>
      </div>
    </div>
  );
};

export default ChatPage;
