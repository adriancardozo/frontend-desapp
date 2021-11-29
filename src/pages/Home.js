import React, { useContext, useEffect } from "react";
import { updateLoggedUser } from "../services/updateLoggedUser";
import { SessionContext } from "../services/Session";
import CryptoCurrencies from "./CryptoCurrencies";

const Home = () => {
    const { actions: { setUser } } = useContext(SessionContext);

    useEffect(() => updateLoggedUser(setUser), [setUser])
    
    return(<CryptoCurrencies />)
}

export default Home