import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from "react-router-dom";
import i18n from '../i18n.js';
import { SessionContext } from '../services/Session.js';

export default function PrivateRoute({ path, component }) {
    const { state: { isAuthenticated } } = useContext(SessionContext);
    useEffect(() => {
        let storedLanguage = localStorage.getItem("language")
        if(!storedLanguage) {
            storedLanguage = "en"
            localStorage.setItem("language", storedLanguage)
        }
        i18n.changeLanguage(storedLanguage)
    }, [])
    
    if (!isAuthenticated) return <Redirect to="/sign-in" />;

    return (
        <Route path={ path } component={ component }/> 
    )
}