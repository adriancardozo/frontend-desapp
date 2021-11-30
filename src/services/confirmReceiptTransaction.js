import { httpClient } from './httpClient';

const confirmReceiptTransaction = (id, callback) => httpClient.put(`/api/transaction/${id}/commit/`).then(callback)

export { confirmReceiptTransaction }