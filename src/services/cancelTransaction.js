import { httpClient } from './httpClient';

const cancelTransaction = (id, callback) => httpClient.put(`/api/transaction/${id}/cancel/`).then(callback)

export { cancelTransaction }