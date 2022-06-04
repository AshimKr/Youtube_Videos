import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video, index)=>{
        return <VideoItem key={index} video={video}  onVideoSelect={onVideoSelect}/>
    })
  return (
    <div className='ui middle aligned animated list'>
        {renderedList}
    </div>
  )
}

export default VideoList
