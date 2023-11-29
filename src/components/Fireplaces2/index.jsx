import React from "react";
import FireplaceCard from "../FireplaceCard2";
import fireplaceList from "../../data/fireplaces/fireplaces.json";

const Fireplaces2 = ({ href }) => {
  const fireplace = fireplaceList.filter((item) => item.href == href);
  console.log(fireplace);
  return (
    <div
      className="container pt-100 d-flex align-items-center justify-content-center flex-column"
      style={{ height: "100vh", gap: "100px" }}
    >
      <h3>Odunlu Şömineler</h3>
      {fireplace ? (
        <div className="d-flex justify-content-center align-items-center">
          {fireplace[0].types.map((item) => (
            <FireplaceCard item={item} key={item.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Fireplaces2;
