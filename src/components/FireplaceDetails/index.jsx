import Image from "next/image";
import blurData from "../../common/blurdataUrl";

const FireplaceDetails = ({ data }) => {
  return (
    <div className="mt-100 container">
      <div className="row">
        <div className="col-12 col-md-6  fireplace-details-main-image-container">
          <Image
            alt={data.name}
            src={data.mainImage}
            width={400}
            height={500}
            className="fireplace-details-main-image"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={() => blurData(data.mainImage)}
          />
        </div>
        <div className="col-12 col-md-6 pt-50">
          <h3>{data.name}</h3>
          <article className="fireplace-detail-description">
            {data.description}
          </article>
          <div className="fireplace-detail-divider"></div>
          <div className=" mt-25 d-flex flex-column gap-3">
            <div className="d-flex">
              <h6>Ölçüler: </h6>
              <div className="d-flex gap-1 " style={{ marginLeft: "20px" }}>
                <h6>{data.width}</h6>
                <h6>x</h6>
                <h6>{data.height}</h6>
                <h6>x</h6>
                <h6>{data.depth}</h6>
              </div>
            </div>
            <div className="d-flex gap-2">
              <h6>Isıtma Kapasitesi: </h6>
              <h6>{data.heatingCapacity}</h6>
            </div>
            <div className="d-flex gap-3">
              <h6>Garanti Süresi:</h6>
              <h6>{data.warranty}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-25 mb-25">
        <div className="col-12 col-md-3 fireplace-details-main-image-container order-md-0 order-1 text-center">
          <Image
            alt={data.name}
            src={data.subImage1}
            width={200}
            height={250}
            className="fireplace-details-main-image"
            placeholder="blur"
            blurDataURL={() => blurData(data.subImage1)}
          />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-around align-items-center gap-3 order-md-1 order-0 mb-25">
          <div>
            <div className="text-center">
              <Image
                alt={data.name}
                src="/assets/img/brt/fireplace/svg/effiency.svg"
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL={() =>
                  blurData("/assets/img/brt/fireplace/svg/effiency.svg")
                }
              />
            </div>
            <div>Effiency</div>
            <div>{data.effiency}</div>
          </div>
          <div>
            <div className="text-center">
              <Image
                alt={data.name}
                src="/assets/img/brt/fireplace/svg/heat-output.svg"
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL={() =>
                  blurData("/assets/img/brt/fireplace/svg/heat-output.svg")
                }
              />
            </div>
            <div>Heat-Output</div>
            <div>{data.heatOutput}</div>
          </div>
          <div>
            <div className="text-center">
              <Image
                alt={data.name}
                src="/assets/img/brt/fireplace/svg/nominal-output.svg"
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL={() =>
                  blurData("/assets/img/brt/fireplace/svg/nominal-output.svg")
                }
              />
            </div>
            <div>Nomimal-Output</div>
            <div>{data.nominalOutput}</div>
          </div>
          <div>
            <div className="text-center">
              <Image
                alt={data.name}
                src="/assets/img/brt/fireplace/svg/emissions.svg"
                width={30}
                height={30}
                placeholder="blur"
                blurDataURL={() =>
                  blurData("/assets/img/brt/fireplace/svg/emissions.svg")
                }
              />
            </div>
            <div>Co-Emissions</div>
            <div>{data.coEmissions}</div>
          </div>
        </div>
        <div className="col-12 col-md-3 fireplace-details-main-image-container order-md-2 order-2 text-center">
          <Image
            alt={data.name}
            src={data.subImage2}
            width={200}
            height={250}
            className="fireplace-details-main-image"
            placeholder="blur"
            blurDataURL={() => blurData(data.subImage2)}
          />
        </div>
      </div>
    </div>
  );
};

export default FireplaceDetails;
