import { httpClient } from './httpClient';

const transactions = (callback) => httpClient.get('/api/transactions/').then(({ data }) => callback(data))

export { transactions }