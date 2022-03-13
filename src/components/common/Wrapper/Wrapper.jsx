import React from 'react'
import './_Wrapper.scss'
import { useSelector } from 'react-redux'

const Wrapper = ({ children,id }) => {
  const { view: {smallSizeSidebar }} = useSelector(state => state)

  return (
    <div className={smallSizeSidebar ? 'wrapper fullwidth' : 'wrapper'} id={id}>
        {children}
    </div>
  )
}

export default Wrapper