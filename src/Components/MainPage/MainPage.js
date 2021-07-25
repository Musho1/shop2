import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserByToken } from "../../Redux/Action/LoginAction";
import Admin from "../Admin/Admin";
import Navbar from "../NavBar/NavBar";

function MainPage(){
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.user)
    console.log(sessionStorage.getItem('token'))
    useEffect(()=>{
        if(sessionStorage.getItem('token')!==null && sessionStorage.getItem('token')!==undefined){
            dispatch(GetUserByToken())
        }
    },[])
    console.log(user.admin)
    return <div>
        <div>
            <Navbar></Navbar>
        </div>
        {user.admin==='1' &&
            <Admin />
        }
    </div>
}
export default MainPage