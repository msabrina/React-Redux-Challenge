import { FETCH_TWEETS } from '../actions/index';

export default function(state=[], action) {
  console.log('Action received', action);
  switch(action.type) {
    case FETCH_TWEETS:
  }
  return state;
}
