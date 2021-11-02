import { useContext } from 'react';
import { useHistory } from 'react-router';
import { SessionContext } from './Session';
import { httpClient } from './httpClient';


const useRegister = () => {
    const { state: { user }, actions: { setUser } } = useContext(SessionContext)
    const history = useHistory();
  
    const register = (data) => {
      return httpClient.post('/api/user/register', data)
        .then(({ headers: { authorization } }) => {
          let userUpdated = { ...user, token: authorization }
          setUser(userUpdated)
          localStorage.setItem("user", JSON.stringify(userUpdated))
          history.push('/home');
        })
    }
  
    return { register }
}

export { useRegister }