import React from 'react'
import '../styles/OneButton.css';

const OneButton = ({onClick, text}) => {
  return (
    <div className='OneButton' onClick={onClick}>
        {text}
    </div>
  )
}

export default OneButton;