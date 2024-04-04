"use client";
import ResumeButton from "../resume-button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import ContactMe from "./contact-me/contact-me";
import Exp from "./experience/experience";
import Project from "./projects/project";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Background } from "../ui/bg";
import { ChevronsDown } from "lucide-react";
import AboutMe from "./about/about-me";
import Footer from "./footer/footer";
import Projects from "./projects/projects";
import Skills from "./skills/skills";

const poppins = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const LandingPage = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Shivam.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <main>


    <div className="max-w-screen-xl px-8 ">
      <Background />
      <div className="">
        <h1 className="text-5xl md:text-5xl font-semibold mb-6 md:mb-6">
          👋🏼 Hey, I&#39;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Shivam!
          </span>
          <br />
        </h1>
      </div>
      <TextGenerateEffect
        words="Building seamless web solutions"
        className="max-w-xl text-xl md:text-2xl mb-6 md:mb-8"
      />
      {/* <p className="">
        lorem ipsum dipsum lorem ipsum dipsum lorem ipsum dipsum lorem ipsum
        dipsum lorem ipsum dipsum lorem ipsum dipsum lorem ipsum dipsum lorem
        ipsum dipsum lorem ipsum dipsum lorem ipsum dipsum
      </p> */}
      <motion.p
        className={cn(
          "text-xl text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-3 md:mb-6",
          poppins.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        Hey, I&apos;m{" "}
        <span className="text-neutral-800 dark:text-neutral-300 font-medium">
          Shivam Shahi
        </span>{" "}
        (
        <Link
          href={"https://twitter.com/Shivamshahi77"}
          className="text-blue-500 font-medium hover:text-blue-500/90"
          target="_blank"
        >
          @Shivamshahi77
        </Link>
        ) a Full Stack Developer from India. Passionate about Software
        Development, Machine Learning & Open-Source Softwares.
      </motion.p>
      <motion.p
        className={cn(
          "text-xl text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-8 md:mb-16",
          poppins.className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        I&#39;m currently an undergraduate, pursuing Computer Science majors
        with Specialization in Artificial Intelligence and Machine Learning from
        New Delhi, India.
      </motion.p>

      <ResumeButton />
      {/* scroll down button */}
      <ChevronsDown className="animate-bounce  w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48  scroll-mt-10 text-4xl md:text-5xl font-semibold mb-16 md:mb-4 " />

      {/* About me section  */}
      <AboutMe />
      <Skills />

      {/* Projects section */}
      <Projects/>

      {/* Experience Section */}
      <Exp />

      {/* Contact Me Section */}
    </div>
    </main>
  );
};

export default LandingPage;
