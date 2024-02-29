import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videoList, onVideoSelect}) => {
    const renderedlist = videoList.map((video) => {
        return <VideoItem onVideoSelect = {onVideoSelect}  video = {video} />
    })
  
  return (
    <div className='ui items'> {renderedlist}</div>
  ) 
}

export default VideoList