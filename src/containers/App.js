import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import GifsTemp from '../components/GifsTemp';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui container app">
        <SearchBar onTermChange={ this.props.actions.requestGifs } />
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);