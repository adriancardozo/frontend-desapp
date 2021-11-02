import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";
import { SessionContext } from '../services/Session.js';

export default function PrivateRoute({ path, component }) {
    const { state: { isAuthenticated } } = useContext(SessionContext);
    if (!isAuthenticated) return <Redirect to="/sign-in" />;
    
    return (
        <Route path={ path } component={ component }/> 
    )
}