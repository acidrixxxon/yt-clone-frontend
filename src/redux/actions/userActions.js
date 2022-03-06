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
        }

    } catch (e) {
        console.error(e)
    }
}