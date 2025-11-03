import React from 'react'
import './Modal.css'

const Modal = (props) => {
    const {isVisible, hide} = props;
    console.log(isVisible, hide)
    if(!isVisible) {
        return null;
    }
  return (
    <div className='overlay'>
        <div className='modal'>
            <h2>Modal title</h2>
            <p>Description...</p>
            <button onClick={hide}>Close</button>

        </div>
      
    </div>
  )
}

export default Modal
