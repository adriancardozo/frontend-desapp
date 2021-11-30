import { httpClient } from './httpClient';

const startTransaction = (data, callback) => httpClient.post('/api/transaction/create/', data).then(({data}) => callback(data))

export { startTransaction }