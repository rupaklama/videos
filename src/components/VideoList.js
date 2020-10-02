import React from 'react';

import VideoItem from './VideoItem';
const VideoList = ({ videos }) => { // props.videos
  
  // passing props on second level nested component
  // passing each video objects
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />
  });

  return (
    <div className="ui relax divided list">
     { renderedList }
    </div>
  )
}

export default VideoList;