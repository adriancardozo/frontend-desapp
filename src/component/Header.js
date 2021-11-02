import React from 'react'
import '../styles/Header.css'
import LogoutButton from './LogoutButton';
import StaticContentCard from './StaticContentCard';
import HomeButton from './HomeButton';

const Header = () => { 
  return (
    <StaticContentCard className="header">
      <div className="col header-col">
        <div className="row header-row">
          <div className="col-md-auto"><HomeButton /></div>
          <div className="col mobile-logout-button-col">
            <div className="row justify-content-end">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
      <div className="col header-col logout-button-col">
        <div className="row justify-content-end">
          <LogoutButton />
        </div>
      </div>
    </StaticContentCard>
  );
}

export default Header