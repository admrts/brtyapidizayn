import React from "react";
import FireplaceCard from "../FireplaceCard";

import FireplaceBackground from "../FireplaceBackground";

const FirePlaces = ({ data, title }) => {
  console.log(data);
  return (
    <div className=" pt-100 container fireplaces ">
      <FireplaceBackground />
      <div
        className=" container d-flex flex-column align-items-center justify-content-center gap-5"
        style={{ height: "100%" }}
      >
        <h2 className="row justify-content-center">{title}</h2>
        <div className="row d-flex gap-3 justify-content-center mt-30 align-items-center ">
          {data.map((item) => (
            <FireplaceCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirePlaces;
