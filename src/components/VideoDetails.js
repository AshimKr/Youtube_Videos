import React from 'react'

function VideoDetails({video}) {
    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
        <div className="ui embed">
            <iframe title='video player' src={videoSrc} />
        </div>
        <div className="ui segment">
            <h2>{video.snippet.title}</h2>
            <h4>{video.snippet.description}</h4>
        </div>
    </div>
  )
}

export default VideoDetails