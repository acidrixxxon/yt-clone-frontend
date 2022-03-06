import React from 'react'
import './_Spinner.scss'

const Spinner = ({ classes='' }) => {
  return (
    <svg className={`spinner ${classes}`} viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  )
}

export default Spinner