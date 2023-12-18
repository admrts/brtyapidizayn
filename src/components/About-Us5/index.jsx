import React from "react";
import Split from "../Split";

const AboutUs5 = () => {
  return (
    <section className="about2 section-padding">
      <div className="container-fluid office mt-0">
        <div className="row">
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{
                backgroundImage: "url(/assets/img/brt/slider/img1.jpg)",
              }}
            ></div>
          </div>
          <div className="col-lg-6 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{
                backgroundImage: "url(/assets/img/brt/slider/img2.jpg)",
              }}
            ></div>
          </div>
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{
                backgroundImage: "url(/assets/img/brt/slider/img3.jpg)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-100">
          <div className="col-lg-6">
            <div className="main-tit">
              <Split>
                <h2 className="wow words chars splitting" data-splitting>
                  Proje & Tasarım <br /> Uygulama
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  10 yıllık inşaat sektöründeki deneyimimizle, sağlam temeller
                  üzerine kurulu, yenilikçi ve özgün projeler üretiyoruz.
                  Müşterilerimize özel çözümler sunarak kalite ve güveni bir
                  araya getiriyoruz.
                </p>
              </Split>
              <div className="exp">
                <h3 className="">10</h3>
                <h5 className=" valign">
                  <Split>
                    <span className="wow words chars splitting" data-splitting>
                      Yıllık <br /> Deneyim
                    </span>
                  </Split>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
