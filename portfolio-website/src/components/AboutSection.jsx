"use client";
import React, { useRef, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/custom-hooks/useSectionInView";
import { TAB_DATA } from "@/lib/data/data";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { ref } = useSectionInView("About");

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        translateX: 50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="py-5 text-white my-5"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 h-full">
        <div className="relative w-full md:w-auto">
          <Image
            src="/images/study.png"
            layout="responsive"
            width={185}
            height={185}
            alt="study-office"
          />
        </div>
        <div className="mt-5 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#EEBA35] mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I'm a dynamic web developer with expertise in JavaScript, Node.js,
            React, MongoDB, GIT and TailwindCSS. Committed to continuous growth,
            I'm actively pursuing full-stack engineering studies and have
            completed projects that use my current stack, such as my version of
            the popular Kanban style web app from Trello, called Wizardboards.
            Eager to tackle new challenges and leave a lasting mark in web
            development. Ready to make things happen!
          </p>
          <div className="flex flex-row  justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
