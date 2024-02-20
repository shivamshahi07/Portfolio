import Image from "next/image";
import Link from "next/link";
import { projectitems } from "./project-items";
import shlipkart from "@/public/images/shlipkart.png";
import { ArrowUpRightSquare, GithubIcon } from "lucide-react";

const Projects = () => {
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
          <div className="md:flex flex-row" key={item.id} >
            <div className="md:flex-grow space-y-10 mb-8 mt-8">
              <Image
                src={shlipkart}
                width={400}
                height={400}
                alt={item.name}
                className="rounded-xl hover:scale-125 transition-all duration-500 mr-28 space-y-10 gap-10  "
              />
            </div>
            <div className="md:flex-grow items-center justify-center mt-8 ml-8 ">
              <h1 className="text-purple-600 font-semibold items-center ml-7">
              {item.name}
            </h1>
              <h3 className="ml-7">{item.description}</h3>
              <div className="ml-7">
                <div className="flex items-center">
                  <Link
                    href={item.demolink}
                    className="hover:text-blue-400 hover:underline"
                  >
                    <div className="flex items-center justify-center gap-2">

                    Demo Link<ArrowUpRightSquare/>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href={item.github}
                    className="hover:text-green-400 hover:underline"
                  >
                    <div className="flex gap-2 ">

                    Github Link<GithubIcon/>
                    </div>
                  </Link>
                </div>
              </div>
              <hr className="block md:hidden mt-3 " />
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Projects;
