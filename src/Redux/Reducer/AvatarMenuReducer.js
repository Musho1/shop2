import AvatarMenuState from "../State/AvatarMenuState";

function AvatarMenuReducer(state=AvatarMenuState,action){
    let temp={...state}
    if(action.type==='OpenAvatarMenu'){
        temp.openAvatarMenu=true

    }
    if(action.type==='CloseAvatarMenu'){
        temp.openAvatarMenu=false
    }
    return temp
}
export default AvatarMenuReducer