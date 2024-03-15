"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { useSectionInView } from "@/lib/custom-hooks/useSectionInView";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

const HeroSection = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");

  return (
    <section ref={ref} className="">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-12 mt-10  mb-10"
        initial={{
          opacity: 0,
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
      >
        <motion.div
          initial={{
            opacity: 0,
            translateX: -50,
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
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            style={{ minHeight: "180px" }}
          >
            {"Hello there,  "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am Gabor",
                2000,
                "and I am a web-dev",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#EEBA35] text-base font-semibold sm:text-lg mb-6 lg:text-xl py-5">
            Currently, my tech stack comprises React for front-end development,
            Node.js for server-side scripting, and MongoDB for database
            management, all stylized with Tailwind CSS for streamlined design.
            Amidst my passion for technology, I've seamlessly blended my fervor
            for the wizarding world of Harry Potter into various projects,
            inspiring a unique fusion of my two passions. Always fueled by a
            relentless pursuit of excellence, I thrive on embracing new
            challenges and pushing the boundaries of innovation in both realms.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              <Link
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
                href="#Contact"
              >
                Hire me
              </Link>
            </button>

            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-trasnparent hover:bg-slate-200 text-white border hover:text-black mt-3">
              <a
                href="/CV.pdf"
                download
                className="group flex flex-row gap-2 items center justify-center"
              >
                Download CV{""}
                <HiDownload
                  className="
                  opacity-70 transition duration-200 ease-in-out
                  group-hover:translate-y-1
                  group-hover: -translate-x-1
                  justify-center items-center
                "
                />
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            translateX: -50,
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
          className="col-span-5 mt-4 py-2 lg:mt-0 place-self-center text-center sm:text-left justify-center"
        >
          <div className="rounded-[100%] bg-[#FFD25F] w-[265px] h-[265px] lg:w-[350px] lg:h-[350px] mx-auto relative justify-center items-center">
            <Image
              src="/images/wizard.png"
              alt="Gabor the Wizard"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
