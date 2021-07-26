import "./AvatarMenu.css"
function AvatarMenu(){
    const Log_Out=()=>{
        sessionStorage.setItem('token',undefined)
        window.location.href=('/login')
    }

    return <div className="AvatarMenu">
        <div><p>Profile</p></div>
        <div onClick={()=>Log_Out()} ><p>Log Out</p></div>
    </div>
}
export default AvatarMenu