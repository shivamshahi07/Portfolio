import Image from "next/image";
import Link from "next/link";
import { projectitems } from "./project-items";
import { ArrowUpRightSquare, GithubIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
type ProjectProps = (typeof projectitems)[number];

export default function Project({
  id,
  name,
  description,
  skills,
  image,
  github,
  demolink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <main className="">
      <motion.div
        className="md:flex flex-row mb-10 "
        key={id}
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <div className="md:flex  flex-row border border-separate rounded-xl px-4 shadow-lg  ">
          <div className="md:flex-grow space-y-10 mb-8 mt-8 md:ml-4  w-full ">
            <Image
              src={image}
              width={500}
              height={500}
              alt={name}
              className="rounded-xl hover:scale-125 transition-all duration-500  space-y-10 gap-10  "
            />
          </div>
          <div className="md:flex-grow items-center justify-center mt-8 ml-4 w-full  ">
            <h1 className="text-purple-600 font-semibold items-center ml-7 text-3xl ">
              {name}
            </h1>
            <h3 className="ml-7">{description}</h3>
            <div className="ml-7 ">
              <div className="flex items-center mb-1 mt-1 ">
                <Link
                  href={demolink}
                  className="hover:text-blue-400 hover:underline"
                >
                  <div className="flex items-center justify-center gap-2">
                    Demo Link
                    <ArrowUpRightSquare />
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  href={github}
                  className="hover:text-green-400 hover:underline"
                >
                  <div className="flex gap-2 ">
                    Github Link
                    <GithubIcon />
                  </div>
                </Link>
              </div>
              <div className="rounded-full  text-white dark:text-blue-300  mt-4 -ml-2 ">
                <div>
                  <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
                    {skills.map((tag, key) => (
                      <li
                        className=" px-3 py-1 text-[0.7rem] uppercase border dark:bg-transparent bg-black/40 tracking-wider  rounded-full "
                        key={id}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr className="block md:hidden mt-3 " />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
