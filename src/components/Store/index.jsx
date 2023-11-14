import React from "react";

const Store = () => {
  return (
    <div className="container mb-50 mt-100 store-container">
      {/* stones */}
      <div className="store-items-container-first">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="img-fluid rounded-circle store-image-container"
        />
        <h3 className="store-items-title">Kültür Taşları</h3>
      </div>
      {/* bricks */}
      <div className="store-items-container-second">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="img-fluid rounded-circle store-image-container"
        />
        <h3 className="store-items-title">Kültür Tuğlası</h3>
      </div>
      {/* fireplace */}
      <div className="store-items-container-third">
        <img
          src="https://picsum.photos/200"
          alt=""
          className="img-fluid rounded-circle store-image-container"
        />
        <h3 className="store-items-title">Şömineler</h3>
      </div>
    </div>
  );
};

export default Store;
