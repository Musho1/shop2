import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AdminMain from "./AdminMain"
import {GetCourseByCount, removeItemByid} from '../../Redux/Action/GetCategoryAction'
import TopProductCard from '../TopCourse/TopProductCard'

function AdminProduct(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetCourseByCount(15))
    },[])
    const {AllProduct}=useSelector((state)=>state.product)
    return <AdminMain>
        <div onScroll={()=>console.log('ss')} className="AdminProduct">
            {
                AllProduct.map((elm,i)=>{
                    return<div key={i} className="AdminProductelm">
                        
                        <p onClick={()=>dispatch(removeItemByid(elm.id,elm.Product_id))}>x</p> 
                        <TopProductCard key={i} item={elm}></TopProductCard>
                    </div>
                })
            }
        </div>
    </AdminMain>
} 
export default AdminProduct