import ResumeButton from "../resume-button";
import { TypewriterEffect } from "../ui/typewriter-effect";

import AboutMe from "./about-me/About-me";
import ContactMe from "./contact-me/contact-me";
import Exp from "./experience/experience";
import Projects from "./projects/projects";

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
    <main className="">
      <TypewriterEffect words={words} />
      <ResumeButton/>



      {/* About me section  */}
      <AboutMe />

      {/* Projects section */}
      <Projects />

      {/* Experience Section */}
      <Exp/>

      {/* Contact Me Section */}
      <ContactMe />
    </main>
  );
};

export default LandingPage;
