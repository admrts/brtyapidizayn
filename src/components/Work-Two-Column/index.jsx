/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";
import Image from "next/image";
import blurData from "../../common/blurdataUrl";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Çalışmalar</h3>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <Image
                    width={1000}
                    height={1188}
                    src="/assets/img/statikproje/vertical1.jpg"
                    alt=""
                    placeholder="blur"
                    blurDataURL={() =>
                      blurData("/assets/img/statikproje/vertical1.jpg")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <Image
                    width={1000}
                    height={667}
                    src="/assets/img/statikproje/horizontal1.jpg"
                    alt=""
                    placeholder="blur"
                    blurDataURL={() =>
                      blurData("/assets/img/statikproje/horizontal1.jpg")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <Image
                    width={1002}
                    height={1503}
                    src="/assets/img/statikproje/vertical2.jpg"
                    alt=""
                    placeholder="blur"
                    blurDataURL={() =>
                      blurData("/assets/img/statikproje/vertical2.jpg")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <Image
                    width={999}
                    height={666}
                    src="/assets/img/statikproje/horizontal2.jpg"
                    alt=""
                    placeholder="blur"
                    blurDataURL={() =>
                      blurData("/assets/img/statikproje/horizontal2.jpg")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
