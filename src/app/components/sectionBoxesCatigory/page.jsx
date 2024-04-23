import React from "react";
import "./globals.css"
import Image from "next/image";

const BoxesInfo = [
  {id: 0, img: "/public/assets/catigorys/web.png", title: "styles"},
  {id: 1, img: "/public/assets/catigorys/programming.png", title: "learn programming"},
  {id: 2, img: "/public/assets/catigorys/abilities.png", title: "problem solving"},
  {id: 3, img: "/public/assets/catigorys/visual-studio.png", title: "vs extintions"},
  {id: 4, img: "/public/assets/catigorys/ai.png", title: "ai tools"},
  {id: 5, img: "/public/assets/catigorys/cv.png", title: "cv sites"},
  {id: 5, img: "/public/assets/catigorys/api.png", title: "fake apis"},
];

const Catigory = () => {
  return (
    <section className="catigory mt-44 relative">
      <div className="container_content w-2/3 m-auto mt-28 mb-10">
        <h2 className="title capitalize text-center text-5xl w-3/4 m-auto font-bold mb-32">
          skills and training information page for front end assistant
        </h2>
        <div className="boxes_skills">
        {BoxesInfo.map((box) => (
            <div className="skill_box relative h-40 rounded" style={{backgroundColor: "var(--Secont_BGC)"}}>
              <Image className="absolute left-1/2 -translate-x-1/2 -translate-y-12" src={box.img.replace('/public', '')} width={80} height={80} alt={box.title} />
              <h3 className="skill_title w-full text-3xl absolute bottom-3 left-1/2 -translate-x-1/2 capitalize" style={{color: "var(--text_color)"}}>{box.title}</h3>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Catigory;