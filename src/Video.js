import React from 'react';
import video from './video/back.mp4';

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <video
          className="desktop-video"
          resizemode={"cover"}
          style={{
            aspectRatio: 1,
            width: "100%",
          }} autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    );
  }
}