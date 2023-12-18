import Image from "next/image";
import React from "react";
import blurData from "../../common/blurdataUrl";
import Link from "next/link";

const Projelendirme = () => {
  return (
    <div className="container mt-100 projelendirme-container">
      {/* First start */}
      <h3 className="text-center mb-50">Projelendirme</h3>
      <Link href="/projelendirme/mimariproje">
        <div className="projelendirme-card-container-first">
          <div className="projelendirme-image-container">
            <Image
              alt="mimari"
              src="/assets/img/brt/contact/contact.jpg"
              height={200}
              width={200}
              className="img-fluid rounded-circle"
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/contact/contact.jpg")
              }
            />
          </div>
          <h4>Mimari Proje</h4>
        </div>
      </Link>
      {/* First End */}
      {/* Second start */}
      <Link href="/projelendirme/statikproje">
        <div className="projelendirme-card-container-second">
          <div className="projelendirme-image-container">
            <Image
              alt="statik"
              src="/assets/img/brt/contact/contact.jpg"
              height={200}
              width={200}
              className="img-fluid rounded-circle"
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/contact/contact.jpg")
              }
            />
          </div>
          <h4>Statik Proje</h4>
        </div>
      </Link>
      {/* Second End */}
      {/* Third start */}
      <Link href="#">
        <div className="projelendirme-card-container-third">
          <div className="projelendirme-image-container">
            <Image
              alt="mimari"
              src="/assets/img/brt/contact/contact.jpg"
              height={200}
              width={200}
              className="img-fluid rounded-circle"
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/contact/contact.jpg")
              }
            />
          </div>
          <h4>Mimari Proje</h4>
        </div>
      </Link>
      {/* Third End */}
      {/* Fourth start */}
      <Link href="#">
        <div className="projelendirme-card-container-fourth">
          <div className="projelendirme-image-container">
            <Image
              alt="statik"
              src="/assets/img/brt/contact/contact.jpg"
              height={200}
              width={200}
              className="img-fluid rounded-circle"
              placeholder="blur"
              blurDataURL={() =>
                blurData("/assets/img/brt/contact/contact.jpg")
              }
            />
          </div>
          <h4>Mimari Proje</h4>
        </div>
      </Link>
      {/* Fourth End */}
    </div>
  );
};

export default Projelendirme;
