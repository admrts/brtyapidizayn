import React from "react";

const Process = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{
        backgroundImage: `url(/assets/img/dots.png)`,
        backgroundColor: "#f3ebdf",
      }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                Nasıl Yapıyoruz
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Çalışma Süreci
              </h4>
            </div>
          </div>
        </div>
        <div className=" row">
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/brt/process/concept.png)`,
                  backgroundSize: "100px",
                  backgroundPosition: "center",
                }}
              >
                {/* <h3 className="numb custom-font">01</h3> */}
              </div>
              <div className="cont">
                <h6 className="mb-10">Konsept</h6>
                <p>
                  Müşteri odaklı yaklaşımımızla, ortak vizyon oluşturarak
                  konsept belirliyoruz.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/brt/process/design.png)`,
                  backgroundSize: "100px",
                  backgroundPosition: "center",
                }}
              >
                {/* <h3 className="numb custom-font">02</h3> */}
              </div>
              <div className="cont">
                <h6 className="mb-10">Tasarım Süreci</h6>
                <p>
                  Ortak belirlenen konseptten ilham alarak detaylı tasarıma
                  geçiyoruz birlikte.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/brt/process/revision.png)`,
                  backgroundSize: "100px",
                  backgroundPosition: "center",
                }}
              >
                {/* <h3 className="numb custom-font">03</h3> */}
              </div>
              <div className="cont">
                <h6 className="mb-10">Revizyon</h6>
                <p>
                  Tasarımın son halini sizlerle birlikte revize ederek son
                  dokunuşları yapıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/brt/process/delivery.png)`,
                  backgroundSize: "100px",
                  backgroundPosition: "center",
                }}
              >
                {/* <h3 className="numb custom-font">04</h3> */}
              </div>
              <div className="cont">
                <h6 className="mb-10">Teslim</h6>
                <p>
                  Tamamlanan projeyi zamanında ve eksiksiz olarak müşteriye
                  teslim ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
