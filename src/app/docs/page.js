import React from "react";
import Banner from "../layout/banars/Banners";
import NavgationBar from "../layout/navbar/nav";
import Dir from "./layout/direction/dir";
// import Link from "next/link"; not uses
import "./globals.css"; // globals documentation style;

const page = () => {
  return (
    <section className="pagesDocumentation">
      <Dir dir_1={" -> Docs"} />
      <section className="introDocsPage p-3">
      <h1 className="docTitle text-3xl font-bold mb-4" style={{color: "var(--text_color)"}}> Welcome to Our Front End Assistant Documentation</h1>
      <p className="docIntro text-lg mb-4 flex-col flex" style={{color: "var(--description_color)"}}>
      <span className="mb-2">
      ✅Hello and welcome! Whether you're a seasoned developer or just
          starting out on your coding journey, we're thrilled to have you here.
          Our Front End Assistant is designed to streamline your development
          process and enhance your web projects with efficiency and ease.
      </span>
      <span className="mb-2">
      ✅In this documentation, you'll find everything you need to harness
          the power of our Front End Assistant to its fullest potential. From
          getting started guides to advanced tips and tricks, we've got you
          covered every step of the way.
          </span>
        This documentation is designed to help you navigate through the site, understand its features, and make the most out of the tools and resources available.
      </p>


      <div className="docSections mb-8">
        <h2 className="sectionTitle text-2xl font-semibold mb-3" style={{color: "var(--text_color)"}}>Getting Started</h2>
        <p style={{color: "var(--description_color)"}}>
        Front End Assistant? Dive into our beginner-friendly guides to quickly
          set up and integrate our tool into your workflow.
        </p>
        <p style={{color: "var(--description_color)"}}>
          Start by exploring the main sections of the site, including the tools, templates, and components designed to assist front-end developers and designers.
        </p>
      </div>
      <div className="docSections mb-8">
        <h2 className="sectionTitle text-2xl font-semibold mb-3" style={{color: "var(--text_color)"}}>Features</h2>
        <ul className="featuresList list-disc ml-5" style={{color: "var(--description_color)"}}>
          <li>Comprehensive guides on CSS styling and programming languages.</li>
          <li>Visual Studio extensions and AI tools for enhanced productivity.</li>
          <li>Access to CV sites and fake APIs for testing and development.</li>
        </ul>
      </div>
      <div className="docSections mb-8">
        <h2 className="sectionTitle text-2xl font-semibold mb-3" style={{color: "var(--text_color)"}}>Support</h2>
        <p style={{color: "var(--description_color)"}}>
          If you need help or have any questions, visit the "Are you need help? Contact" section for assistance.
        </p>
      </div>
      <div className="docSections">
        <h2 className="sectionTitle text-2xl font-semibold mb-3" style={{color: "var(--text_color)"}}>Contribution</h2>
        <p className="flex flex-col" style={{color: "var(--description_color)"}}>
          <span>Contributions are welcome! Visit our GitHub page to contribute to the project or to view the source code.</span>
          <a className=" text-blue-400 underline" href="https://github.com/ashrafmo-1/Front-End_tools">https://github.com/ashrafmo-1/Front-End_tools</a>
        </p>
      </div>

      </section>
    </section>
  );
};

export default page;


