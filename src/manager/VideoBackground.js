import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop controls className="video-background">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
