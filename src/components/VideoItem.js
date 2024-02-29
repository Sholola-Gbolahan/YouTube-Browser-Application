import React from 'react'
import './App.css'

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div onClick= { () => onVideoSelect(video)} className=' video-item item'>
      <div className='image'> 
        <img src={video.snippet.thumbnails.medium.url} alt=" Youtube Vid" /> 
      </div>
       <div className='content'>
         <div className='header'> {video.snippet.title} </div> 
       </div>
    </div>
  )
}

export default VideoItem