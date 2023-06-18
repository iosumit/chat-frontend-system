import React,{useState,useEffect} from 'react'
import Card from '../../../Components/Card/Card'
import TextInput from '../../../Components/InputComponent/InputComponent'
import Button from '../../../Components/ButtonComponent/ButtonComponent'
import callApi from '../../../../util/apiCaller'
import './login.css'

const LoginPage = () => {
 
  const [user,setUser] = useState({
    username:'',
    pin:''
  })

useEffect(()=>{
 window.localStorage.clear()
},[])

  const pageHandle = () =>{
    window.location='/signup'
  }

  const inputHandle = (keyName,keyValue) => {
    const update = {...user}
    update[keyName]=keyValue
    setUser(update)
  }

  const loginHandle = () =>{
    callApi(`user/authenticate`,"post",user,true).then((res)=>{
      if(res?.status === "Success"){
        window.localStorage.setItem('token',res?.data?.token)
        window.location='/chat'
      }
    }) 
  }

  return (
    <div className='login-body'>
      <Card bgColor='#ebebe0' width={500} height={500} borderRadius={10} padding={30}>
        <h4 className='hading'>LOGIN</h4>
        <TextInput value={user?.username} tittle="User Name" placeholder="User Name" onChange={(message)=>inputHandle("username",message)}/>
        <TextInput value={user?.pin} tittle="Password" placeholder="Password" onChange={(message)=>inputHandle("pin",message)}/>
       <div className='btn-body'>
       <Button size="lg" variant="success" onClick={loginHandle}>Login</Button>
       <span className='span-tag' onClick={pageHandle}>Create an Account</span>
       </div>
      </Card>
    </div>
  )
}

export default LoginPage