const initialState = {
    smallSizeSidebar: false
}


export const viewReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                smallSizeSidebar: !state.smallSizeSidebar
            }
        default:
            return state
    }
}