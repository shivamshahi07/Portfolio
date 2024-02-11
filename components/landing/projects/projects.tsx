import Image from "next/image";
import Link from "next/link";
import shlipkart from "@/public/images/shlipkart.png";
import { GithubIcon } from "lucide-react";

const Projects = () => {
  return (
    <main
      className="w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-12 scroll-mt-20"
      id="projects"
    >
      <h1
        className=" w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-12 scroll-mt-20 text-3xl md:text-4xl font-semibold mb-3 md:mb-4"
        id="about-me"
      >
        Projects🧑🏻‍💻
      </h1>
      <div className="flex">
        <div className="flex-grow">
          <Image
            src={shlipkart}
            width={1500}
            height={1500}
            alt={"Shlipkart"}
            className="rounded-xl hover:scale-125 transition-all duration-500 mr-28"
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-red-500">Shlipkart</h1>
          <h3>
            An E-Commerce App built with google authentication where users can
            add and remove items from their shopping carts{" "}
          </h3>

          <Link
            href="https://shlipkart-shivam-shahis-projects.vercel.app/"
            className="hover:text-blue-400"
          >
            🔗
          </Link>

          <Link href="https://github.com/shivamshahi07/Shlipkart">
            Github Link
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
