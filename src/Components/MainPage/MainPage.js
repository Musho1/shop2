import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    return <div>
        <div>
            <Navbar></Navbar>
        </div>
        {user.admin==='1' &&
            <Admin />
        }
        {user.admin==='0' &&
            <Slider></Slider>
        }
    </div>
}
export default MainPage