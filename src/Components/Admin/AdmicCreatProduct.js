import axios from "axios";
import { useState } from "react";

function Product (){
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [product,setproduct]=useState({name:'',price:''})
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append('data',product)
         axios.post( "http://localhost:5001/UploadPhotoForProduct",formData).then((r)=>{
             console.log(r)
         });
        } 
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