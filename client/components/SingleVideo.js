import React from 'react'

const SingleVideo = props => {
  const vid = props.oneVid

  return (
    <li className="list-group-item" onClick={() => props.onUserClick(vid)}>
      <div className="video-list media">
        <div className="media-left">
          <img
            className="media-object"
            src={vid.snippet.thumbnails.default.url}
          />
        </div>
        <div className="media-body">
          <div className="media-heading">{vid.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default SingleVideo
