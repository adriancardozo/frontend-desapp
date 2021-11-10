import { useContext } from 'react';
import { useHistory } from 'react-router';
import { SessionContext } from './Session';

const useLogout = () => {
    const { actions: { setUser } } = useContext(SessionContext);
    const history = useHistory();
  
    const logout = () => {
      setUser({ token: "" }) // id: "", name: "", image: "", followers: [], timeline: [], 
      localStorage.removeItem('user')
      history.push('/')
    }
  
    return { logout }
}

export { useLogout }