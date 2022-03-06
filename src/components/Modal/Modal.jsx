import React from 'react'
import './_Modal.scss'

const Modal = ({children}) => {
  return (
    <div className='modal__layout'>
        <div className="modal__content">
            {children}
        </div>
    </div>
  )
}

export default Modal