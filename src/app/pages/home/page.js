import Banner from "@/app/layout/banars/Banners";
import NavgationBar from "@/app/layout/navbar/nav";
import React from "react";
import "./globals.css";
import Link from "next/link";
// import Image from "next/image";

const HomePage = () => {
  return (
    <section className="home h-screen" id="landing">
      <Banner />
      <NavgationBar />
      <div className="landing w-4/5 m-auto flex justify-center content-center flex-col">
        <h1 className="welcom_message font-bold text-center text-5xl capitalize mt-32 w-2/3 m-auto" style={{color: 'var(--text_color)'}}>
          Are you looking for tools, templates, components and a lot of
          auxiliary tools,
          This is your right place.
        </h1>
        <p className="description text-zinc-600 mt-7 text-center" style={{color: "var(--description_color)"}}>
          If you are a designer, programmer or even an ordinary person, your needs are met here.
        </p>
        <div className="btns w-fit m-auto mt-6 flex gap-4">
          <Link href={""} className="allFu bg-slate-900 text-2xl py-1 px-4 capitalize rounded" style={{color: 'var(--text_color)'}}>all features</Link>
          <a href={"https://github.com/Front-End-Tools-1"} target="_blank" className="allFu bg-slate-900 text-2xl py-1 px-4 capitalize rounded" style={{color: 'var(--text_color)'}}>github</a>
          <Link href={""} target="_blank" className="allFu bg-slate-900 text-2xl py-1 px-4 capitalize rounded" style={{color: 'var(--text_color)'}}>get help</Link>
        </div>
        <div className="animationScroll">

        </div>
        <div className="sea">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
          <div className="wave wave-4"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;