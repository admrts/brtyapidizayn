import Image from "next/image";
import React from "react";

const Projelendirme = () => {
  return (
    <div className="container mt-100 projelendirme-container">
      {/* First start */}
      <div className="projelendirme-card-container-first">
        <div>
          <Image
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
        <div>
          <Image
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
        <div>
          <Image
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
        <div>
          <Image
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
