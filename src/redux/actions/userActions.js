import axios from "axios";
import UserService from "../../Services/UserService";

export const login = (data) => async dispatch => {
    try {
        let channelData;
        dispatch({type: 'LOGIN_REQUEST'})

        const res = await UserService.login(data)
        if (res.token) {
             channelData = await UserService.myChannel(res.token)

             if (res.success === true && channelData !== null) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        token: res.token,
                        user: res.user,
                        channel: channelData.channel
                    }
                })
            }
        }
        
            
        
        sessionStorage.setItem('access_token',res.token)
        sessionStorage.setItem('user', JSON.stringify(res.user))
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
        sessionStorage.removeItem('access_token')
    } catch (error) {
        console.log(error);
    }
}

export const getMe = () => async (dispatch,getState) => {
    try {
        dispatch({type: 'LOGIN_REQUEST'})

        const { user: { accessToken } } = getState()

        if (accessToken !== null) {
            const res = await UserService.getMe(accessToken)

            if (res.success === true) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        token: res.token,
                        user: res.user,
                        channel: res.channel
                    }
                })
            }
        } else {
            dispatch({
                type: 'LOGIN_FAILED'
            })
        }



    } catch (e) {
        console.error(e)
    }
}

export const getWatchLater = () => async (dispatch,getState) => {
    try {
        dispatch({type: 'WATCH_LATER_REQUEST'})

        const { user } = getState()

        const res = await UserService.getWatchLater(user.accessToken)

        if (res.status === 200) {
            return dispatch({
                type: 'WATCH_LATER_SUCCESS',
                payload: res.data.list
            })
        }
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: 'WATCH_LATER_ERROR',
            payload: error.message
        })
    }
}

export const addWatchLater = (id) => async (dispatch,getState) => {
    try {
        const { user } = getState()

        const res = await UserService.addWatchLater(id,user.accessToken)

        if (!res.status === 200) return new Error('Не удалось добавить видео в плейлист')
    } catch (e) {
        console.error(e.message)
    }
}

export const removeVideoWatchLater = (id) => async (dispatch,getState) => {
    try {
        const { user } = getState()

        const res = await UserService.removeWatchLater(id,user.accessToken)

        if (res.status === 200) return dispatch(getWatchLater())
    } catch (e) {
        console.error(e.message)
    }
}