import React from 'react'
import ChatPdp  from './component/ChatPdp'
import "./ChatPage.css"
const ChatPage = () => {
  return (
    <div className='container chatBody'>
      <div className='row'>

        <div class="col-12 col-md-12 col-lg-4 " style={{backgroundColor:"gray"}}>Left</div>

        <div class="col-12 col-md-12 col-lg-8"><ChatPdp /> </div>
      </div>
    </div>
  )
}

export default ChatPage