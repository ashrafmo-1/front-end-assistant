import React from "react";
import Link from "next/link"
import Banner from "../layout/banars/Banners";
import NavgationBar from "../layout/navbar/nav";

export const metadata = {
  title: "tools Assistant",
  description: "front end assistant sections",
};

const pages = [
  { id: "0", name: "home", link: "/pages/docs" },
  { id: "1", name: "projects", link: "/pages" },
  { id: "2", name: "github", link: "/pages" },
  { id: "3", name: "learn", link: "/pages" },
  { id: "5", name: "couces", link: "/pages" },
  { id: "5", name: "chanaleges", link: "/pages" },
  { id: "5", name: "programming language", link: "/pages" },
];

const layout = ({ children }) => {
  return (
    <>
      <Banner />
      <NavgationBar />
    <section className="pagesInformationAndAllSections w-full flex">
      <div className="sidebae bg-slate-400 w-1/5 h-screen  border-r-4 border-slate-700">
        <h1 className="title text-4xl mb-8 bg-slate-700 py-3 px-4 text-white">
          pages Assistant
        </h1>
        <div className="linksPages py-1 px-4">
          <ul className="flex flex-col">
            {pages.map((link) => (
              <Link href={link.link} className="underline text-2xl">
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className=" w-4/5 bg-slate-400">{children}</div>
    </section>
    </>
  );
};

export default layout;
