/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services6 = () => {
  return (
    <section className="services-feat section-padding">
      <h2 className="services6-title">Kültür Taşları ve Şömineler</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column shadow-lg">
              <Image
                width={910}
                height={663}
                src="/assets/img/brt/services6.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="d-flex flex-column  mt-20">
              <div className="item ">
                <span className="icon flaticon-home-1"></span>
                <div>
                  <h5>Kültür Taşları</h5>
                  <p>
                    Yapısal olarak elverişli ve uygun biçimde hazırlanmış
                    herhangi bir yüzeye uygulanabilir ve uygulandığı yüzeyin
                    dahili bir parçası haline geldiğinden, hiçbir temel veya
                    yapısal değişiklik gerektirmez.
                  </p>
                </div>
              </div>
              <div className="item">
                <span className="icon flaticon-living-room"></span>
                <div>
                  <h5>Kültür Tuğlaları</h5>
                  <p>
                    Yapısal olarak elverişli ve uygun biçimde hazırlanmış
                    herhangi bir yüzeye uygulanabilir ve uygulandığı yüzeyin
                    dahili bir parçası haline geldiğinden, hiçbir temel veya
                    yapısal değişiklik gerektirmez.
                  </p>
                </div>
              </div>
              <div className="item">
                <span className="icon flaticon-interior-design"></span>
                <div>
                  <h5>Şömineler</h5>
                  <p>
                    Maksimum konfor ve modern tasarım sunan evler oluşturmak
                    için tasarlıyoruz.
                  </p>
                </div>
              </div>
              <Link href="/magaza">
                <span className="btn-magaza">Mağazaya Git</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
