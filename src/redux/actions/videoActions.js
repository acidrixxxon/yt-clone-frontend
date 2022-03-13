import VideoService from "../../Services/VideoService";


export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({type: 'HOME_VIDEOS_REQUEST'})

        const res = await VideoService.getAllVideos()

        console.log('Home videos:' ,res.data.videos)

        dispatch({
            type: 'HOME_VIDEOS_SUCCESS',
            payload: {
                videos: res.data.videos
            }
        })

    } catch (e) {
        console.log(e);
        dispatch({type: 'HOME_VIDEOS_ERROR',payload: e.message})
    }
}

export const fetchVideoDetails = (id) => async(dispatch,getState) => {
    try {
        dispatch({type: 'VIDEO_DETAILS_REQUEST'})

        const { user:{ accessToken,user},video: { videoDetails }} = getState()

        const res = await VideoService.getVideoDetails(id)
        
        if (user !==null && accessToken !== null && res.status === 200) {
            // dodelat dlya moego kanala
            const myChannel = {};

            const subscribed = user.subscriptions.find(item => item._id ==  res.data.video.channel._id) ? true : false
            res.data.video.channel.subscribed = subscribed

            dispatch({
                type: 'VIDEO_DETAILS_SUCCESS',
                payload: res.data.video
            })
        }

        dispatch({
            type: 'VIDEO_DETAILS_SUCCESS',
            payload: res.data.video
        })

    } catch (error) {
        console.log(error.message);
        dispatch({type: 'VIDEO_DETAILS_ERROR',payload: error})
    }
}