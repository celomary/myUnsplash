import React from 'react'
import '../styles/RegisterButton.css';

const Register = ({onClick}) => {
  return (
    <div className='RegisterButton' onClick={onClick}>Register</div>
  )
}

export default Register;