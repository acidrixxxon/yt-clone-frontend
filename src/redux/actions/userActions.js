import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './../../firebase'

export const login = () => async dispatch => {
    try {
        dispatch({type: 'LOGIN_REQUEST'})
        const provider = new GoogleAuthProvider()

        const res = await signInWithPopup(auth,provider)

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                token: res.user.accessToken,
                user: res.user.auth.currentUser
            }
        })
        
        sessionStorage.setItem('ytc-access-token',res.user.accessToken)
        sessionStorage.setItem('user', JSON.stringify(res.user.auth.currentUser))
    } catch (error) {
        console.log(error);
        dispatch({
            type: 'LOGIN_ERROR',
            payload: error
        })
    }
}


export const logout = () => async dispatch => {
    try {
        dispatch({
            type: 'USER_LOGOUT'
        })

        sessionStorage.removeItem('user')
        sessionStorage.removeItem('ytc-access-token')
    } catch (error) {
        console.log(error);
    }
}

