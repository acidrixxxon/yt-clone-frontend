const initialState = {
    channel: {},
    loading: false,
    error: null,
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
                channel: action.payload
            }
        case 'CHANNEL_PAGE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}