import Image from "next/image";
import React from "react";

const Projelendirme = () => {
  return (
    <div className="container mt-100 projelendirme-container">
      {/* First start */}
      <h3 className="text-center mb-50">Projelendirme</h3>
      <div className="projelendirme-card-container-first">
        <div className="projelendirme-image-container">
          <Image
            alt="mimari"
            src="/assets/img/brt/contact/contact.jpg"
            height={200}
            width={200}
            className="img-fluid rounded-circle"
          />
        </div>
        <h4>Mimari Proje</h4>
      </div>
      {/* First End */}
      {/* Second start */}
      <div className="projelendirme-card-container-second">
        <div className="projelendirme-image-container">
          <Image
            alt="statik"
            src="/assets/img/brt/contact/contact.jpg"
            height={200}
            width={200}
            className="img-fluid rounded-circle"
          />
        </div>
        <h4>Statik Proje</h4>
      </div>
      {/* Second End */}
      {/* Third start */}
      <div className="projelendirme-card-container-third">
        <div className="projelendirme-image-container">
          <Image
            alt="mimari"
            src="/assets/img/brt/contact/contact.jpg"
            height={200}
            width={200}
            className="img-fluid rounded-circle"
          />
        </div>
        <h4>Mimari Proje</h4>
      </div>
      {/* Third End */}
      {/* Fourth start */}
      <div className="projelendirme-card-container-fourth">
        <div className="projelendirme-image-container">
          <Image
            alt="statik"
            src="/assets/img/brt/contact/contact.jpg"
            height={200}
            width={200}
            className="img-fluid rounded-circle"
          />
        </div>
        <h4>Mimari Proje</h4>
      </div>
      {/* Fourth End */}
    </div>
  );
};

export default Projelendirme;
