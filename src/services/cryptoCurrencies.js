import { httpClient } from './httpClient';

const useCryptoCurrencies = () => {
    const cryptoCurrencies = (callback) => httpClient.get('/api/crypto/')
                            .then(({ data }) => callback(data))
    return { cryptoCurrencies }
}

export { useCryptoCurrencies }