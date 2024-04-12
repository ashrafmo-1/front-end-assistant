import React from "react";
import Banner from "../layout/banars/Banners";
import NavgationBar from "../layout/navbar/nav";
import Dir from "../layout/direction/dir";
import Link from "next/link";

const page = () => {
  return (
    <section className="pagesDocumentation">
      <Dir dir_1={" -> Docs"} />
      <section className="introDocsPage">
      <h1 className="title text-3xl">pages Assistant</h1>
      </section>
    </section>
  );
};

export default page;
