import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    axios.get("http://api.flutrack.org/?s=flu&time=7")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}




// const fetch = require('node-fetch');
// const ROOT_URL = 'http://api.flutrack.org/?';

// export const GET_TWEETS = 'GET_TWEETS';
// export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

// function getTweets(tweet) {
//   return {
//     type: GET_TWEETS,
//     tweet
//   }
// }

// // function receiveTweets(tweet, json) {
// //   return {
// //     type: RECEIVE_TWEETS,
// //     tweet,
// //     posts: json.data.children.map(child => data),
// //     receivedAt: Date.now()
// //   }
// // }

// // export function fetchTweets(flu) {

// //   const url = `${ROOT_URL}s=${flu}`;
// //   // request to return promise, no data yet at this point
// //   const request = axios.get(url);
// //   console.log('Request:', request);
// //   return {
// //     type: FETCH_TWEETS,
// //     // data: request,
// //     // request to return as payload data
// //     payload: request
// //   };
// // }



// export function fetchTweets(flu) {
//   return dispatch => {
//     dispatch(getTweets(flu))
//     return fetch(`${ROOT_URL}s=${flu}`)
//       .then(response => response.json())
//       .then(json => dispatch(receiveTweets(flu, json)))
//   };
// }


