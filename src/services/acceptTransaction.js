import { httpClient } from './httpClient';

const acceptTransaction = (id, callback) => httpClient.put(`/api/transaction/${id}/accept/`).then(callback)

export { acceptTransaction }