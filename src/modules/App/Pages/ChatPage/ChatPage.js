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
    // <div className="container-fluid chatBody">
    //   {/* AppBar Component */}
    //   <div className="row">
    //     <div className="col-12 col-md-12 col-lg-4">
    //       Icons
    //       <br />
    //       Search
    //     </div>
    //     <div className="col-12 col-md-12 col-lg-8">Rest Options</div>
    //   </div>
    //   {/* AppBar Component */}
    //   <div className="row">
    //     <div class="col-sm-4 ">
    //       <ChatPlp />
    //     </div>

    //     <div class="col">
    //       <ChatPdp />{" "}
    //     </div>
    //   </div>
    // </div>
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
