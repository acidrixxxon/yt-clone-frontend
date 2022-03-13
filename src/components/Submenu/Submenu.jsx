import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './_Submenu.scss'

const Submenu = ({ children }) => {
    const [ show,setShow ] = React.useState(false)
    const submenuHandler = () => {
        
        setShow( state => !state)
    }
  return (
      <>
        <span className="sub-menu">
            <BsThreeDotsVertical className="sub-menu--icon" onClick={submenuHandler} />

            { show && (
                <ul className="sub-menu__list">
                    {children}
                </ul>
            )}
        </span>
      </>
  )
}

export default Submenu