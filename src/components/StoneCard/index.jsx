import Link from "next/link";
import React from "react";
import Image from "next/image";

const StoneCard = ({ item }) => {
  return (
    <Link href={`/stones/${item.title}`}>
      <div className="stones-card" style={{ width: "18rem" }}>
        <div className="stones-page-image-container">
          <Image width={200} height={200} src={item.image} alt={item.title} />
        </div>
        <h6 className="text-center">{item.title}</h6>
        <p className="text-center">{item.description}</p>
      </div>
    </Link>
  );
};

export default StoneCard;
