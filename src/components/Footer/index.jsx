/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className={`${classText ? "classText" : ""} mt-30`}>
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>İletişim</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Adres</h6>
                    <p>
                      İsmetpaşa Mah. Demircioğlu Cad. No:56 Merkez, Çanakkale
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>info@brtyapidizayn.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Telefon</h6>
                    <p>+90 543 543 97 86</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
                <Link href="#">
                  <a
                    href="https://wa.me/905323006879"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </Link>
                {/*
                <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link> */}
                <Link href="https://instagram.com/brtyapidizayn">
                  <a target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
              </div>
              <div className="copy-right">
                <p>© {currentYear}, Tüm Hakları Saklıdır</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
