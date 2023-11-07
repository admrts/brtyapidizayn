import Image from "next/image";
import React from "react";

const stonesList = [
  "Volantis",
  "Roldos",
  "Mujica",
  "Evo",
  "Maya",
  "Persia",
  "BajaCalifornia",
];

const Stones = () => {
  return (
    <div>
      <div className="container">
        <h4 className="row justify-content-center">Asimetrik Taşlar</h4>
        <div className="container">
          <div className="row mt-30 mb-30 gap-3 justify-content-center align-items-center">
            {stonesList.map((item, i) => (
              <div key={i} className="col btn btn-secondary w-auto ">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1 fs-3 fw-bold  vertical-text ">RENKLER</div>
            <div className="col-md-2  border d-flex flex-column gap-3 align-items-center py-3">
              <div className="border border-2 border-success w-100 h-100">
                <Image />
              </div>
              <div className="border border-2 border-success w-100 h-100">
                box2
              </div>
              <div className="border border-2 border-success w-100 h-100">
                box3
              </div>
              <div className="border border-2 border-success w-100 h-100">
                box4
              </div>
              <div className="border border-2 border-success w-100 h-100">
                box5
              </div>
              <div className="border border-2 border-success w-100 h-100">
                box6
              </div>
            </div>
            <div className="col-md-6 border">3</div>
            <div className="col-md-3 border">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stones;
