import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import something from "../assets/lootie.json";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mx-auto max-w-[800px] text-center scroll-mt-[100px]"
        id="about"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <p className="mt-4 text-sm text-[16px] leading-[22px]">
          Hi, I'm Umar Raza, a Front End Web Developer. Are you looking to establish a captivating online
          presence that not only impresses but also prioritizes adherence to SEO
          best practices? Look no further! I specialize in delivering bespoke
          web solutions using cutting-edge technologies, including HTML, CSS,
          Bootstrap, Material-UI, JavaScript, React and Next.js. I also excel at converting any design file, whether
          it's from Figma, PSD, or Adobe XD, into pixel-perfect HTML or React
          components, seamlessly bringing your vision to life on the web.
        </p>
      </motion.div>

      <div ref={ref} className="w-full max-w-[500px] m-auto">
        {isInView && <Lottie animationData={something} />}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
