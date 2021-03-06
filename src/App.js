import React, { Component } from 'react';
import request from 'superagent';

import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifModal from './components/GifModal';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }
  }

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    });
  }

  render() {
    return (
      <div className="ui container app">
        <SearchBar onTermChange={ this.handleTermChange } />
        <GifList 
          gifs={this.state.gifs}
          onGifSelect={ selectedGif => this.openModal(selectedGif) } />
        <GifModal 
          modalIsOpen={ this.state.modalIsOpen }
          selectedGif={ this.state.selectedGif }
          onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

export default App;
