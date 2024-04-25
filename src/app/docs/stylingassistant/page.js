import React from "react";
import Dir from "../layout/direction/dir";

const page = () => {
  return (
    <section>
      <Dir dir_1={" -> Docs"} dir_2={"-> Information Styles"} />
      <section className="stylingDocsPage p-3">
        <h1
          className="docTitle text-3xl font-bold mb-4"
          style={{ color: "var(--text_color)" }}
        >
          Welcome to the Styling Documentation
        </h1>
        <p
          className="docIntro text-lg mb-4"
          style={{ color: "var(--description_color)" }}
        >
          This section is dedicated to teaching you about CSS styling
          effectively. Whether you are a beginner or looking to enhance your
          skills, this documentation will provide valuable insights and
          resources.
        </p>
        <div className="docSections mb-8">
          <h2
            className="sectionTitle text-2xl font-semibold mb-3"
            style={{ color: "var(--text_color)" }}
          >
            Learning CSS Styling
          </h2>
          <p style={{ color: "var(--description_color)" }}>
            Master the art of CSS styling to create visually appealing web
            pages. This section includes links to tutorials, best practices, and
            advanced techniques.
          </p>
          <ul
            className="linksList list-disc ml-5"
            style={{ color: "var(--description_color)" }}
          >
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="text-blue-400 underline"
              >
                MDN CSS Documentation
              </a>
            </li>
            <li>
              <a
                href="https://css-tricks.com"
                className="text-blue-400 underline"
              >
                CSS-Tricks
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/css/"
                className="text-blue-400 underline"
              >
                W3Schools CSS Tutorial
              </a>
            </li>
          </ul>
        </div>
        <div className="docSections mb-8">
          <h2
            className="sectionTitle text-2xl font-semibold mb-3"
            style={{ color: "var(--text_color)" }}
          >
            
          </h2>
          <p style={{ color: "var(--description_color)" }}>Let's see our forms, designs and pages in front end assistant </p>
          <ul
            className="linksList list-disc ml-5"
            style={{ color: "var(--description_color)" }}
          >
            <li>
              <a
                href="https://git-scm.com/doc"
                className="text-blue-400 underline"
              >
                Colors links
              </a>
            </li>
            <li>
              <a
                href="https://git-scm.com/doc"
                className="text-blue-400 underline"
              >
                images links
              </a>
            </li>
            <li>
              <a
                href="https://git-scm.com/doc"
                className="text-blue-400 underline"
              >
                icons links
              </a>
            </li>
            <li>
              <a
                href="https://git-scm.com/doc"
                className="text-blue-400 underline"
              >
                colors links
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default page;
