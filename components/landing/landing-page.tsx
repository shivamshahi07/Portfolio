"use client";
import ResumeButton from "../resume-button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import AboutMe from "./about-me/about-me";
import ContactMe from "./contact-me/contact-me";
import Exp from "./experience/experience";
import Projects from "./projects/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Background } from "../ui/bg";
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
    <main className="max-w-screen-xl px-8">
      <Background />
      <div className="">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
          👋🏼 Hey, I&#39;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Shivam!
          </span>
          <br />
        </h1>
      </div>
      <TextGenerateEffect
        words="Building seamless web solutions"
        className="max-w-xl text-lg md:text-xl mb-4 md:mb-6"
      />
      {/* <p className="">
        lorem ipsum dipsum lorem ipsum dipsum lorem ipsum dipsum lorem ipsum
        dipsum lorem ipsum dipsum lorem ipsum dipsum lorem ipsum dipsum lorem
        ipsum dipsum lorem ipsum dipsum lorem ipsum dipsum
      </p> */}
      <motion.p
        className={cn(
          "text-lg text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-3 md:mb-6",
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
          "text-lg text-neutral-800 dark:text-neutral-300 md:max-w-screen-md mb-8 md:mb-16",
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

      {/* About me section  */}
      <AboutMe />

      {/* Projects section */}
      <Projects />

      {/* Experience Section */}
      <Exp />

      {/* Contact Me Section */}
      <ContactMe />
    </main>
  );
};

export default LandingPage;
