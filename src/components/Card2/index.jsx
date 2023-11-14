import Link from "next/link";
import React from "react";

const Card2 = ({ item }) => {
  return (
    <Link href={`/stones-details/${item.category}/${item.title}`}>
      <div className="stones-card" style={{ width: "18rem" }}>
        <img src={item.image} alt={item.title} />
        <h6 className="text-center">{item.title}</h6>
        <p className="text-center">{item.description}</p>
      </div>
    </Link>
  );
};

export default Card2;
