import { httpClient } from './httpClient';

const useQuotations = () => {
    const quotations = (callback) => httpClient.get('/api/crypto/quotation')
                            .then(({ data }) => callback(data))
    return { quotations }
}

export { useQuotations }