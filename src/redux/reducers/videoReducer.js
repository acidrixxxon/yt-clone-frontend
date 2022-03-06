const initialState = {
    videos: null,
    videoDetails: null,
    loading: false,
    error: null,
    nextPageToken: null
}


export const videoReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'HOME_VIDEOS_REQUEST':
            return {
                ...state,loading: true
            }
        case 'HOME_VIDEOS_SUCCESS':
            return {
                ...state,
                loading:false,
                videos: action.payload.videos,
                nextPageToken: action.payload.nextPageToken
            }
        case 'HOME_VIDEOS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'VIDEO_DETAILS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'VIDEO_DETAILS_SUCCESS':
            return {
                ...state,
                loading: false,
                videoDetails: action.payload
            }
        case 'VIDEO_DETAILS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}