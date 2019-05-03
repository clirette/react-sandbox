import React, { Component } from 'react';
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async term => {
    try {
      const { data: response } = await unsplash.get(`/search/photos`, {
        params: { query: term }
      });
      this.setState({ images: response.results });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
