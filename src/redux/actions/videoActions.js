import axios from "axios";



export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({type: 'HOME_VIDEOS_REQUEST'})

        const {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=AIzaSyCi_vJ4gDMaKikfo0Q6iFRFEUOQQq0sKd4')
        console.log(data);
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