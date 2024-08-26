import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            draggable={false}
          />
          {/* <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};
const Works = () => {
  return (
    <>
      <div id="work" className="scroll-mt-[100px]">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Explore My Projects</h2>
      </div>
      <div className="w-full flex ">
        <p className="mt-3 text-secondary sm:text-[17px] text-[14px] max-w-3xl sm:leading-[30px] leading-[20px]">
          This section showcases a curated selection of my recent projects,
          highlighting my expertise and versatility as a software engineer. From
          dynamic web applications to responsive websites, each project
          demonstrates my proficiency in utilizing cutting-edge technologies and
          implementing innovative solutions. Take a closer look at my work and
          see how I can help bring your ideas to life
        </p>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-7 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
