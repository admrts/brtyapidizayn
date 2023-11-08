import React from "react";
import stones from "../../data/stonesBricks/stones.json";
import bricks from "../../data/stonesBricks/bricks.json";

const Stones = ({ id }) => {
  return (
    <div>
      <div className="container mt-100">
        {/* <h4 className="row justify-content-center">{data[0].title}</h4> */}
        <div className="container">
          <div className="row mt-30 mb-30 gap-3 justify-content-center align-items-center">
            {/* {data[0].kind.map((item, i) => (
              <div key={i} className="col btn btn-secondary w-auto ">
                {item.title}
              </div>
            ))} */}
          </div>
          <div className="row">
            <div className="text-center fs-3 my-4">Atacama</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <p className="fs-3 fw-bold vertical-text text-dark">RENKLER</p>
            </div>
            <div className="col-md-2  border d-flex flex-column gap-3 align-items-center py-3">
              {/* {data[0].kind[0].colors.map((item, i) => (
                <div className="shadow-lg  w-75 h-75">
                  <img src={item.image} alt="" />
                  <p className="text-center fs-6 ">{item.title}</p>
                </div>
              ))} */}
            </div>
            <div className="col-md-6 border py-3">
              {/* <img src={data[0].kind[0].colors[0].image} alt="" /> */}
            </div>
            <div className="col-md-3 border">
              <div>Teknik Özellikler</div>
              <div>
                <div>Boyutlar</div>
                <div>1m2</div>
              </div>
              <div>Kalınlık</div>
              <div>Derz Aralığı</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stones;