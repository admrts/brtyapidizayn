import React from "react";

const Store = () => {
  return (
    <div
      className="container mb-50 mt-100 d-flex flex-column"
      style={{ gap: "50px" }}
    >
      {/* stones */}
      <div className="d-flex align-items-center" style={{ gap: "150px" }}>
        <div className="store-image-container">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>
        <h3>Kültür Taşları</h3>
      </div>
      {/* bricks */}
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ gap: "150px" }}
      >
        <div
          className="rounded-circle"
          style={{
            width: "200px",
            height: "200px",
            border: "3px solid #401e00",
          }}
        >
          <img
            src="https://picsum.photos/200"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>
        <h3>Kültür Tuğlası</h3>
      </div>
      {/* fireplace */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ gap: "200px" }}
      >
        <div
          className="rounded-circle"
          style={{
            width: "200px",
            height: "200px",
            border: "3px solid #401e00",
          }}
        >
          <img
            src="https://picsum.photos/200"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>
        <h3>Şömineler</h3>
      </div>
    </div>
  );
};

export default Store;
