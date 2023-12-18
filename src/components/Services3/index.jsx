import React from "react";
import services3Data from "../../data/services3.json";
import Link from "next/link";

const Services3 = ({ bigTitle, grid }) => {
  return (
    <section
      className={`${!grid ? "services" : "services-grid"} section-padding ${
        !grid ? "bg-gray" : "pt-0"
      } `}
    >
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6
                  className="custom-font wow fadeInDown"
                  data-wow-delay=".3s"
                ></h6>
                <h4 className="playfont wow flipInX " data-wow-delay=".5s">
                  Hizmetlerimiz
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center ">
            <h3>Best Features.</h3>
          </div>
        )}

        <div className="row justify-content-center gap-2">
          {services3Data.map((item, index) => (
            <Link href={item.href} key={item.id} passHref>
              <div className="col-lg-3 services-item-container">
                <div
                  className="item-bx bg-img wow fadeInUp"
                  data-wow-delay={
                    index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"
                  }
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span id="services-item-icon" className={item.icon}></span>
                  <h6 className="mb-20 services3-title">{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
