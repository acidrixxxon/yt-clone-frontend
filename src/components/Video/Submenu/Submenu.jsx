import React from 'react'
import './_submenu.scss'
import { BiAddToQueue } from 'react-icons/bi'

const Submenu = () => {
    const [ submenuVisibility,setSubmenuVisibility ] = React.useState(false)

    const toggleVisibility = () => {
        setSubmenuVisibility(!submenuVisibility)
    }

  return (
    <>
        <span className='video__submenu-dots' onClick={() => toggleVisibility()} ></span>

        {submenuVisibility && (<div className="video__submenu">
            <ul className="video__submenu-list">
                <li className="video__submenu-item">
                    <BiAddToQueue />
                    <span>Добавить в очередь</span>
                </li>
            </ul>
        </div>)}
    </>
  )
}

export default Submenu