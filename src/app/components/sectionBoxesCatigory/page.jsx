import Image from "next/image";
import React from "react";
import "./globals.css"

const BoxesInfo = [
  {id: 0, image: "./", title: "box title"},
  {id: 1, image: "./", title: "box title"},
  {id: 2, image: "./", title: "box title"},
  {id: 3, image: "./", title: "box title"},
  {id: 4, image: "./", title: "box title"},
  {id: 5, image: "./", title: "box title"},
];

const Catigory = () => {
  return (
    <section className="catigory mt-44 relative">
      <div className="container_content w-2/3 m-auto mt-28 mb-10">
        <h2 className="title capitalize text-center text-5xl w-3/4 m-auto font-bold mb-16">
          skills and training information page for front end assistant
        </h2>
        <div className="boxes_skills">
        {BoxesInfo.map((box) => (
            <div className="skill_box" style={{backgroundColor: "var(--Secont_BGC)"}}>
              <Image className="" src={""} width={""} height={""} alt="" />
              <h3 className="skill_title text-3xl" style={{color: "var(--text_color)"}}>{box.title}</h3>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Catigory;