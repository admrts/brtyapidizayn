import Image from "next/image";
import React from "react";
import blurData from "../../common/blurdataUrl";

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
              alt="bmw"
              src="/assets/img/brt/brands/bmw.svg"
              width={300}
              height={150}
              placeholder="blur"
              blurDataURL={() => blurData("/assets/img/brt/brands/bmw.svg")}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              alt="cocacola"
              src="/assets/img/brt/brands/coca-cola.svg"
              width={300}
              height={150}
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/brands/coca-cola.svg")
              }
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              alt="google"
              src="/assets/img/brt/brands/google.svg"
              width={300}
              height={150}
              placeholder="blur"
              blurDataURL={() => blurData("/assets/img/brt/brands/google.svg")}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mt-10">
            <Image
              alt="mcdonalds"
              src="/assets/img/brt/brands/mcdonalds.svg"
              width={300}
              height={150}
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/brands/mcdonalds.svg")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands3;
