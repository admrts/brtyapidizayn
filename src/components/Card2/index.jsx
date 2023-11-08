import Link from "next/link";
import React from "react";

const Card2 = ({ item }) => {
  return (
    <Link href={`/stones-details/${item.title}`}>
      <div
        className="border p-0 border-dark rounded d-flex flex-column gap-3"
        style={{ width: "18rem" }}
      >
        <img className=" rounded " src={item.image} alt={item.title} />
        <h6 className="text-center">{item.title}</h6>
        <p className="text-center">{item.description}</p>
      </div>
    </Link>
  );
};

export default Card2;
