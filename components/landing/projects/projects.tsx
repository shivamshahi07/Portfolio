import Image from "next/image";
import Link from "next/link";
import { projectitems } from "./project-items";
import shlipkart from "@/public/images/shlipkart.png";

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
          <div className="flex">
            <div className="flex-grow space-y-10 mb-8  ">
              <Image
                src={shlipkart}
                width={400}
                height={400}
                alt={item.name}
                className="rounded-xl hover:scale-125 transition-all duration-500 mr-28 space-y-10 gap-10"
              />
            </div>
            <div className="flex-grow items-center justify-center">
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
                    Demo Link🔗
                  </Link>
                </div>
                <div>
                  <Link
                    href={item.github}
                    className="hover:text-green-400 hover:underline"
                  >
                    Github Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Projects;
