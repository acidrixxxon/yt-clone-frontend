import ChannelService from './../../Services/ChannelService.js'

export const getChannelPage = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'CHANNEL_PAGE_REQUEST'
        })

        const res = await ChannelService.getChannelById(id)
        
        if (res.status === 200) {
            dispatch({
                type: 'CHANNEL_PAGE_SUCCESS',
                payload: res.data.channel
            })
        }
    } catch (e) {
        dispatch({
            type: 'CHANNEL_PAGE_ERROR',
            payload: e.message
        })
        console.log(e.message)
        throw new Error('Не удалось получить данные страницы!')
    }
}