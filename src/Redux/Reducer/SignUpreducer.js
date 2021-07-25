import SignUpState from "../State/SignUpState"

function SignUpReducer(state=SignUpState,action){
    let temp={...state}
    if(action.type==='ErrorSignUp'){
        temp.SingUpError=action.error
    }
    return temp
}
export default SignUpReducer