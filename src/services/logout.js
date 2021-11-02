import { useContext } from 'react';
import { useHistory } from 'react-router';
import { SessionContext } from './Session';

const useLogout = () => {
    const { actions: { setUser } } = useContext(SessionContext);
    const history = useHistory();
  
    const logout = () => {
      setUser({ id: "", name: "", image: "", followers: [], timeline: [], token: "" })
      localStorage.removeItem('user')
      history.push('/')
    }
  
    return { logout }
}

export { useLogout }