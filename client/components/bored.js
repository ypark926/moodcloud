import React, {Component} from 'react'
import YoutubeSearch from './YoutubeSearch'
import YoutubeVids from './YoutubeVids'
import VideoPlayer from './VideoPlayer'
import YTSearch from 'youtube-api-search'
require('../../secrets')

class Bored extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      currentVid: null
    }

    this.findVideos('bored')
  }

  findVideos(term) {
    YTSearch({key: process.env.API_KEY, term: term}, info => {
      this.setState({
        videos: info,
        currentVid: info[0]
      })
    })
  }

  render() {
    return (
      <div className="bored">
        <h2>
          welcome to...well...your usual video watching browser. you know what
          to do.
        </h2>
        <YoutubeSearch onSearch={entry => this.findVideos(entry)} />
        <VideoPlayer vid={this.state.currentVid} />
        <YoutubeVids
          videos={this.state.videos}
          onVideoClick={yourChoice => this.setState({currentVid: yourChoice})}
        />
      </div>
    )
  }
}

export default Bored
