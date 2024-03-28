"use client";

import React from "react";

import { projectitems } from "@/components/landing/projects/project-items";
import Project from "./project";


export default function Projects() {


  return (
    <section  id="projects" className="scroll-mt-28 mb-28">

      <div>
      <h1
        className=" w-full flex flex-col gap-y-2 items-center justify-center px-4 md:px-36 lg:px-48 mt-36 scroll-mt-20 text-3xl md:text-4xl font-semibold mb-7 md:mb-20"
        id="projects"
      >
        Projects🧑🏻‍💻
      </h1>
        {projectitems.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}