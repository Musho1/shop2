import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img4 from '../../Img/toa-heftiba-KQ1n6HzSahY-unsplash.jpg'
import { LoginUser } from '../../Redux/Action/LoginAction'

function LoginCard(){
    const [Login,setLogin]=useState({login:'',password:''})
    const [errmsg,seterrmsg]=useState({errLogin:'',errPassword:''})
    const {errorLogin}=useSelector(state=>state.login)
    sessionStorage.removeItem('token')
    const dispatch=useDispatch()
    const Log_In=(value)=>{
        let send=true
        if(Login.login===''){
            errmsg.errLogin="Please enter your Login"
            seterrmsg({...errmsg,errLogin:"Please enter your login"})
        }
        else {
            errmsg.errLogin=""
            seterrmsg({...errmsg,errLogin:""})
        }


        if(Login.password===''){
            errmsg.errPassword="Please enter your password"
            seterrmsg({...errmsg,errPassword:"Please enter your password"})
        }
        else{
            errmsg.errPassword=""
            seterrmsg({...errmsg,errPassword:""})
        }

        Object.values(errmsg).forEach((elm)=>{
            if(elm!==''){
                send=false
            }
        })
        if(send){
            dispatch(LoginUser(Login))
        }
    }
    return <div className="LoginCard">
        <div className="LoginImgDiv">
            <img alt='ss' src={img4}></img>
        </div>
        <div className="logininput">
            <h1>Login</h1>
            
            <input className={errmsg.errLogin!==''?"Loginerror":undefined} placeholder="Login" value={Login.login} onChange={(e)=>setLogin({...Login,login:e.target.value})}></input>
            <p className="erroLogin">{errmsg.errLogin}</p>

            <input className={errmsg.errPassword!==''?"Loginerror":undefined} placeholder="Password" value={Login.password} onChange={(e)=>setLogin({...Login,password:e.target.value})} ></input>
            <p className="erroLogin">{errmsg.errPassword}</p>

            <button onClick={()=>Log_In(Login)}>Sing Up</button>
            <p className="errorLogin">{errorLogin}</p>
            <Link to='/signup'>Don`t have an accaunt? Sing Up</Link>
        </div>
    </div>
}
export default LoginCard