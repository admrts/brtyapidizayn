import React from "react";
import Card2 from "../Card2";
import bricks from "../../data/stonesBricks/bricks.json";

const Bricks = () => {
  return (
    <div className="mt-100 container">
      <h2 className="row justify-content-center">Kültür Tuğlaları</h2>
      <div className="row d-flex gap-3 justify-content-center mt-30 ">
        {bricks[0].kind.map((item) => (
          <Card2 item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Bricks;
