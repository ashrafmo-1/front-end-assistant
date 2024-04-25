"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import "./nav.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "home", href: "/" },
  { name: "contributors", href: "#admins" },
  { name: "catigorys", href: "#catigory" },
  { name: "docs", href: "/docs", id: "docsPage" },
];

const NavgationBar = () => {

  const [isNavFixed, setIsNavFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <section id={isNavFixed ? "navBarControl" : ""} className="navgationBar z-50 bg-gradient-to-r from-blue-500 to-blue-900 border-blue-400 py-2">
      <div className="container_content w-4/5 m-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="brand text-4xl font-bold text-white capitalize"
        >
          front-end assistant
        </Link>
        <nav className="links flex items-center gap-4">
          {navigation.map((link) => (
            <ul key={link.id}>
            <Link href={link.href} id={link.id} className="link cursor-pointer text-2xl text-white font-bold capitalize" >
              {link.name}
            </Link>
            </ul>
          ))}
          {/* <div className="btn_more">
            <span className="btnLinks_btn text-white bg-cyan-950 py-1 px-2 text-2xl rounded">
              styling
            </span>
            <div className="more_links bg-cyan-950 py-1 px-2 rounded">
              {styling.map((link) => (
                <Link
                  href={link.href_section}
                  className="link cursor-pointer text-black capitalize"
                >
                  {link.name_section}
                </Link>
              ))}
            </div>
          </div>
          <div className="learning_more">
            <span className="learningLinks_btn text-white bg-cyan-950 py-1 px-2 text-2xl rounded">
              learning
            </span>
            <div className="more_links bg-cyan-950 py-1 px-2 rounded">
              {learning.map((link) => (
                <Link
                  href={link.href_section}
                  className="link cursor-pointer capitalize"
                >
                  {link.name_section}
                </Link>
              ))}
            </div>
          </div> */}
        </nav>
      </div>
    </section>

  );
};
export default NavgationBar;