import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import TweetsList from '../containers/tweets_table';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <TweetsList />
      </div>
    );
  }
}

