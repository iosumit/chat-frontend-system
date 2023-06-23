import React, { useState } from 'react'
import Card from '../../../Components/Card/Card'
import TextInput from '../../../Components/InputComponent/InputComponent'
import Button from '../../../Components/ButtonComponent/ButtonComponent'
import './signup.css'
import { useDispatch } from 'react-redux'
import { signupUser } from '../../AppAction'

const Signup = () => {
  const dispatch = useDispatch()
  const [inputValue,setInputValue] = useState({
    first_name:'',
    last_name:'',
    phone:'',
    username:'',
    pin:''
  })
    const inputHandle = (keyName,keyValue) => {
     const update = {...inputValue}
     update[keyName] = keyValue
     setInputValue(update)
    }
    const pageHandle = () =>{
        window.location='/'
    }
    const gotoChatPage = () => {
      console.log("token",window.localStorage.getItem("token"))
      if(window.localStorage.getItem("token")){
        console.log("token",window.localStorage.getItem("token"))
        window.location='/chat'
       }
    }
   
    const submitHandle = () =>{
     dispatch(signupUser(inputValue))
     gotoChatPage()
    }
  return (
    <div className='login-body'>
      <Card bgColor='#ebebe0' width={500} height={582} borderRadius={10} padding={24}>
        <h4 className='hading'>SIGNUP</h4>
        <TextInput tittle="First Name" placeholder="First Name" onChange={(e)=>inputHandle("first_name",e)}/>
        <TextInput tittle="Last Name" placeholder="Last Name" onChange={(e)=>inputHandle("last_name",e)}/>
        <TextInput tittle="Phone Number" placeholder="Phone Number" onChange={(e)=>inputHandle("phone",e)}/>
        <TextInput tittle="User Name" placeholder="User Name" onChange={(e)=>inputHandle("username",e)}/>
        <TextInput tittle="Pin" placeholder="Pin" onChange={(e)=>inputHandle("pin",e)}/>
       <div className='btn-body'>
       <Button size="lg" variant="success" onClick={submitHandle}>Signup</Button>
       <span className='span-tag' onClick={pageHandle}>Go to Login</span>
       </div>
      </Card>
    </div>
  )
}

export default Signup