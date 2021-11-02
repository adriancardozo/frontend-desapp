import React from 'react'
import Header from './Header'
import '../styles/LoggedinPage.css'

const LoggedinPage = ({ children }) => {
  return(
    <>
      <Header />
      <div className="row loggedin-page-row">
        <div className="col loggedin-page-col" />
        <div className="col-md-auto loggedin-page-central-col">
          {children}
        </div>
        <div className="col loggedin-page-central-col" />
      </div>
    </>
  );
}

export default LoggedinPage