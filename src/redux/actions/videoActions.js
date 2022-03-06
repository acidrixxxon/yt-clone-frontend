import ApiService from "../../utils/ApiService";

export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({type: 'HOME_VIDEOS_REQUEST'})

        const data = await ApiService.getVideos()

        console.log('Home videos:' ,data)

        dispatch({
            type: 'HOME_VIDEOS_SUCCESS',
            payload: {
                videos: data,
            }
        })

    } catch (error) {
        console.log(error);
        dispatch({type: 'HOME_VIDEOS_ERROR',payload: error})
    }
}

export const fetchVideoDetails = (videoId) => async(dispatch) => {
    try {
        dispatch({type: 'VIDEO_DETAILS_REQUEST'})

        const videoData = await ApiService.getVideoById(videoId)
 
        dispatch({
            type: 'VIDEO_DETAILS_SUCCESS',
            payload: videoData.data.video
        })

    } catch (error) {
        console.log(error);
        dispatch({type: 'VIDEO_DETAILS_ERROR',payload: error})
    }
}