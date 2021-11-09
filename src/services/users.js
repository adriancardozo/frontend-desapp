import { httpClient } from './httpClient';

const users = (callback) => httpClient.get('/api/users/').then(({ data }) => callback(data))
                            
export { users }