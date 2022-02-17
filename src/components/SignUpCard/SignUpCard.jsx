import React from 'react'
import './_signUpCard.scss'
import SignInBtn from '../common/SignInBtn';

const SignUpCard = ({icon,title,description}) => {
  return (
    <div className='card'>
        {icon}
        <div className="card__heading">
            <h3 className="card__title">{title}</h3>
            <p className="card__desc">{description}</p>
            <SignInBtn />
        </div>
    </div>
  )
}

export default SignUpCard