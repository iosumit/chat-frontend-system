import React, { useState } from 'react'
import TextInput from '../../../../Components/InputComponent/InputComponent'
import Card from '../../../../Components/Card/Card'

const ChatPdp = () => {
    const [message, setMessage] = useState("")
    const [textMessage, setTextMessage] = useState([])
    const inputMessageHandle = (message) => {
        setMessage(message)
    }
    const messageHandle = () => {
        const update = [...textMessage]
        update.push({ text: message })
        setTextMessage(update)
        setMessage('')
    }
    return (
        <div>
            <Card>
                <div className='card-body'>
                    {textMessage?.map((item, index) => {
                        return (
                            <div className='massage-item'>
                                {item.text}
                            </div>
                        )
                    })}
                </div>
                <div className='inputBody'>
                    <TextInput placeholder="type your message" value={message} onChange={(message) => inputMessageHandle(message)}/>
                    <div className='sendBtn'>
                        <i class="bi bi-send-fill" style={{ color: '#fff' }} onClick={messageHandle}></i>
                    </div>
                </div>
            </Card>




        </div>

    )
}

export default ChatPdp