import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyDHblXYo2VX1-N4GbUUKs2sA9QpCgeXro4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch(
            {key: API_KEY, term: term},
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            }
        );
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
};

export default App;