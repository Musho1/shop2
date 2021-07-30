import axios from "axios"

export const GetCategory=(value)=>{
    return dispatch=>{
        axios.post('http://localhost:5001/getProductbyCategory',{type:value}).then((r)=>{
            dispatch(EndGetCategory(r.data.product_Category))
        })
    }
}

const EndGetCategory=(value)=>{
    return {
        type:'EndGetCategory',
        value
    }
}



export const GetCourseByCount=(count)=>{
    return dispatch=>{
        axios.post('http://localhost:5001/GetAllproduct',{count:count}).then((r)=>{
            dispatch(endGetCourseByCount(r.data.product))
        })
    }
}

const endGetCourseByCount=(value)=>{
    return {
        type:'endGetCourseByCount',
        value
    }
}



export const removeItemByid=(id,product_id)=>{
    return dispatch=>{
        axios.post('http://localhost:5001/romovebyid',{id:id,product_id:id}).then((r)=>{
            console.log(r)
        })
    }
}