import LoginState from "../State/LoginState";

function LoginReducer(state=LoginState,action){
    let temp={...state}
    if(action.type==="LoginSenderror"){
        temp.errorLogin="Error"
    }
    return temp
}
export default LoginReducer