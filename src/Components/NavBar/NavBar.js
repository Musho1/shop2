import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import AvatarMenu from '../AvatarMenu/AvatarMenu'
import './NavBar.css'
function Navbar(){
    const {user}=useSelector(state=>state.user)
    
    const history=useHistory()
    const {openAvatarMenu}=useSelector((state)=>state.avatarmenu)
    return <nav className="navbar">
        <ul className="navbarul">
            <li>Shope</li>
            <li>Men</li>
            <li>sadas</li>
            <li>ds</li>
        </ul>
        <ul className="navbarul">
            <li>
                {user.name===undefined?
                    <button onClick={()=>{history.push('/login')}}>Logn</button>
                    :<Avatar  name={user.name}></Avatar>
                }
                {openAvatarMenu &&
                    <AvatarMenu></AvatarMenu>
                }
            </li>
        </ul>
    </nav>
}
export default Navbar