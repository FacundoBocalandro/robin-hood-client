import './main.css';
import {Switch, BrowserRouter} from "react-router-dom";
import LoginContainer from "./session/login/LoginContainer";
import RegisterContainer from "./session/register/RegisterContainer";
import Companies from "./companies/Companies";
import ReversePrivateRoute from "./security/ReversePrivateRoute";
import PrivateRoute from "./security/PrivateRoute";
import MyStocks from "./my-stocks/MyStocks";

function App() {

    return (
        <BrowserRouter>
            <div className={"app-container"}>
                <Switch style={{width: '100%', height: '100%'}}>
                    <ReversePrivateRoute exact path={"/"} component={LoginContainer}/>
                    <ReversePrivateRoute path={"/register"} component={RegisterContainer}/>
                    <PrivateRoute path={"/main/home"} component={Companies}/>
                    <PrivateRoute path={"/main/stocks"} component={MyStocks}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
