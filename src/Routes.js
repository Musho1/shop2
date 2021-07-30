import { useSelector } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AdminProduct from "./Components/Admin/AdminProduct"
import Login from "./Components/Login/Login"
import MainPage from "./Components/MainPage/MainPage"
import SingUp from "./Components/Signup/Signup"

function Routes(){
    const {user}=useSelector(state=>state.user)
    console.log(user.admin)
    return <BrowserRouter>
        <Switch>
            {user.admin==='1' &&
                <Route path="/AdminProduct"  component={AdminProduct} ></Route>
            }
            <Route path="/signup"  component={SingUp} ></Route>
            <Route path="/login"  component={Login} ></Route>
            <Route path="/" component={MainPage}></Route>
        </Switch>
    </BrowserRouter>
} 
export default Routes