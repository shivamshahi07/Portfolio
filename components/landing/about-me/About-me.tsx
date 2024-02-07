import { cn } from "@/lib/utils";
import { MotionConfig } from "framer-motion";

const AboutMe = () => {
  return (
    <main
      className="w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-12 scroll-mt-20"
      id="about-me"
    >
        <h1 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-4">About Me</h1>
        
        <p
        className="text-lg text-neutral-400 md:max-w-screen-md mb-8 md:mb-16"
      >
        Hi, my name is Shivam and I am a highly ambitious, self-motivated, and driven software engineer .
      </p>
    </main>
  );
};

export default AboutMe;
