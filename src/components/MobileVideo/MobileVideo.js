import React from 'react';
import PropTypes from 'prop-types';

function MobileVideo(props) {
  return (
    <div className="MobileVideo">
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
