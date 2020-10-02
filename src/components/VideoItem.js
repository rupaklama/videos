import React from 'react';

import './VideoItem.css';

const VideoItem = ({ video }) => {
  return (
    <div
      className="item video-item"
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnails"
      />

      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
