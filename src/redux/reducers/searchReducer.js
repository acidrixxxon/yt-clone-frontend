
const initialState = {
    query: '',
    result: {},
    loading: false,
    error: null
}

export const searchReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'SEARCH_REQUEST':
            return {
                ...state,
                loading: true,
                query: action.payload
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                loading: false,
                result: {
                    channels: action.payload.channels,
                    videos: action.payload.videos
                }
            }
        case 'SEARCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
 }