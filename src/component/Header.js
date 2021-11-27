import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation()
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
      <Link className="navbar-brand" to="/">{t("cryptoP2P")}</Link>
      <button onClick={ setNextState } { ...(state.toggler) } type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div {...(state.collapse)} id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">{t("home")}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/activities">{t("activities")}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotations">{t("quotations")}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cryptos">{t("cryptocurrencies")}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">{t("users")}</Link>
          </li>
        </ul>
        {/* <LanguageSelector className="header-right-mobile" /> */}
        <LanguageSelector />
        <LogoutButton className="header-right-mobile">{t("logout")}</LogoutButton>
      </div>
      {/* <LanguageSelector className="header-right-no-mobile" /> */}
      <LogoutButton className="header-right-no-mobile" >{t("logout")}</LogoutButton>
    </nav>
  );
}

export default Header