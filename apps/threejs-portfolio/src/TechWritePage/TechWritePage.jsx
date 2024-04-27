import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Sand from "./components/Sand";
import Pen from "./components/Pen";

const TechWritePage = () => {
  const [subSection, setSubSection] = useState("post");
  return (
    <>
      <Header setSubSection={setSubSection} />
      <div className="w-screen absolute top-32 bg-[#0d051a]">
        {subSection === "post" ? (
          <Posts />
        ) : subSection === "sand" ? (
          <Sand />
        ) : (
          <Pen />
        )}
      </div>
    </>
  );
};

export default TechWritePage;
