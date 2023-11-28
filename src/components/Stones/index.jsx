import React from "react";
import StoneCard from "../StoneCard";
import stones from "../../data/stonesBricks/stones.json";

const Stones = () => {
  return (
    <div
      className="pt-100 container mb-100 d-flex flex-column align-items-center justify-content-center gap-5"
      style={{ minHeight: "70vh" }}
    >
      <h2 className="row justify-content-center">Kültür Taşları</h2>
      <div className="row d-flex gap-3 justify-content-center mt-30 ">
        {stones.map((item) => (
          <StoneCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Stones;
