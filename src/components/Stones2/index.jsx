import React from "react";
import Card2 from "../Card2";
import stones from "../../data/stonesBricks/stones.json";

const Stones2 = ({ title }) => {
  const data = stones.find((item) => item.title === title);
  return (
    <div
      className="pt-100 container d-flex flex-column align-items-center justify-content-center gap-5"
      style={{ minHeight: "80vh" }}
    >
      {data ? (
        <>
          <h2 className="row justify-content-center">{data.title} </h2>
          <div className="row d-flex gap-3 justify-content-center mt-30 ">
            {data.kind.map((item) => (
              <Card2 item={item} key={item.id} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Stones2;
