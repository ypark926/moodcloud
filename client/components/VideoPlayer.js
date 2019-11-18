import React from 'react'

const VideoPlayer = props => {
  const vid = props.vid

  if (!vid) {
    return <div>lol try again</div>
  }

  const vidId = vid.id.videoId

  return (
    <div className="video-detail col-md-8">
      <div className="iframe-container">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${vidId}`}
        />
      </div>
      <div className="additional">
        <div>{vid.snippet.title}</div>
        <div>{vid.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoPlayer
