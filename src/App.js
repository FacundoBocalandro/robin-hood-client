import './main.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import LoginContainer from "./session/login/LoginContainer";
import RegisterContainer from "./session/register/RegisterContainer";
import Companies from "./companies/Companies";

function App() {

    return (
        <BrowserRouter>
            <div className={"app-container"}>
                <Switch style={{width: '100%', height: '100%'}}>
                    <Route exact path={"/"} component={LoginContainer}/>
                    <Route path={"/register"} component={RegisterContainer}/>
                    <Route path={"/main/companies"} component={Companies}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
