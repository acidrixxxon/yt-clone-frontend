import React from 'react'
import Spinner from '../Spinner/Spinner'

const UnsubscribeBtn = ({ onClick,loading }) => {
  return (
    <button className='subs-btn unsubscribe' onClick={onClick}>
      {loading && <Spinner classes='sub-spinner'/>}
      Отписаться
    </button>
  )
}

export default UnsubscribeBtn