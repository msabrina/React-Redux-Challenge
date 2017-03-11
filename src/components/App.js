import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTweets } from '../actions/apiAction';
import { fetchLocation } from "../actions/locationAction";


class App extends Component {
  constructor(props) {
    super(props);

// set state for search term
    this.state = {
      term: '',
    };
// binding functions so we can call them on the return
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    // at this point, we need to go and fetch api data
    // this.state.fetchTweets(this.state.term);
    this.setState({ term: ''});
  }


  componentWillMount() {
    // this.props.dispatch(fetchUser())
    this.props.dispatch(fetchTweets())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  renderTweets() {
    // const name = tweets.user_name;
    const tweet = this.props;
    // console.log('tweets',tweets);

    return tweet.map((tweet, i) => {
      // console.log('tweets', tweet);
      <li>
        {tweet.tweet_text}
      </li>
        // key={i}
        // name={tweet.user_name}
    }
    );
  }

  render() {
    console.log("hitting render");
    return (
    <div>
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search Illness."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-groupbtn">
          <button onClick={this.fetchTweets.bind(this)} type="submit" className="btn">Search</button>
        </span>
      </form>
        <ul>
          {this.renderTweets}
        </ul>
    </div>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     // user: store.user.user,
//     // userFetched: store.user.fetched,
//     tweets: state.tweets,
//   };
// }
export default connect((store) => {
  return {
    tweets: store.tweets.tweets
  }
})(App);
