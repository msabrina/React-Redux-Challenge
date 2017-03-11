import { combineReducers } from 'redux';

// export default function userTweets(state = {
//     tweets: [],
//   }
//   , action) {
//   switch (action.type) {
//     case "FETCH_TWEETS":
//       return {
//         tweets: payload,
//       }
//     case "FETCH_TWEETS_REJECTED":
//     case "FETCH_TWEETS_FULFILLED":
//       return [ action.payload.data, ...state ];
//     }
//     return state
// }
import tweets from './tweetsReducer';

export default combineReducers({
  tweets,
})
// import location from './locationReducer';


// const rootReducer = combineReducers({
//   tweets: TweetReducer
// });
// const reducer = (state= {
//     tweets: [],
//     fetching: false,
//     fetched: false,
//     error: null,
//   }, action) => {

//     switch (action.type) {
//       case "FETCH_TWEETS": {
//         return [...state, fetching: true];
//       }
//       case "FETCH_TWEETS_REJECTED": {
//         return [...state, fetching: false, error: action.payload];
//       }
//       case "FETCH_TWEETS_FULFILLED": {
//         return [
//           ...state,
//           fetching: false,
//           fetched: true,
//           tweets: action.payload,
//         ];
//       }
// };
