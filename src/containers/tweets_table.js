import React, { Component } from 'react';
import { connect } from 'react-redux';

class TweetsTable extends Component {
  renderTweets(twitterData) {
    const name = twitterData.user_name;
    const tweet = twitterData.tweet_text;

    return (
      <tr key={name}>
        <th text={tweet}></th>
      </tr>
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <tbody>
          {this.props.tweets.map(this.renderTweets)}
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


