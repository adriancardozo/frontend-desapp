import { httpClient } from './httpClient';

const makeTransferTransaction = (id, callback) => httpClient.put(`/api/transaction/${id}/transfer/`).then(callback)

export { makeTransferTransaction }