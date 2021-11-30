import { useContext } from 'react';
import { useHistory } from 'react-router';
import { SessionContext } from './Session';
import { httpClient } from './httpClient';

const useLogin = () => {
    const { state: { user }, actions: { setUser } } = useContext(SessionContext)
    const history = useHistory()
  
    const login = (data) => {
      return httpClient.post('/api/user/login', data)
      .then(response => { 
        let userUpdated = { ...user , token: response.headers.authorization, transactions: [] }
        setUser(userUpdated)
        localStorage.setItem("user", JSON.stringify(userUpdated))
        history.push('/home');
      })
    }
  
    return { login }
  }

export { useLogin }