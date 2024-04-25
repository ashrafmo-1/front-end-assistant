import React from "react";
import Dir from "../layout/direction/dir";

const ProblemSolving = () => {
  return (
    <div>
      <Dir dir_1={" -> Docs"} />
      <section className="p-3">
      <h1 className="docTitle text-3xl font-bold mb-4" style={{color: "var(--text_color)"}}>
      Welcome to Problem Solving Documentation
      </h1>
      <p className="docIntro text-lg mb-4" style={{color: "var(--description_color)"}}>
        Welcome to the comprehensive documentation on learning programming languages. 
        This section is designed to provide you with all the necessary resources and guides 
        to enhance your programming skills across various languages.
      </p>
      <div className="docSections mb-8">
        <h2 className="sectionTitle text-2xl font-semibold mb-3" style={{color: "var(--text_color)"}}>
          Problem Solving in Programming
        </h2>
        <p style={{color: "var(--description_color)"}}>
          Problem solving is a critical skill in programming.
          pages that cover various problem-solving techniques and challenges in programming.
        </p>
        <ul className="linksList list-disc ml-5" style={{color: "var(--description_color)"}}>
          <li><a href="/docs/problemsolving/page1" className="text-blue-400 underline">Problem Solving Page 1</a></li>
          <li><a href="/docs/problemsolving/page2" className="text-blue-400 underline">Problem Solving Page 2</a></li>
          <li><a href="/docs/problemsolving/page3" className="text-blue-400 underline">Problem Solving Page 3</a></li>
          <li><a href="/docs/problemsolving/page4" className="text-blue-400 underline">Problem Solving Page 4</a></li>
          <li><a href="/docs/problemsolving/page5" className="text-blue-400 underline">Problem Solving Page 5</a></li>
          <li><a href="/docs/problemsolving/page6" className="text-blue-400 underline">Problem Solving Page 6</a></li>
          <li><a href="/docs/problemsolving/page7" className="text-blue-400 underline">Problem Solving Page 7</a></li>
          <li><a href="/docs/problemsolving/page8" className="text-blue-400 underline">Problem Solving Page 8</a></li>
          <li><a href="/docs/problemsolving/page9" className="text-blue-400 underline">Problem Solving Page 9</a></li>
          <li><a href="/docs/problemsolving/page10" className="text-blue-400 underline">Problem Solving Page 10</a></li>
          <li><a href="/docs/problemsolving/page11" className="text-blue-400 underline">Problem Solving Page 11</a></li>
          <li><a href="/docs/problemsolving/page12" className="text-blue-400 underline">Problem Solving Page 12</a></li>
          <li><a href="/docs/problemsolving/page13" className="text-blue-400 underline">Problem Solving Page 13</a></li>
          <li><a href="/docs/problemsolving/page14" className="text-blue-400 underline">Problem Solving Page 14</a></li>
          <li><a href="/docs/problemsolving/page15" className="text-blue-400 underline">Problem Solving Page 15</a></li>
          <li><a href="/docs/problemsolving/page16" className="text-blue-400 underline">Problem Solving Page 16</a></li>
          <li><a href="/docs/problemsolving/page17" className="text-blue-400 underline">Problem Solving Page 17</a></li>
          <li><a href="/docs/problemsolving/page18" className="text-blue-400 underline">Problem Solving Page 18</a></li>
          <li><a href="/docs/problemsolving/page19" className="text-blue-400 underline">Problem Solving Page 19</a></li>
          <li><a href="/docs/problemsolving/page20" className="text-blue-400 underline">Problem Solving Page 20</a></li>
        </ul>
      </div>

      </section>
    </div>
  );
};

export default ProblemSolving;
