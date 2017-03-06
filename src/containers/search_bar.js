import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTweets } from '../actions/index';

class SearchBar extends Component {
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
    this.props.fetchTweets(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search Illness."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-groupbtn">
          <button type="submit" className="btn">Search</button>
        </span>
      </form>
    );
  }
}

// call action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTweets}, dispatch);
}
// export connect version of component SearchBar
export default connect(null, mapDispatchToProps) (SearchBar);
