import React from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const admins = [
  {
    id: "0",
    name: "ashraf mohamed",
    image: "/public/admins/me.jpg",
    jop: "Creator of Front end Assistant",
    github: "https://github.com/ashrafmo-1",
  },
  {
    id: "1",
    name: "ahmed mostafa",
    image: "/public/admins/elkwawy.jpg",
    jop: "soft ware front end developer",
    github: "https://github.com/elkwawy",
  },
  {
    id: "3",
    name: "Fady alamir",
    image: "/public/admins/fady.jpg",
    jop: "soft ware front end developer",
    github: "https://github.com/fadyalamir",
  },
];

const Contributors = () => {
  return (
    <section className="admins">
      <div className="container_content bg-white w-2/3 m-auto mt-20 mb-10">
        <h2 className="header_title capitalize text-center text-5xl w-3/4 m-auto font-bold" style={{color: "var(--lines)"}}>
          Programmers and employees working on the development of front-end
          Assistant
        </h2>

        <div className="boxes flex flex-wrap">
          {admins.map((admin) => (
            <div className="box_admin bg-sky-200 border border-sky-300 rounded w-96 h-24 m-auto mt-16 flex justify-around items-center" style={{backgroundColor: "var(--Secont_BGC)"}}>
              <Image width={50} height={50}
                src={admin.image.replace('/public', '')}
                alt={admin.name}
                style={{ borderRadius: "50%", height: "50px", width: "50px" }}
              />
              <div className="info">
                <h2 className="title capitalize" style={{color: "var(--text_color)"}}>{admin.name}</h2>
                <h2 className="title capitalize mb-2" style={{color: "var(--description_color)"}}>
                {admin.jop}
                </h2>
                <Link
                  href={admin.github}
                  target="_blank"
                  className="title capitalize bg-gray-400 py-1 px-2"
                >
                  gitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
