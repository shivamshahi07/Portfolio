import { cn } from "@/lib/utils";
import { MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import first from "@/public/images/first-pr.png";
import bounty from "@/public/images/bounty-pr.png";
import img from "@/public/images/20240206_212232.jpg";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
            I thrive on innovation and creative problem-solving. Whether it's
            building from scratch or optimizing existing systems, I bring a
            fresh perspective to every project
          </p>
          <p className="text-lg text-slate-600 dark:text-neutral-400 md:max-w-screen-md mb-8 md:mb-4">
            Beyond coding, you'll find me listening to{" "}
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
          <Image
            src={img}
            alt="Yep! This is Me!"
            width={360}
            height={420}
            className="sm:flex-row rounded-lg shadow-lg hover:scale-105 hover:-rotate-6 transition-all duration-400"
          />
        </div>
      </div>
      <h2 className="text-2xl mt-12 text-teal-500 dark:text-teal-700">
        My Journey
      </h2>
      <div>
        <div>
          <p>
            My journey into the world of coding has been a dynamic exploration,
            starting with open-source contributions and evolving into a
            multifaceted full-stack developer. Here's a glimpse of my
            development journey:
          </p>

          <h1 className="text-3xl text-blue-600 dark:text-indigo-500 mt-12">
            Embracing the Open Source Community (Year 2023 - Present)
          </h1>

          <div>
            <li className="">
              My journey began with a deep dive into the world of open source.As
              everyone I was also attracted to making my first contribution in a
              README.md file but my college room mate stopped me from making
              such contributions and I am very thankful that he did.
            </li>
            <li>
              After learning Some New Skills.I found myself drawn to projects
              like the{" "}
              <span className="text-blue-600">
                <Link
                  href={"https://app.100xdevs.com/"}
                  className="text-underline"
                >
                  100xdevs
                </Link>
              </span>{" "}
              Organisation, where I made meaningful contributions that not only
              enriched my coding skills but also connected me with a vibrant
              global community.
            </li>
            <li>
              I still remember the day my first{" "}
              <span className="text-purple-600 font-semibold">
                PR got merged.
              </span>{" "}
              That easily Comes up into my top ten happiest moments
              <span id="img">
                <Image
                  src={first}
                  width={360}
                  height={300}
                  alt="first PR"
                  className="rounded-lg hover:scale-150 transition-all duration-400 shadow-lg"
                />
              </span>
            </li>
            <div className="flex">
              <li className="flex-grow ">
                I truly realised my potential when the owner of the organisation
                appreciated my contributions with a{" "}
                <span className="text-purple-600 font-semibold">
                  bounty of $5{" "}
                </span>
                it was the just the push i needed to know that i chose the right
                path. it could not have come at a better time .
              </li>
              <Image
                src={bounty}
                width={500}
                height={360}
                alt="Bounty PR"
                className="flex-grow rounded-xl hover:scale-125 transition-all duration-400 shadow-lg  "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
