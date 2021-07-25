import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import SignUpReducer from './SignUpreducer'
import UserReducer from './UserReducer'
export default combineReducers({
    signup:SignUpReducer,
    login:LoginReducer,
    user:UserReducer,
})