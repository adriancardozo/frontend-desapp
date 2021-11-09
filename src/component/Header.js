import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';

const Header = () => {
  const [togglerClassName] = useState("navbar-toggler")
  const [collapseClassName] = useState("navbar-collapse")
  const [state, setState] = useState({
    toggler: {
      className: `${togglerClassName} collapsed`
    },
    collapse: {
      className: `${collapseClassName} collapse`
    },
    prevState: 'collapsing',
    nextState: 'showing',
    callback: () => {} 
  })
  const [states] = useState({
    'collapsed': {
      toggler: {
        className: `${togglerClassName} collapsed`
      },
      collapse: {
        className: `${collapseClassName} collapse`
      },
      prevState: 'collapsing',
      nextState: 'showing',
      callback: () => { }
    },
    'showing': {
      toggler: {
        className: togglerClassName
      },
      collapse: {
        className: `${collapseClassName} collapsing`,
        style: { height: '263px' }
      },
      prevState: 'collapsed',
      nextState: 'shown',
      callback: () => { setTimeout(setNextState, 350) }
    },
    'shown': {
      toggler: {
        className: togglerClassName,
      },
      collapse: {
        className: `${collapseClassName} collapse show`
      },
      prevState: 'showing',
      nextState: 'collapsing',
      callback: () => { }
    },
    'collapsing': {
      toggler: {
        className: `${togglerClassName} collapsed`
      },
      collapse: {
        className: `${collapseClassName} collapsing`
      },
      prevState: 'shown',
      nextState: 'collapsed',
      callback: () => { setTimeout(setNextState, 350) }
    }
  })

  const setNextState = () => {
    setState(prevState => states[prevState.nextState])
  }

  useEffect(() => state.callback(), [state])

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">CryptoP2P</Link>
      <button onClick={ setNextState } { ...(state.toggler) } type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div {...(state.collapse)} id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/activities">Activities</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotations">Quotations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cryptos">Cryptocurrencies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
          </li>
        </ul>
        <LogoutButton className="header-mobile-logout-button">Logout</LogoutButton>
      </div>
      <LogoutButton className="header-logout-button" >Logout</LogoutButton>
    </nav>
  );
}

export default Header