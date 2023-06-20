import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <center>
      <div>HomePage</div>
      <Link className='btn btn-outline-primary' to="/login">Go to Chat</Link>
    </center>
  )
}

export default HomePage