import React from 'react'
import { ChatPdp } from './component/ChatPdp'
import "./ChatPage.css"
const ChatPage = () => {
  return (
    <div className='.container-fluid chatBody'>
      <div class="row justify-content-md-center">

        <div class="col-md-2">Left</div>

        <div class="col-md-8"><ChatPdp /> </div>
      </div>
    </div>
  )
}

export default ChatPage