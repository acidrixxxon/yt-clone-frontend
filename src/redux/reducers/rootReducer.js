import { combineReducers } from 'redux'
import { channelReducer } from './channelReducer'
import { userReducer } from './userReducer'
import { videoReducer } from './videoReducer'



export const rootReducer = combineReducers({
    user: userReducer,
    video: videoReducer,
    channel: channelReducer
})