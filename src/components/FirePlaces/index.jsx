import React from "react";
import StoneCard from "../StoneCard";
import firesplacesList from "../../data/fireplaces/fireplaces.json";

const FirePlaces = () => {
  return (
    <div className=" pt-100 container  position-relative fireplaces">
      <video loop autoPlay playsInline className="video-bg">
        <source
          src="/assets/img/brt/fireplace/fireplaces1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div
        className=" container d-flex flex-column align-items-center justify-content-center gap-5"
        style={{ minHeight: "70vh" }}
      >
        <h2 className="row justify-content-center">Şömineler</h2>
        <div className="row d-flex gap-3 justify-content-center mt-30 ">
          {firesplacesList.map((item) => (
            <StoneCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirePlaces;
