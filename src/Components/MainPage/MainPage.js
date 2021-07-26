import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseAvatarMenu } from "../../Redux/Action/AvatarMenuAction";
import { GetUserByToken } from "../../Redux/Action/LoginAction";
import { GetImgSlider } from "../../Redux/Action/SliderAction";
import Admin from "../Admin/Admin";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";

function MainPage(){
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.user)
    useEffect(()=>{
        if(sessionStorage.getItem('token')!==null && sessionStorage.getItem('token')!==undefined){
            dispatch(GetUserByToken())
        }
        dispatch(GetImgSlider())
    },[])
    const {loginloading}=useSelector((state)=>state.login)
  
    return <div>
        <div>
            <Navbar></Navbar>
        </div>
        {user.admin==='1' &&
            <Admin />
        }
        <div onClick={()=>dispatch(CloseAvatarMenu())}>
            {user.admin==='0' &&
                <Slider></Slider>
            }
        </div>
    </div>
}
export default MainPage