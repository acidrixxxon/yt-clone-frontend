import React from 'react'
import Spinner from '../Spinner/Spinner'
import './_main.scss'

const SubscribeBtn = ({ onClick,loading }) => {

  return (
    <button className="subs-btn subscribe" onClick={onClick}>
      {loading && <Spinner classes='sub-spinner' />}
      Подписаться
    </button>
  )
}

export default SubscribeBtn