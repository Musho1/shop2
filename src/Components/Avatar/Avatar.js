import './Avatar.css'

function Avatar(props){ 
    if(props.name!=undefined)
    console.log(props.name[0])
    let x=Math.floor(Math.random() * 255);
    let y=Math.floor(Math.random() * 255);
    let z=Math.floor(Math.random() * 255);

    console.log(x,y,z)
    return <div className="avatar"  style={{backgroundColor:`rgb(${x},${y},${z})`}}>
        <p>{props.name!==undefined && props.name[0]}</p>
    </div>
}
export default Avatar