import Link from "next/link";
import Image from "next/image";
import React from "react";
import blurData from "../../common/blurdataUrl";

const Store = () => {
  return (
    <div className="container mb-100 mt-100 store-container">
      {/* stones */}
      <Link href="/kulturtaslari" passHref>
        <div className="store-items-container-first">
          <div className="store-image-container">
            <Image
              width={200}
              height={200}
              src="/assets/img/stones/asimetrik/atacama/antracita.jpeg"
              alt=""
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/stones/asimetrik/atacama/antracita.jpeg")
              }
            />
          </div>
          <h3 className="store-items-title">Kültür Taşları</h3>
        </div>
      </Link>
      {/* bricks */}
      <div className="store-items-container-second">
        <Link href="/kulturtuglalari" passHref>
          <div className="store-image-container">
            <Image
              priority
              width={200}
              height={200}
              src="/assets/img/stones/tuglalar/java/cotto.jpeg"
              alt=""
              className="img-fluid rounded-circle "
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/stones/tuglalar/java/cotto.jpeg")
              }
            />
          </div>
        </Link>
        <h3 className="store-items-title">Kültür Tuğlası</h3>
      </div>
      {/* fireplace */}
      <div className="store-items-container-third">
        <Link href="/somineler" passHref>
          <div className="store-image-container">
            <Image
              priority
              width={200}
              height={200}
              src="/assets/img/brt/fireplace/fireplace.jpg"
              alt=""
              className="img-fluid rounded-circle"
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/fireplace/fireplace.jpg")
              }
            />
          </div>
        </Link>
        <h3 className="store-items-title">Şömineler</h3>
      </div>
    </div>
  );
};

export default Store;
