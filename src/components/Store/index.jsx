import Link from "next/link";
import React from "react";

const Store = () => {
  return (
    <div className="container mb-50 mt-100 store-container">
      {/* stones */}
      <div className="store-items-container-first">
        <Link href="/stones">
          <img
            src="/assets/img/stones/asimetrik/atacama/antracita.jpeg"
            alt=""
            className="img-fluid rounded-circle store-image-container"
          />
        </Link>
        <h3 className="store-items-title">Kültür Taşları</h3>
      </div>
      {/* bricks */}
      <div className="store-items-container-second">
        <Link href="/bricks">
          <img
            src="/assets/img/stones/tuglalar/java/cotto.jpeg"
            alt=""
            className="img-fluid rounded-circle store-image-container"
          />
        </Link>
        <h3 className="store-items-title">Kültür Tuğlası</h3>
      </div>
      {/* fireplace */}
      <div className="store-items-container-third">
        <img
          src="/assets/img/stones/asimetrik/atacama/antracita.jpeg"
          alt=""
          className="img-fluid rounded-circle store-image-container"
        />
        <h3 className="store-items-title">Şömineler</h3>
      </div>
    </div>
  );
};

export default Store;
