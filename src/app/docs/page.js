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
        <h1
          className="titlePage text-4xl mb-5"
          style={{ color: "var(--Docs_text_color)" }}
        >
          Welcome to Our Front End Assistant Documentation
        </h1>
        <p
          className="text-2xl"
          style={{ color: "var(--Docs_description_color)" }}
        >
          ✅Hello and welcome! Whether you're a seasoned developer or just
          starting out on your coding journey, we're thrilled to have you here.
          Our Front End Assistant is designed to streamline your development
          process and enhance your web projects with efficiency and ease.
        </p>
        <p
          className="my-5 text-2xl"
          style={{ color: "var(--Docs_description_color)" }}
        >
          ✅In this documentation, you'll find everything you need to harness
          the power of our Front End Assistant to its fullest potential. From
          getting started guides to advanced tips and tricks, we've got you
          covered every step of the way.
        </p>

        <h1
          className="sectionTitle text-4xl mt-11 mb-4"
          style={{ color: "var(--Docs_text_color)" }}
        >
          What You'll Discover Here:
        </h1>
        <p
          style={{ color: "var(--Docs_description_color)", fontSize: "1.3rem" }}
        >
          <span className="my-1 text-2xl">1.Getting Started:</span> New to our
          Front End Assistant? Dive into our beginner-friendly guides to quickly
          set up and integrate our tool into your workflow.
        </p>
        <p
          className="my-3"
          style={{ color: "var(--Docs_description_color)", fontSize: "1.3rem" }}
        >
          <span>
            <span className="my-1 text-2xl">2.Features and functions:</span>{" "}
            explore the rich set of features offered by our front-end Assistant,
            from code optimization to browser compatibility testing, unleash the
            full potential of your projects and you will receive many pages that
            help you, important codes and the most important things in the field
            of web design
          </span>
        </p>
        <p
          className="my-3"
          style={{ color: "var(--Docs_description_color)", fontSize: "1.3rem" }}
        >
          <span>
            <span className="my-1 text-2xl">3.Best Practices:</span> Learn industry best practices and expert techniques
            for maximizing productivity and efficiency in your front-end
            development process.
          </span>
        </p>
      </section>
    </section>
  );
};

export default page;
