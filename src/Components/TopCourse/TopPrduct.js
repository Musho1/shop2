import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetCategory } from "../../Redux/Action/GetCategoryAction"
import './TopProduct.css'
import TopProductCard from "./TopProductCard"
function TopProduct(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetCategory('Top'))
    },[])
    const {Product}=useSelector((state=>state.product))
    const [max,setmax]=useState(document.documentElement.clientWidth>750?document.documentElement.clientWidth/300:3)
    const [min,setmin]=useState(0)
    const addmax=()=>{
        if(max+5<=Product.length+1){
            setmax(max+5)
            setmin(min+5)
        }
    }
    const minusmax=()=>{
        if(min-5>=0){
            setmax(max-5)
            setmin(min-5)
        }
    }
    return <div  className="TopProduct">
        {
            Product.map((elm,i)=>{
                if(i>min&&i<max){
                    return <TopProductCard key={i} item={elm}></TopProductCard>
                }
            })
        }
        <div className="TopProductButton">
            <button onClick={()=>minusmax()}><i className="fas fa-chevron-left"></i></button>
            <button onClick={()=>addmax()}><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
}
export default TopProduct