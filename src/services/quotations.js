import { httpClient } from './httpClient';

const quotations = (callback) => httpClient.get('/api/crypto/quotation').then(({ data }) => callback(data))

export { quotations }