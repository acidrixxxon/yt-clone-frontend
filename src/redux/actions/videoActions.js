import axios from "axios";



export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({type: 'HOME_VIDEOS_REQUEST'})

        const {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=AIzaSyCi_vJ4gDMaKikfo0Q6iFRFEUOQQq0sKd4')
        dispatch({
            type: 'HOME_VIDEOS_SUCCESS',
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    } catch (error) {
        console.log(error);
        dispatch({type: 'HOME_VIDEOS_ERROR',payload: error})
    }
}

export const fetchVideoDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: 'VIDEO_DETAILS_REQUEST'})

        const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cplayer%2Csnippet&2Cstatistics&id=${id}&key=AIzaSyCi_vJ4gDMaKikfo0Q6iFRFEUOQQq0sKd4`)
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${data.items[0].snippet.channelId}&key=AIzaSyCi_vJ4gDMaKikfo0Q6iFRFEUOQQq0sKd4`)
        console.log(res.data.items[0]);
        
        dispatch({
            type: 'VIDEO_DETAILS_SUCCESS',
            payload: {
                details: data.items[0],
                channel: res.data.items[0]
            }
        })
    } catch (error) {
        console.log(error);
        dispatch({type: 'VIDEO_DETAILS_ERROR',payload: error})
    }
}