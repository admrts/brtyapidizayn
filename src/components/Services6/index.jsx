import React from "react";
import Link from "next/link";
import Image from "next/image";
import blurData from "../../common/blurdataUrl";

const Services6 = () => {
  return (
    <div className="services6-section">
      <div className="container homepage-store-container">
        <Link href="/kulturtaslari" passHref>
          <div className="homepage-store-items-container-first">
            <div className="homepage-store-image-container">
              <Image
                priority
                width={150}
                height={150}
                src="/assets/img/stones/asimetrik/atacama/antracita.jpeg"
                alt=""
                className="img-fluid rounded-circle    "
                placeholder="blur"
                blurDataURL={() =>
                  blurData(
                    "/assets/img/stones/asimetrik/atacama/antracita.jpeg"
                  )
                }
              />
            </div>
            <div className="article-container">
              <h3 className="store-items-title">Kültür Taşları</h3>
              <p>
                Yapısal olarak elverişli ve uygun biçimde hazırlanmış herhangi
                bir yüzeye uygulanabilir ve uygulandığı yüzeyin dahili bir
                parçası haline geldiğinden, hiçbir temel veya yapısal değişiklik
                gerektirmez.
              </p>
            </div>
          </div>
        </Link>

        <div className="homepage-store-items-container-second">
          <Link href="/kulturtuglalari" passHref>
            <div className="homepage-store-image-container">
              <Image
                priority
                width={150}
                height={150}
                src="/assets/img/stones/tuglalar/java/cotto.jpeg"
                alt=""
                className="img-fluid rounded-circle "
                placeholder="blur"
                blurDataURL={() =>
                  blurData("/assets/img/stones/tuglalar/java/cotto.jpeg")
                }
              />
            </div>
          </Link>
          <div className="article-container">
            <h3 className="store-items-title">Kültür Tuğlası</h3>
            <p>
              Yapısal olarak elverişli ve uygun biçimde hazırlanmış herhangi bir
              yüzeye uygulanabilir ve uygulandığı yüzeyin dahili bir parçası
              haline geldiğinden, hiçbir temel veya yapısal değişiklik
              gerektirmez.
            </p>
          </div>
        </div>
        <div className="homepage-store-items-container-third">
          <Link href="/somineler" passHref>
            <div className="homepage-store-image-container">
              <Image
                priority
                width={150}
                height={150}
                src="/assets/img/brt/fireplace/fireplace.jpg"
                alt=""
                className="img-fluid rounded-circle"
                placeholder="blur"
                blurDataURL={() =>
                  blurData("/assets/img/brt/fireplace/fireplace.jpg")
                }
              />
            </div>
          </Link>
          <div className="article-container">
            <h3 className="store-items-title">Şömineler</h3>
            <p>
              Maksimum konfor ve modern tasarım sunan evler oluşturmak için
              tasarlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services6;
