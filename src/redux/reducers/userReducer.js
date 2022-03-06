
const initialState = {
    accessToken: sessionStorage.getItem('access_token') ? sessionStorage.getItem('access_token') : null,
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
    myChannel: null,
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
                user: action.payload.user,
                myChannel: action.payload.channel
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