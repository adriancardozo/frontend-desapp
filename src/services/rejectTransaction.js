import { httpClient } from './httpClient';

const rejectTransaction = (id, callback) => httpClient.put(`/api/transaction/${id}/reject/`).then(callback)

export { rejectTransaction }