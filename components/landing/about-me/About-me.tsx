import { cn } from "@/lib/utils";
import { MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/shivam.jpg";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Shivam from "../shivam_avatar";

const AboutMe = () => {
  return (
    <main className="">
      <h1
        className=" w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-12 scroll-mt-20 text-3xl md:text-4xl font-semibold mb-3 md:mb-4"
        id="about-me"
      >
        About Me🧑🏻‍🔧
      </h1>
      <div className="flex">
        <div className="flex-grow ">
          <p className="text-lg text-slate-600 dark:text-neutral-400 md:max-w-screen-md mb-8 md:mb-4">
            Hi, my name is Shivam and I am a highly ambitious, self-motivated
            and driven Software Engineer .
          </p>
          <p className="text-lg text-slate-600 dark:text-neutral-400 md:max-w-screen-md mb-8 md:mb-4">
            I am passionate about creating not just functional, but also
            aesthetically pleasing and intuitive user interfaces, ensuring a
            seamless user experience.
          </p>
          <p className="text-lg  text-slate-600 dark:text-neutral-400 md:max-w-screen-md mb-8 md:mb-4">
            I thrive on innovation and creative problem-solving. Whether it&#39;s
            building from scratch or optimizing existing systems, I bring a
            fresh perspective to every project
          </p>
          <p className="text-lg text-slate-600 dark:text-neutral-400 md:max-w-screen-md mb-8 md:mb-4">
            Beyond coding, you&rsquo;ll find me listening to{" "}
            <Link
              href={"https://open.spotify.com/user/b4p96ia2c1r8gjil2h2rqo7wi"}
              className="text-green-400 underline-offset-1"
            >
              music🎵
            </Link>{" "}
            or playing Soccer ⚽️, which adds a touch of balance and inspiration
            to my life outside of programming.
          </p>
        </div>
        <div className="flex-grow ">
          <Shivam onDesktop={true} />
          {/* <Image
            src={img}
            alt="Yep! This is Me!"
            width={360}
            height={420}
            className="sm:flex-row rounded-lg shadow-lg hover:scale-105 hover:-rotate-6 transition-all duration-400"
          /> */}
        </div>
      </div>
      <Shivam onDesktop={false} />
    </main>
  );
};

export default AboutMe;
