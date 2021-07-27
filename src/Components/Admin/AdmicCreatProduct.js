import axios from "axios";
import { useEffect, useState } from "react";

function Product (){
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [images,setimages]=useState([])
    const [product,setproduct]=useState({name:'',price:''})
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        images.push(e.target.files[0])
        setimages(images)
    };
    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append('data',JSON.stringify(product))
        images.map((elm,i)=>{
            formData.append(`images`,(elm))
        })
        
         axios.post( "http://localhost:5001/UploadPhotoForProduct",formData).then((r)=>{
             console.log(r)
         });
        } 
        console.log(images)

        useEffect(()=>{
            axios.get( "http://localhost:5001/getAllProduct").then((r)=>{
             console.log(r)
            });
        })
    return <div>
        <div>
            <input  value={product.name} onChange={e=>(setproduct({...product,name:e.target.value}))} placeholder="name"></input>
        </div>
        <div>
            <input value={product.price} onChange={e=>(setproduct({...product,price:e.target.value}))} placeholder="price"></input>
        </div>
        <div>
            <input type="file" onChange={saveFile} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    </div>
}
export default Product