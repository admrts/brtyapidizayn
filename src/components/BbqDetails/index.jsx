import Image from "next/image";
import blurData from "../../common/blurdataUrl";

const BbqDetails = ({ data }) => {
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
            {data.weight ? (
              <div className="d-flex gap-1">
                <h6>Ağırlık: </h6>
                <h6 style={{ marginLeft: "20px" }}>{data.weight}</h6>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="row mt-25 mb-25 justify-content-between">
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

export default BbqDetails;
