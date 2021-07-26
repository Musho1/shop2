import axios from "axios"

export const LoginUser=(user)=>{
    console.log(user)
    return dispatch=>{
        axios.post('http://localhost:5001/login',JSON.stringify(user)).then((r)=>{
            sessionStorage.setItem('token',r.data.token)
            window.location.href="/"
        })
        .catch((error)=>{
            dispatch(LoginSenderror())
        })
    }
}



export const GetUserByToken=()=>{
    let token =sessionStorage.getItem('token')
    return dispatch =>{
        axios.post('http://localhost:5001/GetUserByToken',{
                "Authorization":token
            }).then((r)=>{
                dispatch(EndGetUserByToken(r.data.aurhData))
            }).catch((error)=>console.log(error))
    }
}

const EndGetUserByToken=(user)=>{
    return {
        type:'EndGetUserByToken',
        user,
    }
}



const LoginSenderror=()=>{
    return {
        type:'LoginSenderror',
    }
}