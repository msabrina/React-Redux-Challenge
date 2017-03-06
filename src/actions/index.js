import axios from 'axios';

const ROOT_URL = 'http://api.flutrack.org/?s=flu';

export const FETCH_TWEETS = 'FETCH_TWEETS';

export function fetchTweets(days) {
  const url = `${ROOT_URL}&time=${days}`;

  // request to return promise, no data yet at this point
  const request = axios.get(url);

  console.log('Request:', request);
  return {
    type: FETCH_TWEETS,
    // request to return as payload data
    payload: request
  };
}
