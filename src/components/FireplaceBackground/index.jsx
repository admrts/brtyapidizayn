import React from "react";

const FireplaceBackground = () => {
  return (
    <video loop autoPlay playsInline className="video-bg">
      <source
        src="/assets/img/brt/fireplace/fireplaces1.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default FireplaceBackground;
