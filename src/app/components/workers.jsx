import React from "react";
import Image from "next/image";
import Link from "next/link";

const Workers = ({ id, name, jop, github }) => {
  return (
    <div className="adminbox">
      <Image src={""} alt="" />
      <div className="info">
            <h2 className="title capitalize">{name}</h2>
            <h2 className="title capitalize mb-2">{jop}</h2>
            <Link href={github} target="_blank" className="title capitalize bg-gray-400 py-1 px-2">gitHub</Link>
          </div>
      <h1 className="DevJop"></h1>
      <h1 className="DevLink"></h1>
    </div>
  );
};

export default Workers;
