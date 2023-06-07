import React,{useState} from 'react'
import TextInput from '../../../Components/InputComponent/InputComponent'
const ChatPage = () => {
  const [inputValue,setInputValue] = useState()
  
  const textHandle = (event) => {
    setInputValue(event)
  }
  
  return (
    <div className='.container-fluid'>
      <div class="row justify-content-md-center">

        <div class="col-md-2">Left</div>

        <div class="col-md-8"><TextInput title="input" onChange={(event)=> textHandle(event)}/></div>

      </div>
    </div>
  )
}

export default ChatPage