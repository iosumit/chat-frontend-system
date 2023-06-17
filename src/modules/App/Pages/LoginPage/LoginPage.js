import React from 'react'
import Card from '../../../Components/Card/Card'
import TextInput from '../../../Components/InputComponent/InputComponent'
import Button from '../../../Components/ButtonComponent/ButtonComponent'
import './login.css'
const LoginPage = () => {
  const pageHandle = () =>{
    window.location='/signup'
  }
  return (
    <div className='login-body'>
      <Card bgColor='#ebebe0' width={500} height={500} borderRadius={10} padding={30}>
        <h4 className='hading'>LOGIN</h4>
        <TextInput tittle="Email" placeholder="Email"/>
        <TextInput tittle="Password" placeholder="Password"/>
       <div className='btn-body'>
       <Button size="lg" variant="success" onClick={()=>alert('login')}>Login</Button>
       <span className='span-tag' onClick={pageHandle}>Create an Account</span>
       </div>
      </Card>
    </div>
  )
}

export default LoginPage