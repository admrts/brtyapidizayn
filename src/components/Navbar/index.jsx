import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from "../../common/getSiblings";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar  navbar-expand-lg position-fixed" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img
                src={appData.lightLogo}
                alt="logo"
                ref={logoRef}
                style={{ width: "150px", height: "50px" }}
              />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <span
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Link href="/">Anasayfa</Link>
                </span>
              </li>
              <li className="nav-item">
                <Link href="/hakkimizda">
                  <a className="nav-link">Hakkımızda</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hizmetlerimiz
                </span>
                <div className="dropdown-menu">
                  <Link href="/projelendirme">
                    <a className="dropdown-item">Projelendirme</a>
                  </Link>
                  <Link href="/kesifplanlama">
                    <a className="dropdown-item">Keşif Planlama</a>
                  </Link>
                  <Link href="/lazertarama3dmodelleme">
                    <a className="dropdown-item">Lazer Tarama & 3D Modelleme</a>
                  </Link>
                  <Link href="/dekorasyon">
                    <a className="dropdown-item">Dekorasyon</a>
                  </Link>
                  <Link href="/celikkonstruksiyon">
                    <a className="dropdown-item">Çelik Konstrüksiyon</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Link href="/magaza">Mağaza</Link>
                </span>
              </li>
              <li className="nav-item">
                <Link href="/iletisim">
                  <a className="nav-link">İletişim</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
