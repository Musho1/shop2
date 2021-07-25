import UserState from "../State/UserState"

function UserReducer(state=UserState,action){
    let temp={...state}
    if(action.type==='EndGetUserByToken'){
        temp.user=action.user
    }
    return temp
}
export default UserReducer