import React from 'react'
import SearchBar from './SearchBar'
import VideoDetails from './VideoDetails'
import VideoItem from './VideoItem'
import VideoList from './VideoList'
import './App.css'

const App = () => {
  return (
    <div className="ui container" style={{marginTop:'20px'}}>
      <SearchBar/>

      <div className=' ui segment video-con' >

        {/* VideoDetails */}
        <div className=' ui segment videoDetails-con'>
            <VideoDetails />
        </div>

        {/* VideoList */}

        <div className=' ui segment videoList-con'>
          <VideoList />
        </div>

      </div>

    </div>
  )
}

export default App