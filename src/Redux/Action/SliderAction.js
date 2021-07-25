import axios from 'axios'


export const SendImgSlider=(image)=>{
    console.log(image)
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


