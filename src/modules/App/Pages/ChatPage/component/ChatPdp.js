import React,{useState} from 'react'
import TextInput from '../../../../Components/InputComponent/InputComponent'
import Card from '../../../../Components/Card/Card'

const ChatPdp = () => {
    const [message,setMessage] = useState("")
    const [textMessage,setTextMessage] = useState([])
    const inputMessageHandle = (message) =>{
        setMessage(message)
    }
    const messageHandle = () => {
        const update = [...textMessage]
        update.push({text:message})
        setTextMessage(update)
    }
    return (
        <div>
            <Card>
                <div style={{padding:20,height:'88%',position:'relative'}}>
                {textMessage?.map((item,index)=>{
                    return(
                        <div>{item.text}</div>
                    )
                })}
                </div>
                <div className='inputBody'>
                <TextInput placeholder="type your message" onChange={(message)=>inputMessageHandle(message) }/>
               <div className='sendBtn'>
               <i class="bi bi-send-fill"style={{color:'#fff'}} onClick={messageHandle}></i>
               </div>
                </div>
            </Card>




        </div>

    )
}

export default ChatPdp