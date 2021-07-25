import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./Components/Login/Login"
import MainPage from "./Components/MainPage/MainPage"
import SingUp from "./Components/Signup/Signup"

function Routes(){
    return <BrowserRouter>
        <Switch>
            <Route path="/signup"  component={SingUp} ></Route>
            <Route path="/login"  component={Login} ></Route>
            <Route path="/" component={MainPage}></Route>
        </Switch>
    </BrowserRouter>
} 
export default Routes