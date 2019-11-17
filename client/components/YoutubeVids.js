import React from 'react'
import SingleVideo from './SingleVideo'

const YoutubeVids = props => {
  const singleVideo = props.videos.map(oneVid => {
    return (
      <SingleVideo
        key={oneVid.etag}
        oneVid={oneVid}
        onUserClick={props.onVideoClick}
      />
    )
  })

  return <ul className="col-md-4 list-group">{singleVideo}</ul>
}

export default YoutubeVids
