import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

//services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "I can improve the web's style always listening to the client.",
    link: "Learn more",
  },
  {
    name: "Front-End Developer",
    description:
      "As a Full Stack Web Developer, my job is do my best in all sections, learning quickly as i can",
    link: "Learn more",
  },
  {
    name: "Back-End Developer",
    description:
      "This is the section where i can do my job quietly, doing all the things works in harmony on the app trying to improve the render",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services bg-cover mix-blend-lighten lg:bg-bottom bg-no-repeat mb-12 lg:mb-0 flex items-center flex-col justify-evenly"
          >
            <h2 className="h2 text-accent">What I Do</h2>
            <h3 className="h3 text-accent mix-blend-color-burn max-w-[455px] mb-16">
              I'm a Full Stack Web Developer
            </h3>
            <a href="https://www.github.com/joacobolzon" target="_blank" rel="noreferrer">
              <button className="btn btn-sm">See my work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((e, index) => {
                //destructure service
                const { name, description, link } = e;
                return (
                  <div
                    className="border-b border-white/20 h-[156px] mb-[38px] flex items-start"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-4">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
