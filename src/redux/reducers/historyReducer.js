const initialState = {
    history: {},
    loading: false,
    error: null
}

export const historyReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'HISTORY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'HISTORY_SUCCESS':
            return {
                ...state,
                loading: false,
                history: action.payload
            }
        case 'HISTORY_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'CLEAR_HISTORY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_HISTORY_SUCCESS':
            return {
                ...state,
                loading: false,
                history: action.payload
            }
        case 'CLEAR_HISTORY_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
 }