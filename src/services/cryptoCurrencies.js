import { httpClient } from './httpClient';

const cryptoCurrencies = (callback) => httpClient.get('/api/crypto/').then(({ data }) => callback(data))

export { cryptoCurrencies }