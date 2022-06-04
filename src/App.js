import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import youtube from "./apis/youtube";
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

export default class App extends Component {
    constructor() {
        super();
        this.state = { videos: [], selectedVideo: null }
    }

    componentDidMount(){
        this.onTermSubmit('vlog')
    }

    //Api calling function
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
         })
    }

    onVideoSelect = (video) => {
        this.setState({ ...this.state, selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchBarSubmit={this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
