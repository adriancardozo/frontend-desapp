import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { SessionProvider } from './services/Session';
import PublicRoute from './component/PublicRoute';
import PrivateRoute from './component/PrivateRoute';
import Home from './pages/Home';
import Quotations from './pages/Quotations';
import Activities from './pages/Activities';
import CryptoCurrencies from './pages/CryptoCurrencies';
import Users from './pages/Users';

function App() {
      return (
        <div className="App">
      {/* <div className="row">
        <div className="card">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>CryptoP2P</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    </div> */}
    <Router>
      <SessionProvider>
        <Switch>
          <PublicRoute exact path='/' component={Login} />
          <PublicRoute path="/sign-in" component={Login} />
          <PublicRoute path="/sign-up" component={Register} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/quotations" component={Quotations} />
          <PrivateRoute path="/activities" component={Activities} />
          <PrivateRoute path="/cryptos" component={CryptoCurrencies} />
          <PrivateRoute path="/users" component={Users} />
        </Switch>
      </SessionProvider>
    </Router>
  </div>
  );
}

export default App;