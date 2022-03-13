import axios from "axios"




export const searchQuery = (query) => async (dispatch) => {
    try {
        dispatch({
            type: 'SEARCH_REQUEST',
            payload: query
        })

        const res = await axios.get(`http://localhost:5001/search/?query=${query}`)

        if (res.status === 200) {
            dispatch({
                type: 'SEARCH_SUCCESS',
                payload: {
                    channels: res.data.channels,
                    videos: res.data.videos
                }
            })
        }
        
    } catch (e) {
        dispatch({
            type: 'SEARCH_ERROR',
            payload: e.message
        })
        console.log(e.message)
        throw new Error('Не удалось получить данные поиска!')
    }
}