import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading!!!!</div>;
  }

  console.log(video);
  const videoID = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoID} allowFullScreen ></iframe>

      </div>
      <div className="ui segment">
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
