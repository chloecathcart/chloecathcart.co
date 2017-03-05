import React, { PropTypes } from 'react';

function MobileVideo(props) {
  return (
    <div class="MobileVideo">
      <video
        autoPlay
        preload
        loop
        controls={false}
        poster={props.poster}
        src={props.src} />
    </div>
  );
}

MobileVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default MobileVideo;
