import axios from 'axios'


export const SendImgSlider=(image)=>{
    return (dispatch)=> {
        axios.post('http://localhost:5001/SliderPhoto',{
            body:image,
            headers:{
                'Accept':'multipart/form-data'
            },
            credentials:'includes'
        }).then(r=>{
            console.log(r)
        }) 
    } 
}


export const GetImgSlider=()=>{
    return dispatch=>{
        axios.get('http://localhost:5001/getsliderfile').then((r)=>{
            dispatch(EndGetSlider(r.data.slider))
        })
    
    }
   
}

const EndGetSlider=(value)=>{
    return {
        type:'EndGetSlider',
        value,
    }
}


export const DeletImgSlider=(name,id)=>{
    return dispatch=>{
        axios.post('http://localhost:5001/deletimg',{name:name,id:id}).then((console.log('ok')))
        .catch((error)=>(console.log(error)))
    }
}