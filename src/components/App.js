import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
  }

  onSearchSubmit = async term => {
    try {
      const { data: results } = await youtube.get('/search', {
        params: { q: term }
      });
      this.setState({
        videos: results.items,
        selectedVideo: results.items[0]
      });
    } catch (err) {
      console.log(err);
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearchSubmit('traversy media');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
