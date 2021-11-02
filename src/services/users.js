import { httpClient } from './httpClient';

const useUsers = () => {
    const users = (callback) => httpClient.get('/api/users/')
                            .then(({ data }) => callback(data))
    return { users }
}

export { useUsers }