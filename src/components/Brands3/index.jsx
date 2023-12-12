import Image from "next/image";
import React from "react";

const Brands3 = () => {
  return (
    <div className="container mb-100">
      <div className="row">
        <h3 className="text-center mb-100">Markalar</h3>
      </div>
      <div className="row text-center">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              src="/assets/img/brt/brands/bmw.svg"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              src="/assets/img/brt/brands/coca-cola.svg"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              src="/assets/img/brt/brands/google.svg"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              src="/assets/img/brt/brands/mcdonalds.svg"
              width={300}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands3;