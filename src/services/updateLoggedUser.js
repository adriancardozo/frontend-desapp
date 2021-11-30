import { httpClient } from './httpClient';

const updateLoggedUser = (setUser) => httpClient.get('/api/user/')
    .then(({ data }) => {
        setUser(({ token }) => {
            localStorage.setItem("user", JSON.stringify({...data, transactions: [], token}))
            return {...data, token}
        })
    })

export { updateLoggedUser }