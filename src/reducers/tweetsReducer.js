export default function reducer(state={
    tweets: [],
    // fetching: false,
    // fetched: false,
    // error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TWEETS":
        return {
          tweets: payload,
      }
    case "FETCH_TWEETS_REJECTED":
    case "FETCH_TWEETS_FULFILLED":
      return [ action.payload, ...state ];
    }
    return state
}

