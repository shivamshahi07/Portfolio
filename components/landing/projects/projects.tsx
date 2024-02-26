import Image from "next/image";
import Link from "next/link";
import { projectitems } from "./project-items";
import shlipkart from "@/public/images/shlipkart.png";
import { ArrowUpRightSquare, GithubIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <main className="">
      <h1
        className=" w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-36 scroll-mt-20 text-3xl md:text-4xl font-semibold mb-7 md:mb-20"
        id="projects"
      >
        Projects🧑🏻‍💻
      </h1>

      {projectitems.map((item) => {
        return (
          <motion.div className="md:flex flex-row mb-10 " key={item.id}ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}>
            <div className="md:flex  flex-row border border-separate rounded-xl px-4 shadow-lg  ">
              <div className="md:flex-grow space-y-10 mb-8 mt-8 md:ml-4  w-full ">
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.name}
                  className="rounded-xl hover:scale-125 transition-all duration-500  space-y-10 gap-10  "
                />
              </div>
              <div className="md:flex-grow items-center justify-center mt-8 ml-4 w-full  ">
                <h1 className="text-purple-600 font-semibold items-center ml-7 text-3xl ">
                  {item.name}
                </h1>
                <h3 className="ml-7">{item.description}</h3>
                <div className="ml-7 ">
                  <div className="flex items-center mb-1 mt-1 ">
                    <Link
                      href={item.demolink}
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
                      href={item.github}
                      className="hover:text-green-400 hover:underline"
                    >
                      <div className="flex gap-2 ">
                        Github Link
                        <GithubIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="block md:hidden mt-3 " />
            </div>
          </motion.div>
        );
      })}
    </main>
  );
};

export default Projects;
