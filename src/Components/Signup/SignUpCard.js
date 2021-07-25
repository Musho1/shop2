import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img3 from '../../Img/solesavy-QGcRQiUV-Vc-unsplash (1).jpg'
import { SignUpUser } from '../../Redux/Action/SignUpAction'
function SingUpCard(){
    const [SignUp,setSignup]=useState({name:'',surname:'',login:'',password:'',admin:false})
    const [errmsg,seterrmsg]=useState({errname:'',errsurname:'',erremail:'',errpassword:''})
    const {SingUpError}=useSelector((state=>state.signup))
    sessionStorage.removeItem('token')
    const dispatch=useDispatch()
    const ValidateEmail=(input)=> {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
          return true;
        } else {
          return false;
        }
      }

    const validation=(data)=>{
        let send=true
        if(data.name===''){
            errmsg.errname='Please enter your name'
            seterrmsg({...errmsg,errname:"Please enter your name"})
        }
        else {
            errmsg.errname=''
            seterrmsg({...errmsg,errname:""})
        }
        if(data.surname===''){ 
            errmsg.errsurname='Please enter your surname'
            seterrmsg({...errmsg,errsurname:"Please enter your surname"})
        }
        else {
            errmsg.errsurname=''
            seterrmsg({...errmsg,errsurname:""})
        }
        if(data.password===''){
            errmsg.errpassword='Please enter your password'
            seterrmsg({...errmsg,errpassword:"Please enter your password"})
        }
        else if(data.password.length<6){
            errmsg.errpassword='Passwords must be six or more characters'
            seterrmsg({...errmsg,errpassword:"Passwords must be six or more characters"})
        }
        else {
            errmsg.errpassword=''
            seterrmsg({...errmsg,errpassword:""})
        }
        if(!ValidateEmail(data.login)){
            errmsg.erremail='Please enter valid mail address'
            seterrmsg({...errmsg,erremail:'Please enter valid mail address'})
        }
        else if(data.mail===''){
            errmsg.erremail='Please enter your mail'
            seterrmsg({...errmsg,erremail:'Please enter your mail'})
        }
        else {
            errmsg.erremail=''
            seterrmsg({...errmsg,erremail:''})
        }
        Object.values(errmsg).forEach((elm)=>{
            if(elm!==''){
                send=false
            }
        })
        if(send){
            dispatch(SignUpUser(SignUp))
        }
        
    }
    return <div className='SingUpCard'>
        <div className="singupinput">
            <h1>Sign Up</h1>

            <input className={errmsg.errname!==''?"errorinput":undefined} placeholder="Name" value={SignUp.name} onChange={(e)=>setSignup({...SignUp,name:e.target.value})}></input>
            <p className="errormsg">{errmsg.errname}</p>

            <input className={errmsg.errsurname!==''?"errorinput":undefined} placeholder="Surname" value={SignUp.surname} onChange={(e)=>setSignup({...SignUp,surname:e.target.value})}></input>
            <p className="errormsg">{errmsg.errsurname}</p>

            <input className={errmsg.erremail!==''?"errorinput":undefined} placeholder="Email" value={SignUp.login} onChange={(e)=>setSignup({...SignUp,login:e.target.value})}></input>
            <p className="errormsg">{errmsg.erremail}</p>

            <input className={errmsg.errpassword!==''?"errorinput":undefined} placeholder="Password" value={SignUp.password} onChange={(e)=>setSignup({...SignUp,password:e.target.value})}></input>
            <p className="errormsg">{errmsg.errpassword}</p>

            <button onClick={()=>validation(SignUp)}>Sign Up</button>
            <p>{SingUpError}</p>
            <Link to='/login'>Have already an account ? Login here</Link>
        </div>
        <div className="singupimg">
            <img alt="ss" src={img3}></img>
        </div>
    </div>
}
export default SingUpCard