"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import "./nav.css";
import menu from "../../../../public/menu.png"
import Image from "next/image";

const navigation = [
  { name: "home", href: "/" },
  { name: "contributors", href: "#admins" },
  { name: "catigorys", href: "#catigory" },
  { name: "docs", href: "/docs", id: "docsPage" },
];

const NavgationBar = () => {
  // control nav class active
  const [active, setActive] = useState(false);
  const activeControl = () => {
    setActive(!active);
  };

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
    <section id={isNavFixed ? "navBarScrolling" : ""} className="navgationBar z-50 bg-gradient-to-r border-blue-400 py-2" style={{backgroundColor:"var(--Secont_BGC)"}}>
      
      <div className="container_content w-4/5 m-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="brand text-3xl font-bold text-white capitalize"
        >
          front-end assistant
        </Link>
        <nav className="links flex items-center gap-4" id={active ? "active" : ""} >
          {navigation.map((link) => (
            <ul key={link.id}>
            <Link href={link.href} id={link.id} className="link cursor-pointer text-1xl text-white font-bold capitalize" >
              {link.name}
            </Link>
            </ul>
          ))}
        </nav>
        <Image src={menu} width={30} height={30} className="toggleBtn cursor-pointer" alt="toggle bar" onClick={activeControl} />
      </div>
    </section>

  );
};
export default NavgationBar;