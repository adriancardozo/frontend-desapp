import React from 'react'
import { useLogout } from '../services/logout.js';
import CursorLink from './CursorLink.js';

const LogoutButton = ({ className }) => {
  const { logout } = useLogout();

  return(
    <CursorLink className={className} onClick={ logout }>
      <h3>Logout</h3>
    </CursorLink>
  );
}

export default LogoutButton