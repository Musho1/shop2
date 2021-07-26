import { useState } from "react"
import { useSelector } from "react-redux"
import './Slider.css'
function Slider(){
    const {slider}=useSelector((state=>state.slider))
    const [index,setindex]=useState(0)
    const Next=()=>{
        clearInterval(interval);
        if(index<slider.length-1){
            setindex(index+1)
        }
        if(index===slider.length-1){
            setindex(0)
        }
    }
    const Prev=()=>{
        clearInterval(interval);
        if(index>0){
            setindex(index-1)
            
        }
        else if(index===0){
            setindex(slider.length-1)
            
        }
    }
        const interval=setInterval(() => {
            Next()
        }, 3500);
    return <div className="slider">
        <div className="sliderDiv">
            {slider.length!==0 &&
                <img  src={slider[index].image}></img>
            }   
        </div>
        <div className="SliderButton">
            <button onClick={()=>Prev()}>R</button>
            <button onClick={()=>Next()}>L</button>
        </div>
        <div className="SliderO">
            {
                slider.map((elm,i)=>{
                    return <div key={i} onClick={()=>setindex(i)} className={index===i?"activeSlider":undefined}></div>
                })
            }
        </div>
    </div>
}
export default Slider