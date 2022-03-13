import VideoService from '../../Services/VideoService.js'
import ChannelService from './../../Services/ChannelService.js'

export const getChannelPage = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: 'CHANNEL_PAGE_REQUEST'
        })

        const state = getState()
        const channelRes = await ChannelService.getChannelById(id)
        const videosRes = await ChannelService.getChannelVideos(id)

        if (state.user.accessToken !== null && state.user.user !== null) {
            const subscribed = state.user.user.subscriptions.find( subs => subs._id === channelRes.data.channel._id) ? true : false
            channelRes.data.channel.subscribed = subscribed
    
            if (channelRes.status === 200 && videosRes.status === 200) {
                dispatch({
                    type: 'CHANNEL_PAGE_SUCCESS',
                    payload: {
                        channelInfo: channelRes.data.channel,
                        channelVideos: videosRes.data.videos
                    }
                })
            }
        }

        if (channelRes.status === 200 && videosRes.status === 200) {
            dispatch({
                type: 'CHANNEL_PAGE_SUCCESS',
                payload: {
                    channelInfo: channelRes.data.channel,
                    channelVideos: videosRes.data.videos
                }
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

export const subscribeOnChannel = (id) => async (dispatch,getState) => {
    try {
        dispatch({type: 'SUBSCRIBE_ON_CHANNEL_REQUEST'})
        const { user } = getState()
        
        const res = await ChannelService.subscribeOnChannel(id,user.accessToken)

        console.log(res)
        if (res.status === 200) {
            return dispatch({type: 'SUBSCRIBE_ON_CHANNEL_SUCCESS',payload: res.data.updatedChannel})
        }
    } catch (e) {
        dispatch({
            type: 'SUBSCRIBE_ON_CHANNEL_ERROR',
            payload: e.message
        })
        console.log(e.message)
        throw new Error('Не удалось получить данные страницы!')
    }
}

export const unsubscribeOnChannel = (id) => async (dispatch,getState) => {
    try {
        dispatch({type: 'UNSUBSCRIBE_ON_CHANNEL_REQUEST'})
        const { user } = getState()
        
        const res = await ChannelService.unsubscribeOnChannel(id,user.accessToken)

        console.log(res)
        if (res.status === 200) {
            return dispatch({type: 'UNSUBSCRIBE_ON_CHANNEL_SUCCESS',payload: res.data.updatedChannel})
        }
    } catch (e) {
        dispatch({
            type: 'UNSUBSCRIBE_ON_CHANNEL_ERROR',
            payload: e.message
        })
        console.log(e.message)
        throw new Error('Не удалось получить данные страницы!')
    }
}

export const addVideoView = (id) => async (dispatch) => {
    try {
        const res = await VideoService.addVideoView(id)

        if (res.status === 200) {
            console.log('Просмотр добавлен!')
            return 
        }
    } catch (error) {
        console.log(error.message)
    }
}