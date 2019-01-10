import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Login from "./page/Login";
import Signup from "./page/Signup";
import Profile from "./page/Profile";
import Apollo from './utils/Apollo';


const Links = () => (
  <div>
    <Link to="/login" >Login</Link>
    <br />
    <Link to="/signup" >Sign up</Link>
    <br />
    <Link to="/profile" >Profile</Link>
  </div>
)

class App extends React.Component {
  public render() {
    return (
      <Apollo>
        <BrowserRouter>
          <div>
            <Route path="/" exact={true} component={Links} />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/signup" exact={true} component={Signup} />
            <Route path="/profile" exact={true} component={Profile} />
          </div>
        </BrowserRouter>
      </Apollo>
    );
  }
}

export default App;
