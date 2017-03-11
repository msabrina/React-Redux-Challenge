import React, { Component } from 'react';
import { connect } from 'react-redux';

class TweetsTable extends Component {
  renderTweets(tweets) {
    const name = tweets.user_name;
    const tweet = tweets.tweet_text;
    console.log('tweets',tweets);

    return (
      tweets.map((tweet, i) =>
        <tr key={i}>
          <th text={tweet}>{tweet.name}</th>
          <th text={tweet}>{tweet.tweet}</th>
        </tr>
      )
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <tbody>
          {this.renderTweets()}
        </tbody>
      </table>
    );
  }
}
//es6
function mapStateToProps({ tweets }) {
  return { tweets };
}

// export connect version of component WeatherList
export default connect(mapStateToProps)(TweetsTable)


