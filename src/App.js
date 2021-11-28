import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { SessionProvider } from './services/Session';
import PublicRoute from './component/PublicRoute';
import PrivateRoute from './component/PrivateRoute';
import Quotations from './pages/Quotations';
import Activities from './pages/Activities';
import CryptoCurrencies from './pages/CryptoCurrencies';
import Users from './pages/Users';
import Transaction from './pages/Transaction';

function App() {
  return (
    <div className="App">
      <Router>
        <SessionProvider>
          <Switch>
            <PublicRoute exact path='/' component={Login} />
            <PublicRoute path="/sign-in" component={Login} />
            <PublicRoute path="/sign-up" component={Register} />
            <PrivateRoute path="/home" component={CryptoCurrencies} />
            <PrivateRoute path="/quotations" component={Quotations} />
            <PrivateRoute path="/activities" component={Activities} />
            <PrivateRoute path="/cryptos" component={CryptoCurrencies} />
            <PrivateRoute path="/users" component={Users} />
            <PrivateRoute path="/transaction" component={Transaction} />
          </Switch>
        </SessionProvider>
      </Router>
  </div>
  );
}

export default App;