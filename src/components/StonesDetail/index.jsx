import { useState, useEffect, useRef } from "react";
import stones from "../../data/stonesBricks/stones.json";
import bricks from "../../data/stonesBricks/bricks.json";
import Image from "next/image";

const Stones = ({ category, name }) => {
  const [mainImage, setMainImage] = useState();
  const [currentStoneData, setCurrentStoneData] = useState();
  const [currentStoneTitle, setCurrentStoneTitle] = useState(name);
  const [stonesData, setStonesData] = useState();
  const [imagePreview, setImagePreview] = useState(false);

  useEffect(() => {
    const stonesList = stones
      .filter((item) => item.title === category)
      .concat(bricks.filter((item) => item.title == category));
    setStonesData(stonesList);
    const current = stonesList[0].kind.find((item) => item.title === name);
    setCurrentStoneData(current);
    setMainImage(current.colors[0]);
  }, []);

  const handleColorsClick = (item) => {
    setMainImage(item);
  };
  const handleButtonClick = (item) => {
    setCurrentStoneData(item);
    setCurrentStoneTitle(item.title);
    setMainImage(item);
  };
  const handleMainImageClick = () => {
    setImagePreview(true);
  };

  return (
    <div className="details-page-container position-relative ">
      {imagePreview ? (
        <ImagePreviewModal item={mainImage} setImagePreview={setImagePreview} />
      ) : null}
      {mainImage ? (
        <div
          className="position-absolute bg-img valign bg-homepage-img w-100 h-100"
          style={{
            backgroundImage: `url(${mainImage.image})`,
            opacity: "0.6",
            zIndex: -50,
          }}
        ></div>
      ) : null}
      <div className="container ">
        <h4 className="row justify-content-center ">{category}</h4>
        <div className="container">
          <div className=" details-page-kind-container">
            {stonesData
              ? stonesData[0].kind.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleButtonClick(item)}
                    className="details-page-colors-button  "
                  >
                    {item.title}
                  </div>
                ))
              : null}
          </div>
          <div className="row">
            <div className="text-center fs-3 my-4">{currentStoneTitle}</div>
          </div>
        </div>

        <div className="container"></div>

        <div className="container">
          <div className="row  ">
            {mainImage ? (
              <div className="details-main-image-container">
                <Image
                  priority
                  width={500}
                  height={500}
                  className="details-main-image"
                  src={mainImage.image}
                  alt={mainImage.title}
                  onClick={handleMainImageClick}
                />
              </div>
            ) : null}
          </div>
          <h5 className="text-center mt-50 mb-50">RENKLER</h5>
          <div className="details-colors-container">
            {currentStoneData
              ? currentStoneData.colors.map((item, i) => (
                  <div className="details-color-image-container" key={i}>
                    <Image
                      priority
                      width={100}
                      height={100}
                      className="details-colors-image"
                      src={item.image}
                      alt={item.title}
                      onClick={() => handleColorsClick(item)}
                    />
                    <div className="text-center mt-10">{item.title}</div>
                  </div>
                ))
              : null}
          </div>
          <h6 className="text-center mt-50">Teknik Özellikler</h6>
        </div>
      </div>
    </div>
  );
};

export default Stones;

const ImagePreviewModal = ({ item, setImagePreview }) => {
  const handleDivClick = () => {
    setImagePreview(false);
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // Olayın yayılmasını engeller
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="image-preview" onClick={handleDivClick}>
      <Image
        onClick={handleInnerClick}
        priority
        src={item.image}
        alt={item.title}
        height={700}
        width={1000}
      />
    </div>
  );
};
