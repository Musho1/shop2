import axios from "axios"

export const GetCategory=(value)=>{
    return dispatch=>{
        axios.post('http://localhost:5001/getProductbyCategory',{type:value}).then((r)=>{
            console.log(r.data.product_Category)
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