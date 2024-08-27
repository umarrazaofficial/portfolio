import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 app__skills-div">
      {technologies?.map((technology) => (
        <>
          {/* <div className="w-28 h-28" key={technology}>
           <img src={technology?.icon} alt="Icon" />
         </div> */}
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
