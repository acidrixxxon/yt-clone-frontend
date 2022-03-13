const initialState = {
    channel: {},
    videos: [],
    loading: false,
    error: null,
    subloading: false
}


export const channelReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'CHANNEL_PAGE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'CHANNEL_PAGE_SUCCESS':
            return {
                ...state,
                loading: false,
                channel: action.payload.channelInfo,
                videos: action.payload.channelVideos
            }
        case 'CHANNEL_PAGE_ERROR':
            return {
                ...state,
                subloading: false,
                error: action.payload
            }
        case 'SUBSCRIBE_ON_CHANNEL_REQUEST':
            return {
                ...state,
                subloading: true
            }
        case 'SUBSCRIBE_ON_CHANNEL_SUCCESS':
            return {
                ...state,
                subloading: false,
                channel: { ...action.payload,subscribed: true}
            }
        case 'SUBSCRIBE_ON_CHANNEL_FAIL':
            return {
                ...state,
                subloading: false,
                error: action.payload
            }
        case 'UNSUBSCRIBE_ON_CHANNEL_REQUEST':
            return {
                ...state,
                subloading: true
            }
        case 'UNSUBSCRIBE_ON_CHANNEL_SUCCESS':
            return {
                ...state,
                subloading: false,
                channel: { ...action.payload,subscribed: false}
            }
        case 'UNSUBSCRIBE_ON_CHANNEL_FAIL':
            return {
                ...state,
                subloading: false,
                error: action.payload
            }
        default:
            return state
    }
}