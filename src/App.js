import './main.css';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import LoginContainer from "./session/login/LoginContainer";
import RegisterContainer from "./session/register/RegisterContainer";

function App() {

    return (
        <BrowserRouter>
            <div className={"app-container"}>
                <Switch style={{width: '100%', height: '100%'}}>
                    <Route exact path={"/"} component={LoginContainer}/>
                    <Route path={"/register"} component={RegisterContainer}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
