import React from "react";
import Link from "next/link";

const Dir = (props) => {
  return (
    <div className="flex gap-1 bg-gradient-to-r from-blue-400 border-blue-400 py-2">
      <div className="links w-4/5 m-auto">
        <Link href={"/pages"} className="dir_1 underline decoration-1 text-1xl">
          {props.dir_1}
        </Link>
        <Link href={"/pages/docs"} className="dir_1 underline decoration-1 text-1xl">
          {props.dir_2}
        </Link>
        <Link href={""} className="dir_1  underline decoration-1 text-1xl">
          {props.dir_3}
        </Link>
        <Link href={""} className="dir_1  underline decoration-1 text-1xl">
          {props.dir_4}
        </Link>
        <Link href={""} className="dir_1  underline decoration-1 text-1xl">
          {props.dir_5}
        </Link>
        <Link href={""} className="dir_1  underline decoration-1 text-1xl">
          {props.dir_6}
        </Link>
      </div>
    </div>
  );
};

export default Dir;
