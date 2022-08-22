import React from 'react'
import '../styles/Button.css';

const Button = ({onClick}) => {
  return (
    <div className='Button' onClick={onClick}>
        <p className='Button__text'>
            Add a photo
        </p>
    </div>
  )
}

export default Button;