import axios from "axios"

export const SignUpUser=(user)=>{
    return (dispatch)=>{
        axios.post('http://localhost:5001/',JSON.stringify(user)).then((r)=>{
            window.location.href="/login"
        })
        .catch((error)=>{
            console.log('ss')
            dispatch(ErrorSignUp("error"))
        })
    }
}

const ErrorSignUp=(error)=>{
    
    return {
        type:'ErrorSignUp',
        error
    }
}