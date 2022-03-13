import axios from "axios"

export const getHistory = () => async (dispatch,getState) => {
    try {
        dispatch({type: 'HISTORY_REQUEST'})

        const { user: { accessToken } } = getState()
        
        const res = await axios.get('http://localhost:5001/history/gethistory',{
            headers: {
                "authorization": `Bearer ${accessToken}`
            }
        })

        if (res.status === 200) {
            dispatch({
                type: 'HISTORY_SUCCESS',
                payload: res.data.history
            })
        }
    } catch (e) {
        console.log(e.message)

        dispatch({
            type: 'HISTORY_ERROR',
            payload: e.message
        })

        throw new Error('Не удалось получить историю')
    }
}

export const addToHistory = (id) => async (dispatch,getState) => {
    try {
        const { user: {accessToken }} = getState()
        const res = await axios.get(`http://localhost:5001/history/${id}/add`,{
            headers: {
                "authorization": `Bearer ${accessToken}`
            }
        })

        console.log(res)
    } catch (e) {
        console.log(e.message)
        
        throw new Error('Не удалось добавить видео в историю')
    }
}

export const removeFromHistory = (id) => async (dispatch,getState) => {
    try {
        const { user: {accessToken }} = getState()
        const res = await axios.get(`http://localhost:5001/history/${id}/remove`,{
            headers: {
                "authorization": `Bearer ${accessToken}`
            }
        })

        dispatch(getHistory())
    } catch (e) {
        console.log(e.message)
        
        throw new Error('Не удалось добавить видео в историю')
    }
}

export const clearHistory = () => async (dispatch,getState) => {
    try {
        dispatch({type: 'CLEAR_HISTORY_REQUEST'})

        const { user: { accessToken }} = getState()
        const res = await axios.get('http://localhost:5001/history/clear',{
            headers: {
                "authorization": `Bearer ${accessToken}`
            }
        })

        if (res.status === 200 && res.data.success === true) {
            dispatch({
                type: 'CLEAR_HISTORY_SUCCESS',
                payload: res.data
            })
        }
    } catch (e) {
        console.log(e.message)

        dispatch({
            type: 'CLEAR_HISTORY_ERROR',
            payload: e.message
        })

        throw new Error('Не удалось очистить историю')
    }
}