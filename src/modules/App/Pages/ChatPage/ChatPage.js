import React from "react";
import { ChatPdp } from "./component/ChatPdp";
import ChatPlp from "./component/ChatPlp.js";

const ChatPage = () => {
  return (
    <div className=".container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-md-2">
          <ChatPlp />
        </div>

        <div class="col-md-8">
          <ChatPdp />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
