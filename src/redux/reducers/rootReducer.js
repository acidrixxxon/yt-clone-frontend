import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { videoReducer } from './videoReducer'



export const rootReducer = combineReducers({
    user: userReducer,
    video: videoReducer
})