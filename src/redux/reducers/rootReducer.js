import { combineReducers } from 'redux'
import { channelReducer } from './channelReducer'
import { historyReducer } from './historyReducer'
import { searchReducer } from './searchReducer'
import { userReducer } from './userReducer'
import { videoReducer } from './videoReducer'
import { viewReducer } from './viewReducer'



export const rootReducer = combineReducers({
    user: userReducer,
    video: videoReducer,
    channel: channelReducer,
    view: viewReducer,
    search: searchReducer,
    history: historyReducer
})