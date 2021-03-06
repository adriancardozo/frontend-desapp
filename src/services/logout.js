import { useContext } from 'react';
import { useHistory } from 'react-router';
import { SessionContext } from './Session';

const useLogout = () => {
    const { actions: { setUser } } = useContext(SessionContext);
    const history = useHistory();
  
    const logout = () => {
      setUser({ token: "", name: "", lastname: "", email: "", address: "", cvu: "", walletAddress: "", points: 0, numberOfOperations: 0, reputation: 0, transactions: [] })
      localStorage.removeItem('user')
      history.push('/')
    }
  
    return { logout }
}

export { useLogout }