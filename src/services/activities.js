import { httpClient } from './httpClient';

const useActivities = () => {
    const activities = (callback) => httpClient.get('/api/activities/')
                            .then(({ data }) => callback(data))
    return { activities }
}

export { useActivities }