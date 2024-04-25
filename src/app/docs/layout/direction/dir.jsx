import React from "react";
import Link from "next/link";

const Dir = (props) => {
  return (
    <div
      className="flex content-between items-center gap-1 bg-gradient-to-r py-2"
      style={{
        backgroundColor: "var(--Docs_BGC)",
        height: "50px",
        color: "var(--Docs_text_color)",
      }}
    >
      <div className="links w-4/5 m-auto">
        <Link href={"/docs"} className="dir_1 underline decoration-1 text-1xl">
          {props.dir_1}
        </Link>
        <Link
          href={"/pages/docs"}
          className="dir_1 underline decoration-1 text-1xl"
        >
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
      <Link href={"/"} className="home_page mr-10">home</Link>
    </div>
  );
};

export default Dir;
