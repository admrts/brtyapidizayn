import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const CustomImage = ({ src, width, height, alt }) => {
  const blurData = async () => {
    try {
      const source = src;

      const buffer = await fetch(source).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );

      const { base64 } = await getPlaiceholder(buffer);

      console.log(base64);
    } catch (err) {
      err;
    }
  };
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurData}
    />
  );
};

export default CustomImage;
