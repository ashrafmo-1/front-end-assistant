import Dir from "@/app/docs/layout/direction/dir";
import React from "react";
import "./globals.css";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Dir
        dir_1={" -> Docs"}
        dir_2={" -> learnProgramming"}
        path2={"/docs/learnProgramming"}
      />
      <div className="DocsProgrammingPage p-3">
        <Link href={"/docs/learnProgramming"} className="titlePage text-4xl relative w-fit cursor-pointer" style={{color: "var(--Docs_text_color)"}}>
          right now you on master page to learn programming fundamentals
        </Link>
      </div>
    </div>
  );
};

export default page;
// hello are you need learning programming fundamintals
