import React from 'react'
import Card from '../../../Components/Card/Card'
import TextInput from '../../../Components/InputComponent/InputComponent'
import Button from '../../../Components/ButtonComponent/ButtonComponent'
import './signup.css'
const Signup = () => {
    const pageHandle = () =>{
        window.location='/login'
    }
  return (
    <div className='login-body'>
      <Card bgColor='#ebebe0' width={500} height={582} borderRadius={10} padding={24}>
        <h4 className='hading'>SIGNUP</h4>
        <TextInput tittle="First Name" placeholder="First Name"/>
        <TextInput tittle="Last Name" placeholder="Last Name"/>
        <TextInput tittle="Phone Number" placeholder="Phone Number"/>
        <TextInput tittle="User Name" placeholder="User Name"/>
        <TextInput tittle="Pin" placeholder="Pin"/>
       <div className='btn-body'>
       <Button size="lg" variant="success" onClick={()=>alert('Signup')}>Signup</Button>
       <span className='span-tag' onClick={pageHandle}>Go to Login</span>
       </div>
      </Card>
    </div>
  )
}

export default Signup