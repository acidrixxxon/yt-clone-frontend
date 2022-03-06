import React from 'react'
import './_Auth.scss'
import { MdExitToApp } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../redux/actions/userActions'
import SignInBtn from '../common/SignInBtn'
import useAuth from './../../hooks/useAuth.js'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from '../Modal/Modal'

const Auth = () => {
    const [ showAuthModal,setShowAuthModal ] = React.useState(false)
    const [ formData,setFormData ] = React.useState({
        email: '',
        password: ''
    })

    const { email,password } = formData

    const responsive = false
    const dispatch = useDispatch()

    const user = useAuth()
    
    const closeAuthModal = () => setShowAuthModal(false)
    const openAuthModal = () => setShowAuthModal(true)

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        
        if (user !== null) {
            closeAuthModal()
        }
    }

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <>
            {user.user === null && 
                (<>
                    <hr />
                    <p>Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.</p>
                    <SignInBtn onClick={openAuthModal} responsive/>
                </>)
            }

            {user.user &&
                (<>
                    <hr style={{marginBottom: '0px',marginTop: '10px'}}/>

                    <Link onClick={() => dispatch(logout())} to="" className="navbar__link">
                    <li className='navbar__item'> 
                        <MdExitToApp 
                        className='navbar__item-icon'
                        size={21} />
                            <span>Выйти</span>
                    </li>
                    </Link>

                    <hr style={{marginTop: '0px'}}/>
                </>)
            }
           
            {showAuthModal && (
                <Modal>
                    <div className="auth-modal__header">
                        <h3 className="auth-modal__header--title">Войти</h3>
                        <AiOutlineClose className='auth-modal__header--closeIcon' onClick={closeAuthModal}/>
                    </div>

                    <div className="auth-modal__body">
                        <form className="auth-modal__form login" onSubmit={formHandler}>
                            <input 
                                type='text' 
                                name="email" 
                                value={email} 
                                className='auth-modal__form--field' 
                                placeholder='Email' 
                                onChange={onChange} />

                            <input 
                                type='password' 
                                name="password" 
                                value={password} 
                                className='auth-modal__form--field' 
                                placeholder='Пароль'
                                onChange={onChange} />

                            <button className='btn btn--blue'>Войти</button>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default Auth