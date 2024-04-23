import React from "react";
import Link from "next/link";
import "./globals.css"; // docs globals css styling

export const metadata = {
  title: "tools Assistant",
  description: "front end assistant sections",
};

export const pages = [
  { name: "introduction", link: "/docs" },
  { name: "information styles", link: "/docs/stylingassistant" },
  { name: "learn programming language", link: "/docs/learnProgramming" },
  { name: "problem solving pages", link: "/docs" },
  { name: "visual stodio extintions", link: "/docs/vsExtintions" },
  { name: "ai tools", link: "/docs/aitools" },
  { name: "cv sites", link: "/docs" },
  { name: "fake apis pages", link: "/docs" },
  { name: "are you need help? contact", link: "/docs" },
];

const layout = ({ children }) => {
  return (
    <>
      {/* <NavgationBar /> */}
      <section className="pagesInformationAndAllSections w-full flex">
        <div
          className="sidebae w-1/5 h-screen border-r"
          style={{ backgroundColor: "var(--Docs_BGC)", borderColor: "var(--Docs_BGC"}}
        >
          <h1
            className="title text-4xl mb-8 py-3 px-4 text-white capitalize"
            style={{ backgroundColor: "var(--Docs_BGC)", height: "50px" }}
          >
            pages assistant
          </h1>
          <div className="linksPages py-1 px-4">
            <ul className="flex flex-col gap-4">
              {pages.map((link) => (
                <Link
                  href={link.link}
                  className="text-2xl rounded py-1 px-2 capitalize"
                  style={{
                    backgroundColor: "var(--Docs_Second_BGC)",
                    color: "var(--Docs_text_color)",
                  }}>
                  { link.name }
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className=" w-4/5" style={{backgroundColor: "var(--Docs_Second_BGC)"}}>{children}</div>
      </section>
    </>
  );
};

export default layout;
