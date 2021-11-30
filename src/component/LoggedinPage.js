import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import '../styles/LoggedinPage.css'
import { transactions } from '../services/transactions'
import { SessionContext } from '../services/Session'

const LoggedinPage = ({ children }) => {
  const [b, setB] = useState(true)
  const { actions: { setUser } } = useContext(SessionContext);
  
  useEffect(() => {
    transactions((transactions) => {
      setUser(prevState => {
        localStorage.setItem("user", JSON.stringify({...prevState, transactions}))
        return {...prevState, transactions}
      })
    })
    setTimeout(() => setB(prevState => !prevState), 5000)
  }, [b, setUser])

  return(
    <>
      <Header />
      <div className="row loggedin-page-row">
        <div className="col loggedin-page-col" />
        <div className="col-md-auto loggedin-page-central-col">
          {children}
        </div>
        <div className="col loggedin-page-col" />
      </div>
    </>
  );
}

export default LoggedinPage