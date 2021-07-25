import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { SendImgSlider } from "../../Redux/Action/SliderAction"

function Admin (){
    const imageHandler=(event)=>{
        const file=event.target.files[0]
        const formData=new FormData()
        formData.append('image', event.target.files[0]);
        console.log(formData.append('image',file))

        fetch('http://localhost:5001/api/image',{
            method:'POST',
            body:formData,
            headers:{
                'Accept':'multipart/form-data'
            },
            credentials:'include'
        }).then(res=>res.json())
        // .then(res=>)
        // dispatch(SendImgSlider(formData))
    }
    return <div>
       <form method="POST" action="http://localhost:5001/profile-upload-single" enctype="multipart/form-data">
        <div>
            <label>Upload profile picture</label>
            <input type="file" name="profile-file" required/>
        </div>
        <div>
            <input type="submit" value="Upload" />
        </div>
    </form>

    <hr />

    <form method="POST" action="/profile-upload-multiple" enctype="multipart/form-data">
        <div>
            <label>Upload multiple profile picture</label>
            <input type="file" name="profile-files" required multiple  />
        </div>
        <div>
            <input type="submit" value="Upload" />
        </div>
    </form>
    </div>
}
export default Admin