import React from 'react'
import { useLogout } from '../services/logout.js';

const LogoutButton = ({ className, children }) => {
  const { logout } = useLogout();

  return(
    <button onClick={ logout } className={`btn btn-sm btn-outline-danger ${className}`} type="button">{children}</button>
  );
}

export default LogoutButton