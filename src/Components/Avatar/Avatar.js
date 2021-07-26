import './Avatar.css'

function Avatar(props){ 
    
    
    let x=Math.floor(Math.random() * 255);
    let y=Math.floor(Math.random() * 255);
    let z=Math.floor(Math.random() * 255);

    return <div className="avatar"  style={{backgroundColor:`rgb(${x},${y},${z})`}}>
        <p>{props.name!==undefined && props.name[0]}</p>
    </div>
}
export default Avatar