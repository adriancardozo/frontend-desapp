import { httpClient } from './httpClient';

const createActivity = (data, callback) => httpClient.post('/api/activity/create/', data).then(callback)

export { createActivity }