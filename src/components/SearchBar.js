import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleInputChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui input search-bar">
          <input 
            type="text" 
            placeholder="Search..."
            onChange={this.handleInputChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar;