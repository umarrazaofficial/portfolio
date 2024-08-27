import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 app__skills-div">
      {technologies?.map((technology) => (
        <>
          <div className="app__skills-item app__flex">
            <div className="app__flex" style={{ backgroundColor: "#151030" }}>
              <img src={technology?.icon} alt="Icon" />
            </div>
            <p className="p-text">{technology?.name}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionWrapper(Skills, "Skills");
