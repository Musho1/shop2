import { useDispatch } from 'react-redux';
import { OpenAvatarMenu } from '../../Redux/Action/AvatarMenuAction';
import './Avatar.css'

function Avatar(props){ 
    
    const dispatch=useDispatch()
    
    let x=Math.floor(Math.random() * 255);
    let y=Math.floor(Math.random() * 255);
    let z=Math.floor(Math.random() * 255);

    return <div onClick={()=>dispatch(OpenAvatarMenu())} className="avatar"  style={{backgroundColor:`rgb(${x},${y},${z})`}}>
        <p>{props.name!==undefined && props.name[0]}</p>
    </div>
}
export default Avatar