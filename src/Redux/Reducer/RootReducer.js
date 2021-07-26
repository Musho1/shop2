import { combineReducers } from 'redux'
import AvatarMenuReducer from './AvatarMenuReducer'
import LoginReducer from './LoginReducer'
import SignUpReducer from './SignUpreducer'
import SliderReducer from './SliderReducer'
import UserReducer from './UserReducer'
export default combineReducers({
    signup:SignUpReducer,
    login:LoginReducer,
    user:UserReducer,
    slider:SliderReducer,
    avatarmenu:AvatarMenuReducer,
})