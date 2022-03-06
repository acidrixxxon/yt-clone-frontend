import React from 'react'
import './_Wrapper.scss'

const Wrapper = ({ children,id }) => {
  return (
    <div className='wrapper' id={id}>
        {children}
    </div>
  )
}

export default Wrapper