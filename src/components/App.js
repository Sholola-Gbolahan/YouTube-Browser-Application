import React from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";

import VideoList from "./VideoList";
import "./App.css";
import youtube from "../apis/youtube";

class App  extends React.Component{
  state = {videos: [], selectedVideos:null}


  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({videos:response.data.items})
  };


  onVideoSelect = (video) =>{
    this.setState({selectedVideo:video}) 
  }


  render(){

  
  return (
    <>
   
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onInnerSubmit={this.onTermSubmit} />
      I have {this.state.videos.length} vidoes to watch
      </div>

      <div className=" ui segment video-con">
        {/* VideoDetails */}
        <div className=" ui segment videoDetails-con">
          <VideoDetails video={this.state.selectedVideo} />
        </div>

        {/* VideoList */}

        <div className=" ui segment videoList-con">
          <VideoList 
            onVideoSelect = { this.onVideoSelect} 
            videoList = {this.state.videos}
          />
        </div>
      </div>
      </>
  );
  }
};

export default App;
