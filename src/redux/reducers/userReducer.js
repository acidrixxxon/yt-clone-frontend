
const initialState = {
    accessToken: sessionStorage.getItem('ytc-access-token') ? sessionStorage.getItem('ytc-access-token') : null,
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                accessToken: action.payload.token,
                user: action.payload.user
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                accessToken: null,
                user: null
            }
        default:
            return state
    }
 }