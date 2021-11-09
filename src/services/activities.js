import { httpClient } from './httpClient';

const activities = (callback) => httpClient.get('/api/activities/').then(({ data }) => callback(data))

export { activities }