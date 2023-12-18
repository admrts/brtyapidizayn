import Link from "next/link";
import React from "react";
import Image from "next/image";
import blurData from "../../common/blurdataUrl";

const Card2 = ({ item }) => {
  return (
    <Link href={`/stones-details/${item.category}/${item.title}`} passHref>
      <div className="stones-card" style={{ width: "18rem" }}>
        <div className="stones-page-image-container">
          <Image
            width={200}
            height={200}
            src={item.image}
            alt={item.title}
            placeholder="blur"
            blurDataURL={() => blurData(item.image)}
          />
        </div>
        <h6 className="text-center">{item.title}</h6>
        <p className="text-center">{item.description}</p>
      </div>
    </Link>
  );
};

export default Card2;
