import axios from "axios";
import { useEffect, useState } from "react";

function Product (){
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [images,setimages]=useState([])
    const [product,setproduct]=useState({name:'',price:'',description:'',category:[]})
    const [category,setCategory]=useState([])
    const [selectCategory,setselectCategory]=useState([])
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

        useEffect(()=>{
            axios.get( "http://localhost:5001/getAllProduct").then((r)=>{
            });
            axios.get( "http://localhost:5001/getcategoris").then((r)=>{
                setCategory(r.data.category)
            });
            // axios.get( "http://localhost:5001/getProductbyCategory").then((r)=>{
            //     console.log(r)
            // });
        },[])
        const removeSelectimg=(i)=>{
            let temp=[...images]
            temp.splice(i,1)
             setimages(temp)
        }


        const SelectCategory=(e)=>{
            let temp=[...selectCategory]
            temp.push(e)
            setselectCategory(temp)
            setproduct({...product,category:temp})
        }

    return <div>
        <div className="Selectimgforcourse">
            {
                images.map((elm,i)=>{
                    return <div key={i} className='selectimgforcourse'>
                        <p onClick={()=>removeSelectimg(i)} className="removeselectimg">x</p>
                        <img key={i} src={URL.createObjectURL(elm)}></img>
                        </div>
                })
            }
        </div>
        <div>
            <input  value={product.name} onChange={e=>(setproduct({...product,name:e.target.value}))} placeholder="name"></input>
        </div>
        <div>
            <input value={product.price} onChange={e=>(setproduct({...product,price:e.target.value}))} placeholder="price"></input>
        </div>
        <div>
            <textarea  value={product.description} onChange={e=>(setproduct({...product,description:e.target.value}))}></textarea>
        </div>
        <div>
            <select onChange={(e)=>SelectCategory(e.target.value)}>
                {category!==undefined && category.map((elm,i)=>{
                    return  <option key={i} value={elm.id}>{elm.name}</option>
                })
                }
            </select>
        </div>
        <div>
            <input type="file" onChange={saveFile} />
            <button onClick={uploadFile}>Upload</button>
        </div>
    </div>
}
export default Product