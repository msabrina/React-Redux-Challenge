import { combineReducers } from 'redux';
import TweetReducer from './reducer_tweets';

const rootReducer = combineReducers({
  tweets: TweetReducer
});

export default rootReducer;
