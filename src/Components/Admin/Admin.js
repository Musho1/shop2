import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletImgSlider } from "../../Redux/Action/SliderAction";
import Product from "./AdmicCreatProduct";
import './admin.css' 

function Admin (){
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const dispatch=useDispatch()
    const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
  
      const uploadFile = async (e) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
       axios.post( "http://localhost:5001/uploadFileAPI",formData).then((r)=>{
         console.log(r)
       });
      } 
    const {slider}=useSelector((state=>state.slider))
    
    return <div className="admin">
      <hr></hr>
      <h3>Slider</h3>
       <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>

      <div>
          <div className="adminImg">
            {slider.map((elm,i)=>{
            return  <div key={i} className="adminimg">
                    <p onClick={()=>dispatch(DeletImgSlider(elm.imgName,elm.id))} >x</p>
                    <img alt="ss" src={elm.image}></img>
            </div>
            })

            }
          </div>
          <hr></hr>
      </div>
      <div>
        <Product></Product>
      </div>
    </div>
}
export default Admin