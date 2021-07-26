import LoginState from "../State/LoginState";

function LoginReducer(state=LoginState,action){
    let temp={...state}
    if(action.type==="LoginSenderror"){
        temp.errorLogin="Error"
    }
    if(action.type==='staretGetuser'){
        temp.loginloading=true
    }
    if(action.type==='EndGetUserByToken'){
        temp.loginloading=false
    }
    return temp
}
export default LoginReducer